import express, { response } from 'express';
import bcrypt from 'bcrypt';
import path from 'path';
import authMiddleware from './middlewares/auth';

import UsersController from '../src/controllers/UsersController';
import AgentsController from '../src/controllers/AgentsController';
import SessionsController from '../src/controllers/SessionController';

const routes = express.Router();

const usersController = new UsersController();
const agentsController = new AgentsController();
const sessionsController = new SessionsController();

routes.get('/agents', agentsController.index);

routes.post('/users', usersController.create);


routes.post('/login', usersController.show);
routes.get('/login', usersController.index);


routes.post('/sessions', sessionsController.store);

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

routes.use(authMiddleware);

routes.get('/users/:id', usersController.show);
routes.put('/users', usersController.update);
routes.delete('/users', usersController.delete);


export default routes;