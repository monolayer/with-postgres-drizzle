# Next.js Starter Template with Postgres and Drizzle

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)

## Requirements

- [Docker](https://www.docker.com) in installed in your local development environment.

## Getting Started

```bash
mkdir with-postgres-drizzle
cd with-postgres-drizzle
npx degit https://github.com/monolayer/cloud-examples/with-postgres-drizzle
npm install
```

## Running Locally

Start the development database server with:

```bash
npm workloads start dev
```

Then, run the database migrations and seed the database:

```bash
npm db:bootstrap
```

Finally, run the Next.js development server:

```bash
npm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.
