# Clash Royale Stats Dashboard

Application for viewing Clash Royale player and clan statistics built with Next.js 15 and TypeScript.

This repository contains a web dashboard that queries Clash Royale data (via a backend API) and presents player profiles, clan pages, battle logs, charts and a favorites system.

## Table of Contents

- About
- Features
- Tech stack
- Requirements
- Environment variables
- Quick start (local)
- Docker
- Available scripts
- Project structure

## About

The app is a Next.js application (App Router) designed to provide an easy-to-use UI to browse Clash Royale statistics. It includes:

- Player lookup with recent battles and performance charts
- Clan pages with member lists and clan war views
- Favorites and local persistence for quick access
- Reusable UI components and charts for statistics visualization

## Features

- Search players and clans by tag
- Battle log preview and battle replay links
- Player win/loss charts and win rate visualization
- Clan member tables, clan descriptions, and ranking info
- Local favorites storage and client-side caching

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS & DaisyUI
- Recharts for charts
- Fetch for API calls (cached)
- Docker and docker-compose for containerized runs

## Requirements

- Node.js 18+ (LTS) recommended
- npm, yarn or pnpm
- Docker & docker-compose (optional, for containerized runs)

## Environment variables

This project expects a Clash Royale API base URL and an API key. The code references the following environment variables (see `src/lib/fetchApi.ts`):

- `CR_BASE_URL` — the base URL for the Clash Royale API (example: `https://api.clashroyale.com/v1`)
- `CR_API_KEY` — the Bearer API key/token used in the Authorization header

Create a `.env.local` file in the project root for local development and add these values (do NOT commit secrets):

```env
CR_BASE_URL=https://api.clashroyale.com/v1
CR_API_KEY=your_api_key_here
```

If you run the app in Docker or CI, provide these variables via an environment file or secrets manager. Example for macOS / zsh (temporary in current shell session):

```bash
export CR_BASE_URL="https://api.clashroyale.com/v1"
export CR_API_KEY="your_api_key_here"
npm run dev
```

## Quick start (local)

1. Clone the repo and change into the directory:

```bash
git clone <repo-url>
cd clash-royale-stats
```

2. Install dependencies (choose your package manager):

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Create `.env.local` with the required variables (see above).

4. Start the development server:

```bash
npm run dev
# The app will be available at http://localhost:3000
```

## Build & Production

Build the app and run it in production mode:

```bash
npm run build
npm run start
```

## Docker

This repo includes a `Dockerfile` and `docker-compose.yml` for running the app in a container. To run with Docker Compose (example):

1. Create a `.env` file next to `docker-compose.yml` with the environment variables used by the service (`CR_BASE_URL`, `CR_API_KEY`).

2. Start with Docker Compose:

```bash
docker compose up --build -d
# or
docker-compose up --build -d
```

3. To view logs:

```bash
docker compose logs -f
```

Note: The exact service name and environment wiring are defined in `docker-compose.yml`. Use `docker compose ps` to inspect running containers.

## Available scripts

These scripts are defined in `package.json`:

- `npm run dev` — start Next.js in development (with turbopack)
- `npm run build` — create a production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

Adjust commands to `pnpm`/`yarn` if you prefer those package managers.

## Project structure (high level)

- `src/app` — Next.js App Router pages and layouts
- `src/components` — React components organized by feature
- `src/lib` — small utilities and API helper (`fetchApi.ts` contains the CR_BASE_URL/CR_API_KEY usage)
- `src/types` — TypeScript types for API responses and domain models
- `docker-compose.yml`, `Dockerfile` — container setup