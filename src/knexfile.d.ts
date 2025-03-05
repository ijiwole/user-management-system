import { Knex } from 'knex';

declare module 'knexfile' {
  const config: { [key: string]: Knex.Config };
  export default config;
}