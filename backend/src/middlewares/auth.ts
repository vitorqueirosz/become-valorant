import jwt, { decode } from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

import {Request, Response, NextFunction}  from 'express';


// interface UserId {
//     user_id: number
// }

export default async (req: Request, res: Response, next: NextFunction ) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ error: 'Token not provided'});
    };

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userID = decoded.id;
        // console.log(req.UserId)

        return next();

    } catch(err) {
        return res.status(401).json({ error: 'Token invalid'});
    }

};



