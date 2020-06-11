import Knex from 'knex';
import bcrypt from 'bcrypt';

export async function up(knex: Knex){

   return  knex.schema.createTable('users', table => {

        table.increments('id').primary();
        table.string('nick').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('elo').notNullable();
        
    
    });

    
    // const hashPassword = bcrypt.hash
}



export async function down(knex: Knex){
    return knex.schema.dropTable('users');

}