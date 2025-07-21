import { config as dotenv } from "dotenv";

export const loadConfig = () => {
  dotenv({ path: `.env.${process.env.NODE_ENV}`, quiet: true });
  dotenv({ path: ".env", quiet: true });
};
