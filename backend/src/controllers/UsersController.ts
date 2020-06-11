import {Request, Response, response}  from 'express';
import knex from '../database/connection';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';


interface Validation  {
    oldPassword: string;
    password: string;
    field: string;
};

class UsersController {

    async index(req: Request, res: Response) {
        const { email, password } = req.body;

    
        const userInfo = await knex('users')
        .where('email', email).first()
        ;

        const userPassWord = await knex('users')
        .where('password', password)
        .where('email', email)
        .first();
        

        if(!userInfo && !userPassWord) {
           return res.status(401).json({ ERROR: 'Invalid E-mail'});
        };
        if(!userPassWord) {
            return res.status(401).json({ ERROR: 'Invalid Password'});
        }
    
       return res.json(userInfo);
    }



    async show(req: Request, res: Response) {
        const { id } = req.params;

        console.log(id)

        const user = await knex('users').where('id', id).first();

        if(!user) {
            return res.status(400).json({ error: 'User not found!'});
        };

        const agents = await knex('agents')
        .join('users_agents', 'agents.id', '=', 'users_agents.agent_id')
        .where('users_agents.user_id', id)
        .select('agents.id', 'agents.name', 'agents.image', 'agents.class', 'agents.skills')


        return res.json({user, agents});
    };


    async create(req: Request, res: Response){
        const schema = Yup.object().shape({
            nick: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails'})
        };

       const {
            nick,
            email,
            password,
            elo,
            agents

        } = req.body;

    const trx = await knex.transaction();

    const user = {
        nick,
        email,
        password,
        elo,
        
    };

    const insertedIds =  await trx('users').insert(user);

        const user_id =  insertedIds[0];

        const userAgents = agents.map((agent_id: number) => {
            return {
                agent_id,
                user_id
            }});

        await trx('users_agents').insert(userAgents);


        await trx.commit();

        return res.json({
            id: user_id,
            ...user,
        }) 
    }
    ;

    async update(req: Request, res: Response) {

        const schema = Yup.object().shape({
            nick: Yup.string(),
            elo: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6),
            password: Yup.string().min(6).when('oldPassword', (oldPassword, field) => 
                oldPassword ? field.required() : field
            ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            )
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails'})
        };


        const { email, oldPassword, password, nick, elo } = req.body;

        const user = await knex('users').where('id', req.userID).first();
        
        // console.log(oldPassword);

        if(email !== user.email) {
            const userExists = await knex('users').where('email', email).first();

            if(userExists) {
                return res.status(401).json({ error: 'User already exists'})
            }
        }
        if(oldPassword && !(oldPassword === user.password)) {
            
            return res.status(401).json({ error: 'Password does not match'});
        }

        const data = await knex('users')
        .where('id', req.userID).first()
        .update('email', email).update('password', password)
        .update('nick', nick).update('elo', elo)
        ;

        return res.json({ data })


    };
}

export default UsersController;