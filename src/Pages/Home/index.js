import {
  Container,
  Logo,
  Desktop,
  ContainerDescktop,
  StyledButton,
  ContainerDescription,
} from "./styles";
import Imagem from "../../images/icone.svg";
import logo from "../../images/logo.svg";
import DescriptionHome from "../../images/DescriptionHome.png"
import meditando from "../../images/medit.svg";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

const Home = () => {
  const viewport = window.innerWidth;

  const history = useHistory();

  const handleClick = () => {
    history.push("/register");
  };

  return (
    <>
      {viewport < 769 ? (
        <Container>
          <h1>
            TRÊS <img src={logo} alt="logo"></img> EMMME
          </h1>
          <img src={Imagem} alt="icone"></img>
          <div>
            <Button callback={handleClick} children={"CADASTRE-SE"}></Button>
            <p>
              Já possui uma conta? Faça <Link to="/login">LOGIN</Link> aqui.
            </p>
          </div>
        </Container>
      ) : (
        <>
          <Header></Header>
          <Logo>
            <img src={logo} alt="logo"></img>
          </Logo>

          <ContainerDescktop>
            <ContainerDescription>
              <img src={DescriptionHome} alt="descrição"></img>
            </ContainerDescription>
            <Desktop>
              <img src={meditando} alt="pessoa meditando"></img>
              <br></br>
              <h1>Tenha uma mente saudável!</h1>
              <br></br>
              <h2>Entre ou cadastre-se para conhecer nossa plataforma.</h2>
              <br></br>
              <div>
                <StyledButton onClick={(f) => history.push("/login")}>
                  Entrar
                </StyledButton>
                <StyledButton onClick={(f) => history.push("/register")}>
                  Cadastrar
                </StyledButton>
              </div>
            </Desktop>
          </ContainerDescktop>
        </>
      )}
      <footer style={{padding:"10px"}}>
				Kenzie Academy Brasil
		  </footer>
    </>
  );
};
export default Home;
