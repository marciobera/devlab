import Knext from "knex";

export async function up(knex: Knext) {
  return knex.schema.createTable("class_schedule", (table) => {
    table.increments("id").primary();

    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
export async function down(knex: Knext) {
  return knex.schema.dropTableIfExists("class_schedule");
}
