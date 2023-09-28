import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("Users", (table) => {
        table.increments("id").primary();
        table.string("firstName").notNullable();
        table.string("lastName").notNullable();
        table.string("email").notNullable();
        table.string("hash").notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deletedAt').defaultTo(null);    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("Users");
}

