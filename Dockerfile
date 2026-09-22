FROM node:22-alpine AS base

WORKDIR /app

RUN corepack enable

FROM base AS dependencies

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM dependencies AS build

COPY . .

RUN DATABASE_URL="postgresql://build:build@localhost:5432/build" pnpm exec prisma generate
RUN pnpm build

FROM base AS production-dependencies

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM base AS runtime

ENV NODE_ENV=production
ENV PATH="/app/node_modules/.bin:${PATH}"

COPY --from=production-dependencies --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/prisma ./prisma
COPY --from=build --chown=node:node /app/src/generated/prisma ./src/generated/prisma
COPY --from=build --chown=node:node /app/prisma7.config.ts ./prisma7.config.ts
COPY --chown=node:node package.json pnpm-lock.yaml ./

USER node

EXPOSE 3000

CMD ["sh", "-c", "prisma migrate deploy && prisma db seed && node dist/main.js"]
