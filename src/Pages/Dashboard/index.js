import { ContainerMobile, BoxContainerMobile, OptionsContainerMobile } from "./styles";
import { ContainerDescktop, BoxContainerDescktop, OptionsContainerDescktop, ContainerTitle } from "./styles";
import { Link } from "react-router-dom";

import medidate from "../../images/medidate.png";
import HeaderLogged from "../../components/HeaderLogged";
import { useContext } from "react";
import { UserContext} from "../../Providers/user"

const Dashboard = () => {
    const viewport = window.innerWidth;
    const {user} = useContext(UserContext);
        return(
        <>
        <HeaderLogged />
        { viewport < 500 ? 
            <ContainerMobile>
                <h2>Organize sua vida</h2>
                <h4>Escolha uma opção: </h4>
                <OptionsContainerMobile>
                    <Link to={"/habits"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerMobile>HÁBITOS</BoxContainerMobile>
                    </Link>
                    <Link to={"/groups"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerMobile>GRUPOS</BoxContainerMobile>
                    </Link>
                </OptionsContainerMobile>
            </ContainerMobile>
        :
            <ContainerDescktop>

                <ContainerTitle>
                    <figure>
                        <img/>
                    </figure>
                    <h1>Organize sua vida, @user</h1>
                </ContainerTitle>
                
                <OptionsContainerDescktop>
                    <Link to={"/habits"} style={{color:"white", textDecoration: "none"}}><BoxContainerDescktop>HÁBITOS</BoxContainerDescktop></Link>
                    <figure>
                        <img src = {medidate} />
                    </figure>
                    <Link to={"/groups"} style={{color:"white", textDecoration: "none"}}><BoxContainerDescktop>GRUPOS</BoxContainerDescktop></Link>
                </OptionsContainerDescktop>

            </ContainerDescktop>
        }
    </>)
}

export default Dashboard;