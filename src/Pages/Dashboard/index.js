import {
  ContainerMobile,
  BoxContainerMobile,
  OptionsContainerMobile,
  ContainerHabtisGroups,
  Divisor,
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
import UserImage from "../../images/UserImage.png";
import HomeBackground from "../../components/BackgroundHome";

const Dashboard = () => {
  const viewport = window.innerWidth;
  const { user } = useContext(UserContext);
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
                <div className="figure">
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
                  <div className="figure">
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
            <figure>
              <img />
            </figure>
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
            <img
              src={UserImage}
              style={{ margin: "auto", width: 56, height: 56 }}
              alt="user-photo"
            />
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
                <div className="figure">
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
                  <div className="figure">
                    <img src={ImageGroup2} alt="" />
                  </div>
                </Link>
                <p style={{ fontSize: 36 }}>Grupos</p>
              </Link>
            </ContainerHabtisGroups>
          </OptionsContainerDesktop>
          <p style={{ fontFamily: "Calibri", fontSize: 48, marginTop: 20 }}>
            Escolha uma opção!
          </p>
          <Footer />
        </ContainerDesktop>
      )}
    </>
  );
};

export default Dashboard;
