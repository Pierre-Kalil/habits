import {
  ContainerMobile,
  BoxContainerMobile,
  OptionsContainerMobile,
} from "./styles";
import {
  ContainerDesktop,
  BoxContainerDesktopHabits,
  BoxContainerDesktopGroups,
  OptionsContainerDesktop,
  ContainerTitle,
} from "./styles";
import { Link } from "react-router-dom";

import medidate from "../../images/medidate.png";
import HeaderLogged from "../../components/HeaderLogged";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useAuth } from "../../Providers/auth";
import { useState } from "react";
import Username from "../../components/Username";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import ImageGroup1 from "../../images/ImageGroup1.png";
import ImageGroup2 from "../../images/ImageGroup2.png";
import UserImage from "../../images/UserImage.png"
import HomeBackground from "../../components/BackgroundHome";

const Dashboard = () => {
  const viewport = window.innerWidth;
  const { user } = useContext(UserContext);
  const { username } = useAuth();
  const [newUsername, setNewUsername] = useState(false);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <HeaderLogged />
      <HomeBackground />
      {viewport < 500 ? (
        <ContainerMobile>

          <h2>Organize sua vida, {username}</h2>
          <button>Trocar usuário</button>
          <h4>Escolha uma opção: </h4>
          <OptionsContainerMobile>
            <Link
              to={"/habits"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerMobile>HÁBITOS</BoxContainerMobile>
            </Link>
            <Link
              to={"/groups"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerMobile>GRUPOS</BoxContainerMobile>
            </Link>
          </OptionsContainerMobile>
        </ContainerMobile>
      ) : (
        <ContainerDesktop>

          <ContainerTitle>
            <figure>
              <img />
            </figure>
            <h1>Organize sua vida,&nbsp;<span style={{color:"#8E97FD"}}><em>{username && username[0].toUpperCase() + username.slice(1)}</em></span>&nbsp;!</h1>
            {newUsername ? <Username setNewUsername={setNewUsername} /> : <></>}
            <img src={UserImage} alt="user-photo" style={{margin:"auto", width:56, height:56}} />
            <Button 
              onClick={() => {
                setNewUsername(true);
              }} style={{margin:"auto"}}
            >
              Trocar usuário
            </Button>
          </ContainerTitle>

          <OptionsContainerDesktop>
            <div style={{display:"flex", flexDirection:"row-reverse"}}>
                <div style={{textAlign:"right"}}>O que são Hábitos?</div>

            <Link
              to={"/habits"}
            >

              <BoxContainerDesktopHabits>

              </BoxContainerDesktopHabits>
              <p>Hábitos</p>
            </Link>
                        </div>
            <figure>
              <img src={medidate} alt="imagem" />
            </figure>

            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{textAlign:"right"}}>O que são Grupos?</div>
            <Link
              to={"/groups"}
              // style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerDesktopGroups>

                </BoxContainerDesktopGroups>
                <p>Grupos</p>
            </Link>
            </div>

          </OptionsContainerDesktop>
                      <p style={{fontFamily:"Calibri", fontSize:48, marginTop:20}}>Escolha uma opção!</p>
          <Footer />
        </ContainerDesktop>
      )}
    </>
  );
};

export default Dashboard;
