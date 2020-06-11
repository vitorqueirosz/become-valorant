import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Header, Form } from './styles';
import api from '../../services/api';


function Main() {
    const [agents, setAgents]  = useState([]);
    const [selectedAgents, setSelectedAgents] = useState([]);
    

    const history = useHistory();

    const [formData, setFormData] = useState({
        nick: '',
        email: '',
        senha: '',
        elo: '',
        agents: ''
    });
    useEffect(() => {
        api.get('/agents').then(response => {
            setAgents(response.data);
        });
    }, []);
    
    function handleSelectedAgent(id) {
        const alreadySelected = selectedAgents.findIndex(agent => agent === id);

        if(alreadySelected >= 0) {

            const filteredAgent = selectedAgents.filter(agent => agent !== id);

            setSelectedAgents(filteredAgent);

            
        }else {

            setSelectedAgents([ ...selectedAgents, id]);
            
            
        }
 
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        

        setFormData({ ...formData, [name]: value });
    }



    async function handleSubmit(e) {
        e.preventDefault();

        const { nick, email, password, elo } = formData;
        const agents = selectedAgents;

        const data = {
            nick, 
            email, 
            password, 
            elo, 
            agents
        };
        console.log(data);

      await api.post('/users', data);
        
    }
          function submitDone() {
    
            setTimeout(() => {
                history.push('/');
            }, 1000);
          }

    return (
        <>
        <Header>
            <img src="https://i.pinimg.com/564x/d1/89/22/d189227985f4fe2b9163e3a59c30b5d5.jpg" alt="logo"/>

        </Header>

        <Container>

            <Form onSubmit={handleSubmit} >   
                
                <div>
                    <section >
                     
                        <input 
                            name="nick"
                            id="nick"
                            placeholder="Digite seu nick"
                            onChange={handleInputChange}
                        />

                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            onChange={handleInputChange}
                        />

                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            onChange={handleInputChange}
                        />
                    

                        <input
                            name="elo"
                            type="text"
                            id="elo"
                            placeholder="Seu elo"
                            onChange={handleInputChange}
                        />

                        <ul >
                            {agents.map(agent => (
                                <li  
                                
                                    key={agent.id}
                                    onClick={() => handleSelectedAgent(agent.id)}
                                    
                                    className={selectedAgents.includes(agent.id) ? 'selected' : ''}
                                    >{agent.name}
                                </li>
                            ))}
                        </ul>
                       
                    </section>
                        <button 
                        // href="/profile"
                        type="submit"
                        onClick={submitDone}
                        >
                            Se torne um Valorant</button>
                </div>

                <footer> 
                    <img src="https://i.pinimg.com/564x/d1/89/22/d189227985f4fe2b9163e3a59c30b5d5.jpg" alt="footer"/>
                    
                    </footer>
            </Form>
        </Container>

        </>
    );
}

export default Main;