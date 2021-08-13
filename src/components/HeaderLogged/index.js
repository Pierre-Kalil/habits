import { MenuHeader, MenuButton, ButtonFlexContainer } from "./styles"
import { useHistory } from "react-router-dom";


const HeaderLogged = () => {

    const history = useHistory();
    
    const toSend = (path) => {
        return history.push(path)
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <MenuHeader>
            <h2 style={{cursor:"pointer"}} onClick={() => toSend("/")}>Tres emme</h2>
            <ButtonFlexContainer>
                <MenuButton onClick={() => toSend("/Habits")}>Para Hábitos</MenuButton>
                <MenuButton onClick={() => toSend("/Groups")}>Para Grupos</MenuButton>
                <MenuButton onClick={handleLogout}>LogOut</MenuButton>
                <MenuButton onClick={() => toSend("/About")}>Sobre</MenuButton>
            </ButtonFlexContainer>
        </MenuHeader> 
   )
}
export default HeaderLogged;