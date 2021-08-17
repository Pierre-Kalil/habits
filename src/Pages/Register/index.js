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
import { HomeFooter } from "./styles";

const Register = () => {
    
    const history = useHistory();

    const schema = yup.object().shape({
        username: yup.string().required('Campo Obrigatório!'),
        email: yup.string().required('Campo Obrigatório!').email('Email inválido!'),
        password: yup.string().required('Campo Obrigatório!').min(6,'Mínimo de 6 caracteres'),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser idênticas!").required("Campo obrigatório"),
    })

    const {register, handleSubmit, formState: { errors }, reset} = useForm({resolver: yupResolver(schema)})

    const handleRegister = (data) => {
        console.log(data)
        const {username, email, password} = data;
        console.log(data)
        axios.post('https://kabit-api.herokuapp.com/users/', {
            username: username, email: email, password: password,
        })
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
                                <div>
                                <Input label="Nome de usuário"
                                        icon={FiUser}
                                        name="username"
                                        placeholder="Um ótimo nome"
                                        register={register}
                                        error={errors.username?.message}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="E-mail"
                                        icon={FiMail}
                                        name="email"
                                        placeholder="Seu melhor e-mail"
                                        register={register}
                                        error={errors.email?.message}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Senha"
                                        icon={FiLock}
                                        name="password"
                                        placeholder="Uma senha bem forte"
                                        register={register}
                                        error={errors.password?.message}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Confirmação de senha"
                                        icon={FiLock}
                                        name="confirmPassword"
                                        placeholder="Confirme sua senha"
                                        register={register}
                                        error={errors.confirmPassword?.message}
                                    />
                                </div>
                                <br />
                                <Button type='submit'>Registrar</Button>
                                <p>Já tem uma conta? Faça seu <Link to="/login">login</Link> aqui!</p>
                            </form>
                            <HomeFooter>
                                Kenzie Academy Brasil
                            </HomeFooter>
                        </AnimationContainer>
                    </Content>
                </Container>

        </div>
    )

}

export default Register;