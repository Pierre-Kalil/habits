import { MenuHeader, MenuButton, ButtonFlexContainer } from "./styles"
import { useHistory } from "react-router-dom";



const Header = () => {

    const history = useHistory();
    
    const toSend = (path) => {
        return history.push(path)
    }

    return (
        <MenuHeader>
            <h2 style={{cursor:"pointer"}} onClick={() => toSend("/")}>Tres emme</h2>
            <ButtonFlexContainer>
                <MenuButton onClick={() => toSend("/Register")}>Cadastrar</MenuButton>
                <MenuButton onClick={() => toSend("/Login")}>Login</MenuButton>
                <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
            </ButtonFlexContainer>
        </MenuHeader> 
   )
}
export default Header;