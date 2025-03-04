declare module "../knexfile.mjs" {
    import { Knex } from "knex";
    const knexConfig: { [key: string]: Knex.Config };
    export default knexConfig;
  }
  