import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import { FiUser, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Back, Container } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { Background } from "./styles";
import { Content } from "./styles";
import { AnimationContainer } from "./styles";
import { InputContainer1 } from "./styles";
import { Redirect } from "react-router";
import { HomeFooter } from "../Home/styles";

import { useAuth } from "../../Providers/auth";

const Login = () => {
  const { getToken, user } = useContext(UserContext);
  const history = useHistory();

  const { signIn, auth } = useAuth();
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    // axios.post('https://kabit-api.herokuapp.com/sessions/', data)
    // .then((res)=> {
    //     reset();
    //     localStorage.clear()
    //     localStorage.setItem('token', JSON.stringify(res.data.access))
    //     getToken(res.data.access)
    //     toast.success('Você foi logado!');
    //     history.push('/dashboard')

    // })
    // .catch(err => console.log(err));

    signIn(data, history);
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Header />
      {/* <Back><span class="material-icons">arrow_back</span></Back> */}
      <Container>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1>Login</h1>
              <Input
                icon={FiUser}
                placeholder="Nome de usuário"
                register={register}
                type="text"
                label="Nome de usuário"
                name="username"
                error={errors.username?.message}
              />
              <Input
                icon={FiLock}
                placeholder="Sua senha"
                type="password"
                register={register}
                label="Senha"
                name="password"
                error={errors.password?.message}
              />
              <br />
              <Button type="submit">Login</Button>
              <p>
                Não tem um <strong>cadastro</strong>? Faça seu{" "}
                <Link to="/register">Registro</Link>.
              </p>
            </form>
            <HomeFooter>Kenzie Academy Brasil</HomeFooter>
          </AnimationContainer>
        </Content>
        <Background></Background>
      </Container>
    </div>
  );
};

export default Login;
