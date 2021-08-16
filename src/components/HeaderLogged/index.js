import { MenuHeader, MenuButton, ButtonFlexContainer, TresemmeLogo } from "./styles"
import { useHistory } from "react-router-dom";
import Tresemmewhite from "../../images/Tresemmewhite.png"

const HeaderLogged = () => {

    const history = useHistory();
    
    const toSend = (path) => {
        return history.push(path)
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push("/login")
    }

    return (
        <MenuHeader>
             <TresemmeLogo src={Tresemmewhite} alt="Logo-written-white" onClick={() => toSend("/dashboard")}></TresemmeLogo>
            <ButtonFlexContainer>
                <MenuButton onClick={() => toSend("/Community")}>Comunidade</MenuButton>
                <MenuButton onClick={() => toSend("/Habits")}>Hábitos</MenuButton>
                <MenuButton onClick={() => toSend("/Groups")}>Grupos</MenuButton>
                <MenuButton onClick={handleLogout}>Sair</MenuButton>
                <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
            </ButtonFlexContainer>
        </MenuHeader> 
   )
}
export default HeaderLogged;