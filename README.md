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

## Scripts

- `pnpm dev` — Start in development mode
- `pnpm build` — Build the application
- `pnpm start` — Start the application

## Project Structure

- `src/` — Source code
- `src/domain/` — Domain models
- `src/routes/` — API routes
- `src/store/` — Data store logic
- `src/types/` — TypeScript type definitions

---
