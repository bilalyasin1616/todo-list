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

1. Start the application:

```
pnpm start:dev
```

or (for production build):

```
pnpm start
```

2. In a new terminal, run the E2E tests:

```
pnpm test:e2e
```

E2E tests require the app to be running before they are executed.

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
