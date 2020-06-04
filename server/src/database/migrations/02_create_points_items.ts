import Knex from 'knex';

export async function up(knex: Knex) {
  // create table
  return knex.schema.createTable('points_items', table => {
    table.increments('id').primary();

    table.integer('point_id')
      .notNullable()
      .references('id') /** referência a chave estrangeira */
      .inTable('points');

    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items');

  });
}

export async function down(knex: Knex) {
  // dismantle table 
  return knex.schema.dropTable('points_items');
}