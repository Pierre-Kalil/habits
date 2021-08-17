import {
  ContainerMobile,
  // BoxContainerMobile,
  OptionsContainerMobile,
} from "./styles";
import {
  ContainerDescktop,
  // BoxContainerDescktop,
  OptionsContainerDescktop,
} from "./styles";
// import { Link } from "react-router-dom";

import HeaderLogged from "../../components/HeaderLogged";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { useHistory } from "react-router-dom";
import {
  ListCardsContainerDesktop,
  ListCardsContainerMobile,
} from "../Community/styles";
import { useState } from "react";
import SinalMais from "../../components/SinalMais";
import AddGroup from "../../components/AddGroup";
// import { ActivitiesContext } from "../../Providers/actives";
import AddActivities from "../../components/AddActivities";
import { useActivities } from "../../Providers/actives";

const Groups = () => {
  const viewport = window.innerWidth;
  const history = useHistory();
  const { groups } = useContext(GroupsContext);
  console.log(groups);
  const [register, setRegister] = useState(false);
  const { ShowActivities } = useActivities();

  const toSend = (path, id) => {
    ShowActivities(id);
    return history.push(path);
  };

  return (
    <>
      <HeaderLogged />
      <ContainerDescktop>
        <h1>Grupos</h1>
        <OptionsContainerDescktop>
          {groups.map((group) => (
            <ListCardsContainerDesktop key={group.id}>
              <h4>nome:</h4>
              <div>{group.name}</div>
              <h4>categoria:</h4>
              <div>{group.category}</div>
              <div>
                <button onClick={() => toSend("/activities", group.id)}>
                  Ver Atividades e Metas
                </button>
              </div>
            </ListCardsContainerDesktop>
          ))}
        </OptionsContainerDescktop>
      </ContainerDescktop>
      <SinalMais onClick={() => setRegister(true)} />
      {register ? <AddGroup setRegister={setRegister} /> : <></>}
    </>
  );
};

export default Groups;
