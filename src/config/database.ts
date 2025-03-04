import knex from "knex";
import { Knex } from "knex";
import knexConfig from "../knexfile.mjs";

const db: Knex = knex(knexConfig.development);
export default db;