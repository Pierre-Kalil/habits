import {
  Desktop,
  ContainerDescktop,
  StyledButton,
  AnimationContainer,
  DesktopButtons,
  DesktopTitle,
} from "./styles";
import meditando from "../../images/medit.svg";
import { Redirect, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../Providers/auth";

const Home = () => {
  const { auth } = useAuth();
  const history = useHistory();

  const handleClick = () => {
    history.push("/register");
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <AnimationContainer>
        <Header></Header>
        <ContainerDescktop>
          <Desktop>
            <img src={meditando} alt="pessoa meditando" />
            <DesktopTitle>
              <h1>Tenha uma mente saudável!</h1>
              <h2>Entre ou cadastre-se para conhecer nossa plataforma.</h2>
            </DesktopTitle>
            <DesktopButtons>
              <StyledButton onClick={(f) => history.push("/login")}>
                Entrar
              </StyledButton>
              <StyledButton onClick={(f) => history.push("/register")}>
                Cadastrar
              </StyledButton>
            </DesktopButtons>
          </Desktop>
        </ContainerDescktop>
      </AnimationContainer>
    </>
  );
};
export default Home;
