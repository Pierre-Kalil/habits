import {
  MenuHeader,
  MenuButton,
  Menuhamburguer,
  MenuhamburguerActive,
  ButtonFlexContainer,
  TresemmeLogo,
} from "./styles";
import { useHistory } from "react-router-dom";
import Tresemmewhite from "../../images/Tresemmewhite.png";
import { useAuth } from "../../Providers/auth";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const viewport = window.innerWidth;
  const history = useHistory();
  const { setAuth } = useAuth();
  const [MenuDrop, setMenuDrop] = useState(false);

  const toSend = (path) => {
    return history.push(path);
  };

  const OpenHamburguer = () => {
    setMenuDrop(true);
  };

  const CloseHamburguer = () => {
    setMenuDrop(false);
  };

  return (
    <>
      <MenuHeader>
        <TresemmeLogo
          src={Tresemmewhite}
          alt="Logo-written-white"
          onClick={() => toSend("/dashboard")}
        ></TresemmeLogo>
        {MenuDrop ? (
          <FiX onClick={CloseHamburguer} />
        ) : (
          <FiAlignJustify onClick={OpenHamburguer} />
        )}
        {MenuDrop ? (
          <Menuhamburguer>
           
            <li>
              <MenuButton onClick={() => toSend("/register")}>Cadastrar</MenuButton>
            </li>
            <li>
              <MenuButton onClick={() => toSend("/login")}>Logar</MenuButton>
            </li>
            
            <li>
              <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
            </li>
          </Menuhamburguer>
        ) : (
          <></>
        )}

        <ButtonFlexContainer>
          <MenuButton onClick={() => toSend("/register")}>
            Cadastrar
          </MenuButton>
          <MenuButton onClick={() => toSend("/login")}>Logar</MenuButton>
          <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
        </ButtonFlexContainer>
      </MenuHeader>
    </>
  );
};
export default Header;
