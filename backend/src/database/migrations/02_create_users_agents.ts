import Knex from 'knex';


export async function up(knex: Knex){

   return  knex.schema.createTable('users_agents', table => {

        table.increments('id').primary();
        

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');
        
        table.integer('agent_id')
        .notNullable()
        .references('id')
        .inTable('agents');
        
    });

}



export async function down(knex: Knex){
    return knex.schema.dropTable('users_agents');

}