import {
  ContainerMobile,
  // BoxContainerMobile,
  OptionsContainerMobile,
} from "./styles";
import {
  ContainerDesktop,
  // BoxContainerDesktop,
  OptionsContainerDesktop,
} from "./styles";
// import { Link } from "react-router-dom";

import HeaderLogged from "../../components/HeaderLogged";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../Providers/groups";
import { useHistory } from "react-router-dom";
import {
  ListCardsContainerMobile,
} from "../Community/styles";
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
    ShowActivities(id);
    localStorage.setItem("id", JSON.stringify(id));
    return history.push(path);
  };

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <HeaderLogged />
      <HomeBackground />
      <ContainerDesktop>
        <h1>Grupos</h1>
        <div>
          <Button onClick={() => setRegister(true)}>Criar Grupo</Button>
        </div>
        <OptionsContainerDesktop>
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
              <h4>nome:</h4>
              <div>{group.name}</div>
              <h4>Descrição:</h4>
              <div>{group.description}</div>
              <h4>Categoria:</h4>
              <div>{group.category}</div>
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
