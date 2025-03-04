/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex.schema.createTable("posts", (table) => {
      table.increments("id").primary();
      table.integer("user_id").unsigned().notNullable();
      table.string("title").notNullable(); 
      table.text("body").notNullable(); 
      table.timestamps(true, true); 
  
  
      table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async (knex) => {
    await knex.schema.dropTableIfExists("posts");
  };
  