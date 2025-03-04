import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "../database.sqlite"),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "migrations"),
      extension: "mjs",
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
      extension: "mjs",
    },
  },
};
