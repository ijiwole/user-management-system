/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex.schema.createTable("addresses", (table) => {
      table.increments("id").primary();
      table.integer("user_id").notNullable();
      table.string("street", 100).notNullable();
      table.string("city", 50).notNullable();
      table.string("state", 50).notNullable();
      table.string("zip_code", 20).notNullable();
      table.string("country", 50).notNullable();
      table.timestamps(true, true);
  
      // Foreign key reference to users table
      table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async (knex) => {
    await knex.schema.dropTableIfExists("addresses");
  };
  