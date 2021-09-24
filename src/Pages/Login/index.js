import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import { FiUser, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Back,
  Container,
  Background,
  Content,
  AnimationContainer,
} from "./styles";

import { Redirect } from "react-router";

import { useAuth } from "../../Providers/auth";

const Login = () => {
  const history = useHistory();
  const viewport = window.innerWidth;
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
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    signIn(data, history);
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      {viewport > 768 ? (
        <Header />
      ) : (
        <Back onClick={() => history.push("/")}>
          <span class="material-icons">arrow_back</span>
        </Back>
      )}
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
          </AnimationContainer>
        </Content>
        <Background></Background>
      </Container>
    </div>
  );
};

export default Login;
