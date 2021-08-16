import { MenuHeader, MenuButton, ButtonFlexContainer, TresemmeLogo } from "./styles"
import { useHistory } from "react-router-dom";
import Tresemmewhite from "../../images/Tresemmewhite.png"

const Header = () => {

    const history = useHistory();
    
    const toSend = (path) => {
        return history.push(path)
    }

    return (
        <MenuHeader>
            {/* <h2 style={{cursor:"pointer"}} onClick={() => toSend("/dashboard")}>Tres emme</h2> */}
            <TresemmeLogo src={Tresemmewhite} alt="Logo-written-white" onClick={() => toSend("/dashboard")}></TresemmeLogo>
            <ButtonFlexContainer>
                <MenuButton onClick={() => toSend("/Register")}>Cadastrar</MenuButton>
                <MenuButton onClick={() => toSend("/Login")}>Login</MenuButton>
                <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
            </ButtonFlexContainer>
        </MenuHeader> 
   )
}
export default Header;