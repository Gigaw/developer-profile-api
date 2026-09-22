FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN DATABASE_URL="postgresql://build:build@localhost:5432/build" pnpm exec prisma generate
RUN pnpm build

EXPOSE 3000

CMD ["sh", "-c", "pnpm exec prisma migrate deploy && pnpm exec prisma db seed && node dist/main"]