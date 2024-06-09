/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id'),
    table.integer('user_id'),
    table.string('name'),
    table.string('type'),
    table.boolean('exercise'),
    table.integer('feed')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('pets')
};
