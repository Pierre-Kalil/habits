import { ContainerMobile, ContainerHabtisGroups, Divisor } from "./styles";
import {
  ContainerDesktop,
  OptionsContainerDesktop,
  ContainerTitle,
} from "./styles";
import { Link } from "react-router-dom";

import HeaderLogged from "../../components/HeaderLogged";
import { useAuth } from "../../Providers/auth";
import { useState } from "react";
import Username from "../../components/Username";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import ImageGroup1 from "../../images/ImageGroup1.png";
import ImageGroup2 from "../../images/ImageGroup2.png";
import HomeBackground from "../../components/BackgroundHome";

const Dashboard = () => {
  const viewport = window.innerWidth;
  const { username } = useAuth();
  const [newUsername, setNewUsername] = useState(false);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <HeaderLogged />
      <HomeBackground />
      {viewport < 500 ? (
        <ContainerMobile>
          <h2>Organize sua vida, {username}</h2>
          <Button>Trocar usuário</Button>
          <h4>Escolha uma opção: </h4>
          <OptionsContainerDesktop>
            <ContainerHabtisGroups>
              <Link to={"/habits"}>
                <div className="figure1">
                  <img src={ImageGroup1} alt="" />
                </div>

                <p style={{ fontSize: 36 }}>Hábitos</p>
              </Link>
            </ContainerHabtisGroups>

            <Divisor>
              <hr />
            </Divisor>

            <ContainerHabtisGroups>
              <Link to={"/groups"}>
                <Link to={"/groups"}>
                  <div className="figure2">
                    <img src={ImageGroup2} alt="" />
                  </div>
                </Link>
                <p style={{ fontSize: 36 }}>Grupos</p>
              </Link>
            </ContainerHabtisGroups>
          </OptionsContainerDesktop>
        </ContainerMobile>
      ) : (
        <ContainerDesktop>
          <ContainerTitle>
            <h1>
              Organize sua vida,&nbsp;
              <span style={{ color: "#8E97FD" }}>
                <em>
                  {username && username[0].toUpperCase() + username.slice(1)}
                </em>
              </span>
              &nbsp;!
            </h1>
            {newUsername ? <Username setNewUsername={setNewUsername} /> : <></>}

            <Button
              onClick={() => {
                setNewUsername(true);
              }}
              style={{ margin: "auto" }}
            >
              Trocar usuário
            </Button>
          </ContainerTitle>

          <OptionsContainerDesktop>
            <ContainerHabtisGroups>
              <Link to={"/habits"}>
                <div className="figure1">
                  <img src={ImageGroup1} alt="" />
                </div>

                <p style={{ fontSize: 36 }}>Hábitos</p>
              </Link>
            </ContainerHabtisGroups>

            <Divisor>
              <hr />
            </Divisor>

            <ContainerHabtisGroups>
              <Link to={"/groups"}>
                <Link to={"/groups"}>
                  <div className="figure2">
                    <img src={ImageGroup2} alt="" />
                  </div>
                </Link>
                <p style={{ fontSize: 36 }}>Grupos</p>
              </Link>
            </ContainerHabtisGroups>
          </OptionsContainerDesktop>
          <h2>Escolha uma opção!</h2>
          <Footer />
        </ContainerDesktop>
      )}
    </>
  );
};

export default Dashboard;
