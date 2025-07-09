import { config as dotenv } from "dotenv";

export const loadConfig = () => {
  dotenv({ path: `.env.${process.env.NODE_ENV}.local`, quiet: true });
  dotenv({ path: ".env.local", quiet: true });
  dotenv({ path: ".env", quiet: true });
};
