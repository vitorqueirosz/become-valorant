import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Header, Form } from './styles';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
    

    const { id } = useParams();
    
    console.log(id)
    const history = useHistory();

    const [user, setUser] = useState([]);

    const [formData, setFormData] = useState({
        nick: '',
        email: '',
        senha: '',
        oldPassword: '',
        password: '',
        confirmPassword: '',
        elo: '',
    });

    useEffect(() => {
        api.get(`/users/${id}`).then(response => {

            setUser([response.data.user]);
            console.log(response.data);
            localStorage.getItem('token', response.data.token);
            console.log(localStorage)
        })
    }, [id]);

    function handleStateChange(event) {
    const { name, value } = event.target;

        setUser([user]);
        
        setFormData({ ...formData, ...user, [name]: value });
    }

    function handleGoBack() {

        history.push(`/profile/${id}`);
    }

    async function handleDelete() {

        toast.warn('Usuario excluido!', {autoClose: 1000})

        await api.delete(`/users`)

        setTimeout(() => {
            history.push('/')
        }, 1200);
    };

    async function handleSubmit(e) {
        e.preventDefault();


        const { nick, email, password, elo, oldPassword, confirmPassword } = formData;

        const data = {
            nick, 
            email, 
            oldPassword,
            password,
            confirmPassword, 
            elo,

        };
        
        console.log(data);

    console.log(toast.success)
    toast.success("Informacoes alteradas!", {autoClose: 1400});
    await api.put('/users', data);
        
        
    }
        async  function submitDone() {

            
            setTimeout(() => {
                history.push(`/profile/${id}`);
            }, 1400);
          
    }

    return (
        <>
        <Header>
            <img src="https://i.pinimg.com/564x/d1/89/22/d189227985f4fe2b9163e3a59c30b5d5.jpg" alt="logo"/>
        </Header>

        <Container>

            <Form onSubmit={handleSubmit} onReset={handleDelete}>   
                
                <div>
                    <section>

                  <div>
                     <span>Editar perfil</span>
                     <button  onClick={handleGoBack}>Voltar</button>
                  </div>

                   {user.map(user => (

                    <> 
                        <input 
                            name="nick"
                            onChange={handleStateChange}
                            id="nick"
                            value={user.nick}
                            placeholder="Digite seu nick"
                            >
                        </input>
                   
                    <input
                            name="email"
                            value={user.email}
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            onChange={handleStateChange}
                     >
                </input>
             
                        <input
                            name="oldPassword"
                            type="password"
                            id="oldPassword"
                            placeholder="Digite sua senha atual"
                            onChange={handleStateChange}
                        />
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Digite sua nova senha"
                            onChange={handleStateChange}
                        />

                        <input
                            name="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirmar senha"
                            onChange={handleStateChange}
                        />

                        <input
                            name="elo"
                            value={user.elo}
                            type="text"
                            id="elo"
                            placeholder="Seu elo"
                            onChange={handleStateChange}
                        />
                        
                    </>
                   ))} 
                    </section>

                        <button
                        type="submit"
                        onClick={submitDone}
                        >
                            Salvar alteracoes
                        </button>

                        <button
                        className="buttonDelete"
                        type="reset"
                        onClick={handleDelete}
                        >
                            Excluir usuario
                        </button>
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