import {Request, Response}  from 'express';
import knex from '../database/connection';

class AgentsController {
    async index(req: Request, res: Response){

        const agents = await knex('agents').select('*');
    
    
        const serializedAgents = agents.map(agent => {
            return {
                id: agent.id,
                name: agent.name,
                image: `http://localhost:3000/uploads/${agent.image}`,
                class: agent.class,
                skills: agent.skills
            };
        })
    
        return res.json(serializedAgents)
    }
};

export default AgentsController;