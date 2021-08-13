import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import toast  from 'react-hot-toast';
import Header from "../../components/Header";
import { Back, Container } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

import { useAuth } from "../../Providers/auth"

const Login = () => {

    const {getToken, user} = useContext(UserContext);
    const history = useHistory();

    // const { loggedIn } = useAuth()

    const schema = yup.object().shape({
        username: yup.string().required('Campo Obrigatório!'),
        password: yup.string().required('Campo Obrigatório!').min(6, 'Mínimo de 6 caracteres'),

    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)})

    const handleLogin = (data) => {
        axios.post('https://kabit-api.herokuapp.com/sessions/', data)
        .then((res)=> {
            reset();
            localStorage.clear()
            localStorage.setItem('token', JSON.stringify(res.data.access))
            getToken(res.data.access)
            toast.success('Você foi logado!');
            history.push('/dashboard')
            
        })
        .catch(err => console.log(err));

    // loggedIn(data, history);
    }
    
    return (
        <div>
            
            <Back><span class="material-icons">arrow_back</span></Back>
            <Container>
                <h1>Login</h1>
                <form onSubmit = {handleSubmit(handleLogin)}>
                    <input placeholder = 'Nome de Usuário' {...register('username')}></input>
                    <input placeholder = 'Senha' {...register('password')}></input>
                    <button type='submit'>Login</button>
                </form>     
            </Container>
        </div>
    )
}

export default Login;