import {
  ContainerMobile,
  // BoxContainerMobile,
  OptionsContainerMobile,
  ContainerNewUser,
  ContainerNewUserMobile,
} from "./styles";
import {
  ContainerDesktop,
  // BoxContainerDesktop,
  OptionsContainerDesktop,
} from "./styles";
// import { Link } from "react-router-dom";
import Pessoas from "../../images/comunidade.svg";
import CriarGrupo from "../../images/criarGrupo.svg";

import HeaderLogged from "../../components/HeaderLogged";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Link, useHistory } from "react-router-dom";
import { ListCardsContainerMobile } from "../Community/styles";
import { ListCardsContainerDesktop } from "./styles";
import { useState } from "react";
import SinalMais from "../../components/SinalMais";
import AddGroup from "../../components/AddGroup";
// import { ActivitiesContext } from "../../Providers/actives";
import AddActivities from "../../components/AddActivities";
import EditGroup from "../../components/EditGroup";
import axios from "axios";
import { UserContext } from "../../Providers/user";

import { useActivities } from "../../Providers/actives";

import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import HomeBackground from "../../components/BackgroundHome";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const Groups = () => {
  const viewport = window.innerWidth;
  const history = useHistory();
  const { groups, nameGroup } = useContext(GroupsContext);
  const { user } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [register, setRegister] = useState(false);
  const { ShowActivities } = useActivities();

  const [id, setId] = useState("");

  const toSend = (path, id) => {
    nameGroup(id);
    ShowActivities(id);
    localStorage.setItem("id", JSON.stringify(id));
    return history.push(path);
  };

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  console.log(viewport);

  return (
    <>
      <ContainerDesktop>
        <OptionsContainerDesktop>
          {groups.length === 0 && viewport < 769 && (
            <ContainerNewUserMobile>
              <h2>Você não está inscrito em nenhum grupo !</h2>
              <br></br>
              <div className="princ">
                <div className="opção">
                  <h4>Conheça nossos grupos da comunidade:</h4>
                  <Link to="/Community">
                    <img src={Pessoas} alt="pessoas" />
                  </Link>
                </div>
                <h3>OU</h3>
                <div className="opção">
                  <h4>Crie um grupo para você:</h4>
                  <button onClick={() => setRegister(true)}>
                    <img src={CriarGrupo} alt="pessoas" />
                  </button>
                </div>
              </div>
            </ContainerNewUserMobile>
          )}
          {groups.length === 0 && viewport > 769 && (
            <ContainerNewUser>
              <h2>Você não está inscrito em nenhum grupo !</h2>
              <br></br>
              <div className="princ">
                <div className="opção">
                  <h4>Conheça nossos grupos da comunidade:</h4>
                  <Link to="/Community">
                    <img src={Pessoas} alt="pessoas" />
                  </Link>
                </div>
                <h3>OU</h3>
                <div className="opção">
                  <h4>Crie um grupo para você:</h4>
                  <button onClick={() => setRegister(true)}>
                    <img src={CriarGrupo} alt="pessoas" />
                  </button>
                </div>
              </div>
            </ContainerNewUser>
          )}
          {groups.map((group) => (
            <ListCardsContainerDesktop key={group.id}>
              {group.creator.id === Number(user) && (
                <Button
                  onClick={() => {
                    setEdit(true);
                    setId(group.id);
                  }}
                >
                  Editar
                </Button>
              )}
              <div>{edit && <EditGroup setEdit={setEdit} group={id} />}</div>
              <h4>Nome: {group.name}</h4>
              <h4>Descrição: {group.description}</h4>
              <h4>Categoria: {group.category}</h4>
              <div>
                <Button onClick={() => toSend("/activities", group.id)}>
                  Ver Atividades e Metas
                </Button>
              </div>
            </ListCardsContainerDesktop>
          ))}
        </OptionsContainerDesktop>
      </ContainerDesktop>

      {register ? <AddGroup setRegister={setRegister} /> : <></>}
      <Footer />
    </>
  );
};

export default Groups;
