import { MenuHeader, MenuButton, ButtonFlexContainer } from "./styles"
import { useHistory } from "react-router-dom";


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
            <h2 style={{cursor:"pointer"}} onClick={() => toSend("/dashboard")}>Tres emme</h2>
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