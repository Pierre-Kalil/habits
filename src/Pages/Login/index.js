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

const Login = () => {

    const {getToken,user} = useContext(UserContext);
    const history = useHistory();

    const schema = yup.object().shape({
        username: yup.string().required('Required Field'),
        password: yup.string().required('Required Field').min(6, 'Minimum 6 characters'),

    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)})

    const handleLogin = (data) => {
        axios.post('https://kabit-api.herokuapp.com/sessions/', data)
        .then((res)=> {
            reset();
            localStorage.clear()
            localStorage.setItem('token', JSON.stringify(res.data.access))
            getToken(res.data.access)
            toast.success('Successfully login!');
            history.push('/dashboard')
            
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            
            <Back><span class="material-icons">arrow_back</span></Back>
            <Container>
                <h1>Login</h1>
                <form onSubmit = {handleSubmit(handleLogin)}>
                    <input placeholder = 'username' {...register('username')}></input>
                    <input placeholder = 'password' {...register('password')}></input>
                    <button type = 'submit'>Login</button>
                </form>     
            </Container>
        </div>
    )
}

export default Login;