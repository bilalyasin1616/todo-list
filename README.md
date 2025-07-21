# Todo List

A simple Todo List application.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) (for package management)

### Installation

1. **Install dependencies:**

   ```sh
   pnpm install
   ```

2. **Environment Variables:**

   - Copy the contents of your `.env` file to a new file named `.env.local` in the project root.
   - Example:
     ```sh
     cp .env .env.local
     ```
   - Edit `.env.local` as needed for your local development environment.

3. **Run the application:**
   ```sh
   pnpm dev
   ```

## E2E Tests

To run end-to-end (E2E) tests, you must start the application in a separate terminal first:

1. Environment Variables

   - Copy the contents of your `.env` file to a new file named `.env.e2e` in the project root.
   - Example:

   ```sh
   cp .env .env.e2e
   ```

   - Edit `.env.e2e` as needed for your e2e tests.

2. Start the application:

```
pnpm start:dev
```

or (for production build):

```
pnpm start
```

3. In a new terminal, run the E2E tests:

```
pnpm test:e2e
```

E2E tests require the app to be running before they are executed.

## Test via Postman

Import the Postman collection and environment files from `__postman__` into a Postman Workspace and test endpoints

- Set user_id to simulate endpoints for a specific user
- Set list_id to target a specific TODO List
- Set item_id to target a specific Item inside a TODO List

## Scripts

- `pnpm start:dev` — Start in development mode
- `pnpm build` — Build the application
- `pnpm start` — Start the application
- `pnpm test:e2e` - Run end to end tests

## Project Structure

- `src/` — Source code
- `src/domain/` — Domain models
- `src/routes/` — API routes
- `src/store/` — Data store logic
- `src/types/` — TypeScript type definitions

---
