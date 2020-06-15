import React, { useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';

import { Container, Header, DivLogin } from './styles';
import api from '../../services/api';
import Input from '../../components/Input';


function Main( props ) {


    const [loginData, setLoginData] = useState();

    const history = useHistory();
 
    function handleInputChange(event) {
        const { name, value } = event.target;

        setLoginData({ ...loginData, [name]: value})
        
    };

      async function handleLogin(event) {
          event.preventDefault();
          
          const { email, password } = loginData;
          
          const data = {
              email,
              password,
            };
            
    
    await api.post('/sessions', data).then(response => {
            const { id } = response.data.user;
            
            history.push(`/profile/${id}`, response.data.token);
 
            localStorage.setItem('token', response.data.token);
        });      
    };


    return (
        <>
        <Header>
            <img src="https://i.pinimg.com/564x/d1/89/22/d189227985f4fe2b9163e3a59c30b5d5.jpg" alt="logo"/>

        </Header>

        <Container>
            <h1>Become a <span>Valorant</span></h1>  

            <DivLogin >
                    <img src="https://i.pinimg.com/564x/d3/39/5e/d3395ed9226a8a74c22891f4b2fe688f.jpg" alt="icon"/>
                <div>


                    <form onSubmit={handleLogin}>
                       
                        <Input onChange={handleInputChange}  name="email" type ="email" placeholder="Digite seu e-mail" />

                        <Input

                        onChange={handleInputChange}
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                        />

                        <button  
                           onClick={handleLogin} type="submit">Iniciar Sessao</button >

                    </form>

                    <aside>
                        <a href="/form">Cadastre-se</a>
                        <a href="/password">Esqueceu Senha?</a>
                    </aside>
                </div>


            </DivLogin>


            {}
        </Container>

        </>
    );
}

export default Main;