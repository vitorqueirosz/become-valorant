import { Request, Response }  from 'express';
import jwt from 'jsonwebtoken';
import knex from '../database/connection';
import authConfig from '../config/auth';
import * as Yup from 'yup';
import auth from '../config/auth';

class SessionController {

    async store(req: Request, res: Response) {
        const schema = Yup.object().shape({
            email: Yup.string().email(),
            password: Yup.string().required()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails'})
        };


        const { email, password } = req.body;

        const user = await knex('users').where('email', email).first();
        const userPassword = await knex('users').where('email', email).where('password', password).first();

        console.log(user.id);
        console.log(userPassword);


        if(!user) {
            return res.status(401).json({ error: 'User not found.'});
        };

        if(!userPassword) {
            return res.status(401).json({ error: 'Password does not match'});
        }

        const { id, nick } = user;

        return res.json({
            user: {
                id,
                nick,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    }      
};


export default SessionController;