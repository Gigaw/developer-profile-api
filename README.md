# Developer Profile API

Backend application built with NestJS, GraphQL, Prisma, PostgreSQL and Docker.

The API exposes information about my professional profile, skills, work experience and projects through GraphQL.

## Tech Stack

- TypeScript
- Node.js
- NestJS
- GraphQL
- Apollo Server
- Apollo Sandbox
- Prisma
- PostgreSQL
- Docker
- pnpm

## Live Demo

GraphQL API / Apollo Sandbox:

```text
https://developer-profile-api-22cz.onrender.com/graphql
```

Source code:

```text
https://github.com/Gigaw/developer-profile-api
```

## Running the Application

### Requirements

- Docker
- Docker Compose

### Start

Clone the repository and run:

```bash
docker compose up --build
```

On startup the application automatically:

1. Starts PostgreSQL
2. Waits until the database is ready
3. Applies Prisma migrations
4. Seeds the database with profile data
5. Starts the NestJS application

The GraphQL API and Apollo Sandbox are available at:

```text
http://localhost:3000/graphql
```

### Stop

```bash
docker compose down
```

### Clean Start

To remove the database volume and verify the application from a completely clean state:

```bash
docker compose down -v
docker compose up --build
```

The database will be created again, all migrations will be applied and the initial data will be seeded automatically.

## Example GraphQL Query

```graphql
query {
  profile {
    name
    description
    github
    linkedin

    skills {
      id
      name
    }

    experience {
      company
      position
      period
      achievements
    }

    projects {
      name
      url
    }
  }
}
```

## Architecture

The application separates the GraphQL API layer, application logic and database access.

```text
GraphQL Request
      ↓
ProfileResolver
      ↓
ProfileService
      ↓
PrismaService
      ↓
PostgreSQL
```

### ProfileResolver

Handles GraphQL queries and exposes the profile API.

### ProfileService

Contains profile-related application logic and coordinates access to persisted data.

### PrismaService

Provides database access through Prisma Client.

## Database Model

The application stores a single professional profile with related skills, work experience and projects.

```text
Profile
├── Skills
├── Experience
└── Projects
```

The relationships are modeled as one-to-many relations:

```text
Profile 1 ─── * Skill
Profile 1 ─── * Experience
Profile 1 ─── * Project
```

The database schema is defined in:

```text
prisma/schema.prisma
```

Database migrations are stored in:

```text
prisma/migrations/
```

## Database Initialization

Initial profile data is defined separately from the seed logic:

```text
prisma/
├── seed.ts
└── seed-data.ts
```

`seed.ts` contains the database initialization logic.

`seed-data.ts` contains the professional profile data.

The seed is idempotent: if the profile already exists, it does not create duplicate data.

## Project Structure

```text
src/
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── profile/
│   ├── models/
│   │   ├── profile.model.ts
│   │   ├── skill.model.ts
│   │   ├── experience.model.ts
│   │   └── project.model.ts
│   │
│   ├── profile.module.ts
│   ├── profile.resolver.ts
│   └── profile.service.ts
│
├── app.module.ts
└── main.ts

prisma/
├── migrations/
├── schema.prisma
├── seed.ts
└── seed-data.ts

Dockerfile
compose.yaml
.env.example
```

## Local Development

For development outside the application Docker container, install dependencies:

```bash
pnpm install
```

Create the local environment file:

```bash
cp .env.example .env
```

Start PostgreSQL:

```bash
docker compose up -d db
```

Apply database migrations:

```bash
pnpm exec prisma migrate dev
```

Seed the database:

```bash
pnpm exec prisma db seed
```

Start NestJS in development mode:

```bash
pnpm start:dev
```

The GraphQL API will be available at:

```text
http://localhost:3000/graphql
```

## Useful Commands

### Build the application

```bash
pnpm build
```

### Generate Prisma Client

```bash
pnpm exec prisma generate
```

### Create a new migration

```bash
pnpm exec prisma migrate dev --name migration_name
```

### Run database seed

```bash
pnpm exec prisma db seed
```

### Open Prisma Studio

```bash
pnpm exec prisma studio
```

### Start Docker services

```bash
docker compose up --build
```

### Stop Docker services

```bash
docker compose down
```

### Remove Docker services and database volume

```bash
docker compose down -v
```

## Environment Variables

The project uses the following environment variable:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/portfolio?schema=public"
```

An example configuration is provided in:

```text
.env.example
```

The real `.env` file is excluded from Git.

## Notes

- GraphQL schema is generated using the NestJS code-first approach.
- Apollo Sandbox is available through the `/graphql` endpoint.
- Prisma migrations are applied automatically when the Docker application starts.
- Initial database data is seeded automatically after migrations.
- Docker Compose waits for PostgreSQL to become healthy before starting the application.
