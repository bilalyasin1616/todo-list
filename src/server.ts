import app from "./app";
import { loadConfig } from "./config";

loadConfig();

const APP_PORT = process.env.APP_PORT || 3000;

app.listen(APP_PORT, () => {
  console.log(`Server running at: http://localhost:${APP_PORT}`);
});
