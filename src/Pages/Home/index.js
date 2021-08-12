import { Container, Desktop } from "./styles";
import Imagem from "../../images/icone.svg";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const viewport = window.innerWidth;

  return (
    <>
      {viewport < 769 ? (
        <Container>
          <h1>
            TRÊS <img src={logo} alt="logo"></img> EMMME
          </h1>
          <img src={Imagem} alt="icone"></img>
          <div>
            <button>CADASTRE-SE</button>
            <p>
              Já possui uma conta? Faça <Link to="/login">LOGIN</Link> aqui.
            </p>
          </div>
        </Container>
      ) : (
        <div>
          <Desktop></Desktop>
        </div>
      )}
    </>
  );
};
export default Home;
