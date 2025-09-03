# Verified Athlete Sphere

This project includes a Fastify TypeScript backend and a Vite React frontend.

## Prerequisites
- Node.js 20+
- npm (or pnpm) and Docker (for Postgres/Redis via compose)

## Environment
Create a `.env` file at the repo root (copy and edit from below):

```
NODE_ENV=development
PORT=4000
HOST=0.0.0.0

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/vas?schema=public
REDIS_URL=redis://localhost:6379

JWT_SECRET=replace-with-strong-secret
JWT_REFRESH_SECRET=replace-with-strong-refresh-secret

# Optional (for media in future)
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY=minioadmin
S3_SECRET_KEY=minioadmin
S3_BUCKET=media
S3_REGION=us-east-1
```

## Install
```
npm install
```

## Run services (Docker)
```
docker compose up -d postgres redis
```

## Backend
- Dev: `npm run dev`
- Build server: `npm run build:server`
- Start built server: `npm start`
- Health: `GET http://localhost:4000/health`
- Docs (Swagger UI): `http://localhost:4000/docs`

## Database (Prisma)
```
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

## Frontend
```
npm run dev:frontend
```

## Example requests (curl)

Signup
```
curl -sS -X POST http://localhost:4000/auth/signup \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "alice@example.com",
    "handle": "alice",
    "password": "Str0ngPass!",
    "name": "Alice"
  }'
```

Login
```
curl -sS -X POST http://localhost:4000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "login": "alice",
    "password": "Str0ngPass!"
  }'
```

Refresh
```
curl -sS -X POST http://localhost:4000/auth/refresh \
  -H 'Content-Type: application/json' \
  -d '{
    "refreshToken": "<jwt-refresh>"
  }'
```

Feed (temporary header auth: X-User-Id)
```
curl -sS 'http://localhost:4000/v1/feed?limit=20' \
  -H 'X-User-Id: <userId>'
```

## WebSockets
- Notifications namespace: `ws://localhost:4000/notifications`
- DMs namespace: `ws://localhost:4000/dms`

## Testing
```
npm test
```
# Verified Athlete Sphere

A platform for verified athletes and fans to connect, share, and stream live.

## Getting Started


# Step 1: Clone the repository using the project's Git URL.
git init


