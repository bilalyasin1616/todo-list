import express from "express";
import router from "./routes";
import { loadConfig } from "./config";

loadConfig();

const app = express();
app.use(express.json());
app.use("/api/todo", router);

export default app;
