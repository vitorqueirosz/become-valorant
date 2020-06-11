import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';

import { Container, Header, Form } from './styles';

function Main() {
    const { id } = useParams();
    
    console.log(id)
    const history = useHistory();

    const [formData, setFormData] = useState({
        nick: '',
        email: '',
        senha: '',
        elo: '',
    });

    useEffect(() => {
        api.get(`/users/${id}`).then(response => {

            localStorage.getItem('token', response.data.token);
        })
    }, [id]);


    function handleInputChange(event) {
        const { name, value } = event.target;
        

        setFormData({ ...formData, [name]: value });
    }


    function handleGoBack() {

        history.push(`/profile/${id}`);
    }

    async function handleSubmit(e) {
        e.preventDefault();


        const { nick, email, password, elo, oldPassword, confirmPassword } = formData;

        const data = {
            nick, 
            email, 
            password,
            oldPassword,
            confirmPassword, 
            elo,

        };
        
        console.log(data);

      await api.put('/users', data);
        
    }
        async  function submitDone() {

            
            setTimeout(() => {
                history.push(`/profile/${id}`);
            }, 1200);
          
    }

    return (
        <>
        <Header>
            <img src="https://i.pinimg.com/564x/d1/89/22/d189227985f4fe2b9163e3a59c30b5d5.jpg" alt="logo"/>
        </Header>

        <Container>

            <Form onSubmit={handleSubmit} >   
                
                <div>
                    <section>

                  <div>
                     <span>Editar perfil</span>
                     <button  onClick={handleGoBack}>Voltar</button>
                  </div>

                   {/* {user.map(user => (

                    <> */}
                        <input 
                            name="nick"
                            id="nick"
                            placeholder="Digite seu nick"
                            onChange={handleInputChange}
                            >
                        </input>
                   
                    <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            onChange={handleInputChange}
                     >
                </input>
             
                        <input
                            name="oldPassword"
                            type="password"
                            id="oldPassword"
                            placeholder="Digite sua senha atual"
                            onChange={handleInputChange}
                        />
                        <input
                            name="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            placeholder="Digite sua nova senha"
                            onChange={handleInputChange}
                        />

                        <input
                            name="checkPassword"
                            type="password"
                            id="checkPassword"
                            placeholder="Confirmar senha"
                            onChange={handleInputChange}
                        />

                        <input
                            name="elo"
                            type="text"
                            id="elo"
                            placeholder="Seu elo"
                            onChange={handleInputChange}
                        />
                        
                     {/* </>
                   ))} */}
                    </section>

                        <button
                        type="submit"
                        onClick={submitDone}
                        >
                            Salvar alteracoes</button>
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