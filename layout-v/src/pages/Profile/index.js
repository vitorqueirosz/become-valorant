import React, { useState ,useEffect, useContext } from 'react';
import api from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';
import eloImage from '../../uploads/valorantMaster 2.svg';
import { FiLogOut, FiTarget }  from 'react-icons/fi'
import { Container, Header, SideInfos, SideAgents, MiddleColumn, GridContent } from './styles';
import { Context } from '../../Context/authContext';


function Profile() {
    // const { authenticated } = useContext(Context);


    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [agents, setAgents] = useState([]);
    const [authenticated, setAuthenticated ] = useState(true);


    const history = useHistory();

    function handleLogout() {

        localStorage.removeItem('token');
        history.push('/', { id: null });
        setAuthenticated(false);
    }

    
    function handleEditProfile() {
        api.get(`/users/${id}`).then(response => {

            history.push(`/edit/${id}`);
            localStorage.getItem('token', response.data.token);
        })
    }

    useEffect(() => {

        api.get(`/users/${id}`).then(response => {


            setAuthenticated(true);
            console.log(authenticated)
            setUser([response.data.user]);

            localStorage.getItem('token', response.data.token);
            console.log(localStorage)
          
            const agentsData = response.data.agents.map(item => ({
                name: item.name,
                image: item.image,
                class: item.class,
                skill: item.skills,  
            }))

            setAgents(agentsData);
        })
    }, [id, authenticated]);

    return (
        
        <>
            <Header>
                <img src="https://i.pinimg.com/564x/d1/89/22/d189227985f4fe2b9163e3a59c30b5d5.jpg" alt="logo"/>

                <span  onClick={handleLogout} ><FiLogOut /> Logout</span>
            </Header>

            <Container>
                <SideInfos>
            {user.map(u => (
                <div>
                    <h1>{u.nick}</h1>
                       
                       <aside>
                            <img src={eloImage} alt="logoImage"/>
                            <span>{u.elo}</span>
                       </aside>
                       
                       <button onClick={handleEditProfile}><FiTarget /> Editar perfil</button>
                </div>
            ))}
                    <MiddleColumn>
                        <div />
                    </MiddleColumn>

                </SideInfos>


                <SideAgents>
                    <h1>Principais agentes</h1>

                    {agents.map(agent => (
                            <GridContent>
                             <img src={`http://localhost:3000/uploads/${agent.image}`} alt={agent.name}/>
                               <div>
                                <header>
                                        <span>Agente: <span>{agent.name}</span></span>
                                        <span>Classe: <span>{agent.class}</span></span>
                                    </header>

                                    <aside>
                                        <h1>Skills:</h1>
                        
                                        <ul>
                                            <li key={agent.id}>{agent.skill, JSON.parse(agent.skill)}</li>
                                        </ul>
                                    </aside>
                               </div>
                            </GridContent>
                    ))}
                </SideAgents>
            </Container>
            
        </>
  );
}

export default Profile;