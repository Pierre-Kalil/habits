import {
  ContainerMobile,
  BoxContainerMobile,
  OptionsContainerMobile,
} from "./styles";
import {
  ContainerDescktop,
  BoxContainerDescktop,
  OptionsContainerDescktop,
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

const Dashboard = () => {
  const viewport = window.innerWidth;
  const { user } = useContext(UserContext);
  const { username } = useAuth();
  const [newUsername, setNewUsername] = useState(false);

  return (
    <>
      <HeaderLogged />
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
        <ContainerDescktop>
          <ContainerTitle>
            <figure>
              <img />
            </figure>
            <h1>Organize sua vida, {username}</h1>
            {newUsername ? <Username setNewUsername={setNewUsername} /> : <></>}
            <button
              onClick={() => {
                setNewUsername(true);
              }}
            >
              Trocar usuário
            </button>
          </ContainerTitle>

          <OptionsContainerDescktop>
            <Link
              to={"/habits"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerDescktop>HÁBITOS</BoxContainerDescktop>
            </Link>
            <figure>
              <img src={medidate} alt="imagem" />
            </figure>
            <Link
              to={"/groups"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerDescktop>GRUPOS</BoxContainerDescktop>
            </Link>
          </OptionsContainerDescktop>
        </ContainerDescktop>
      )}
    </>
  );
};

export default Dashboard;
