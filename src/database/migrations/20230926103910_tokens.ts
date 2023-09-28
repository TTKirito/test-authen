import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("Tokens", (table) => {
        table.increments("tokenId").primary();
        table.integer("userId").unsigned().notNullable();
        table.foreign("userId").references('Users.id');
        table.text("refreshToken").notNullable();
        table.string("expiresIn").notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deletedAt').defaultTo(null);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("Tokens");
}

