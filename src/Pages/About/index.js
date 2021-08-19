import { DevFlex, DevContainer } from "./styles";
import Header from "../../components/Header";
import icone from "../../images/anonimato.svg";
import {
  MenuHeader,
  MenuButton,
  ButtonFlexContainer,
  TresemmeLogo,
} from "./styles";
import { useHistory } from "react-router-dom";
import Tresemmewhite from "../../images/Tresemmewhite.png";

const About = () => {
  const toSend = (path) => {
    return history.push(path);
  };

  const viewport = window.innerWidth;
  const history = useHistory();

  return (
    <>
      {viewport < 768 ? (
        <MenuHeader>
          {/* <h2 style={{cursor:"pointer"}} onClick={() => toSend("/dashboard")}>Tres emme</h2> */}
          <TresemmeLogo
            src={Tresemmewhite}
            alt="Logo-written-white"
            onClick={() => toSend("/dashboard")}
          ></TresemmeLogo>
          {/* <ButtonFlexContainer>
            <MenuButton onClick={() => toSend("/Register")}>
              Cadastrar
            </MenuButton>
            <MenuButton onClick={() => toSend("/Login")}>Login</MenuButton>
            <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
          </ButtonFlexContainer> */}
        </MenuHeader>
      ) : (
        <MenuHeader>
          {/* <h2 style={{cursor:"pointer"}} onClick={() => toSend("/dashboard")}>Tres emme</h2> */}
          <TresemmeLogo
            src={Tresemmewhite}
            alt="Logo-written-white"
            onClick={() => toSend("/dashboard")}
          ></TresemmeLogo>
          <ButtonFlexContainer>
            <MenuButton onClick={() => toSend("/Register")}>
              Cadastrar
            </MenuButton>
            <MenuButton onClick={() => toSend("/Login")}>Login</MenuButton>
            <MenuButton onClick={() => toSend("/")}>Voltar</MenuButton>
          </ButtonFlexContainer>
        </MenuHeader>
      )}
      <DevFlex>
        <DevContainer>
          <img src={icone} alt="icone"></img>
          <h3>Lucas Ribeiro</h3>
          <h4>Product Owner, PO</h4>
        </DevContainer>
        <DevContainer>
          <img src={icone} alt="icone"></img>
          <h3>André L. T. Rosas</h3>
          <h4>Scrum Master, SM</h4>
        </DevContainer>
        <DevContainer>
          <img src={icone} alt="icone"></img>
          <h3>Ariel Bernardes</h3>
          <h4>Tech Leader, TL</h4>
        </DevContainer>
        <DevContainer>
          <img src={icone} alt="icone"></img>
          <h3>Igor Petersson</h3>
          <h4>Quality Assurance, QA</h4>
        </DevContainer>
        <DevContainer>
          <img src={icone} alt="icone"></img>
          <h3>Osmar Eduardo</h3>
          <h4>Quality Assurance, QA</h4>
        </DevContainer>
        <DevContainer>
          <img src={icone} alt="icone"></img>
          <h3>Pierre Kalil</h3>
          <h4>Quality Assurance, QA</h4>
        </DevContainer>
      </DevFlex>
    </>
  );
};
export default About;
