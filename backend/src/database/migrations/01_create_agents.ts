import Knex from 'knex';


export async function up(knex: Knex){

   return  knex.schema.createTable('agents', table => {

        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('class').notNullable();
        table.string('skills').notNullable();
        
    });

}



export async function down(knex: Knex){
    return knex.schema.dropTable('agents');

}