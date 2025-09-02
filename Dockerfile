# Node 20 Alpine
FROM node:20-alpine AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.7.1 --activate

# Install deps
COPY package.json pnpm-lock.yaml* package-lock.json* bun.lockb* .npmrc* ./
RUN pnpm i --frozen-lockfile || pnpm i

# Copy source
COPY . .

# Build server
RUN pnpm build:server

EXPOSE 4000
CMD ["pnpm","start"]
