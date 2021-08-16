import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Background } from "./styles";
import { Container } from "./styles";
import { Content } from "./styles";
import { AnimationContainer } from "./styles";
import { InputContainer1 } from "./styles";

const Register = () => {
    
    const history = useHistory();

    const schema = yup.object().shape({
        username: yup.string().required('Campo Obrigatório!'),
        email: yup.string().required('Campo Obrigatório!').email('Email inválido!'),
        password: yup.string().required('Campo Obrigatório').min(6,'Mínimo de 6 caracteres')
    })

    const {register, handleSubmit, formState: { errors }, reset} = useForm({resolver: yupResolver(schema)})

    const handleRegister = (data) => {
        axios.post('https://kabit-api.herokuapp.com/users/', data)
        .then((res) => {
            reset();
            toast.success('Sucesso ao criar a conta.')
            history.push('/login');

            
        })
		.catch((err) => {
            toast.error("Erro ao criar a conta.")
            reset();
            })
    }
    return (
        <div>
            <Header />
            <Container>
                    <Background></Background>
                    <Content>
                        <AnimationContainer>
                            <form onSubmit = {handleSubmit(handleRegister)}>
                                <h1>Cadastro</h1>
                                <InputContainer1>
                                <input  placeholder="Seu nome" {...register('username')} name="username" error={errors.username?.message}></input>
                                </InputContainer1>
                                <InputContainer1>
                                <input  placeholder="Seu e-mail" {...register('email')} name="email" error={errors.email?.message}></input>
                                </InputContainer1>
                                <InputContainer1>
                                <input  placeholder="Sua Senha" {...register('password')} name="password" type="password" error={errors.password?.message}></input>
                                </InputContainer1>
                                <br />
                                <Button type='submit'>Registrar</Button>
                                <p>Já tem uma conta? Faça seu <Link to="/login">login</Link> aqui!</p>
                            </form>
                        </AnimationContainer>
                    </Content>
                </Container>
                    {/* <footer style={{padding:"10px"}}>
                        Kenzie Academy Brasil
                    </footer> */}
        </div>
    )

}

export default Register;