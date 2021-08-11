import { ContainerMobile, BoxContainerMobile, OptionsContainerMobile } from "./styles";
import { ContainerDescktop, BoxContainerDescktop, OptionsContainerDescktop } from "./styles";
import { Link } from "react-router-dom";
const Groups = () => {
    const viewport = window.innerWidth;
    return(
        <>
        {viewport < 500 ?
            <ContainerMobile>
                <h2>Organize sua vida</h2>
                <h4>Escolha uma opção: </h4>
                <OptionsContainerMobile>
                    <Link to={"/groups/meditacao"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerMobile>Meditação</BoxContainerMobile>
                    </Link>
                    <Link to={"/groups/physicalActivity"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerMobile>Exercício Físico</BoxContainerMobile>
                    </Link>
                    <Link to={"/groups/respiracao"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerMobile>Respiração para dormir</BoxContainerMobile>
                    </Link>
                </OptionsContainerMobile>
            </ContainerMobile>
        :
            <ContainerDescktop>
                <h1>Escolha seu grupo</h1>
                <OptionsContainerDescktop>
                    <Link to={"/groups/meditacao"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerDescktop>Meditação</BoxContainerDescktop>
                    </Link>
                    <Link to={"/groups/physicalActivity"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerDescktop>Exercício Físico</BoxContainerDescktop>
                    </Link>
                    <Link to={"/groups/respiracao"} style={{color:"white", textDecoration: "none"}}>
                        <BoxContainerDescktop>Respiração para dormir</BoxContainerDescktop>
                    </Link>
                </OptionsContainerDescktop>
            </ContainerDescktop>
        }
        </>
        )
}

export default Groups;