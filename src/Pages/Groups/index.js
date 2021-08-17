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
import {
  ListCardsContainerDesktop,
  ListCardsContainerMobile,
} from "../Community/styles";
import { useState, useEffect } from "react";
import SinalMais from "../../components/SinalMais";
import AddGroup from "../../components/AddGroup";
// import { ActivitiesContext } from "../../Providers/actives";
import AddActivities from "../../components/AddActivities";

const Groups = () => {
  const viewport = window.innerWidth;
  const { groups, loadGroups } = useContext(GroupsContext);
  console.log(groups);
  const [register, setRegister] = useState(false);
  const [addActive, setActive] = useState(false);


  

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
              <button onClick={() => setActive(true)}>Criar atividade</button>
              {addActive ? (
                <AddActivities setActive={setActive} id={group.id} />
              ) : (
                <></>
              )}
              <hr />
              <div>
                <button>Ver Atividades e Metas</button>
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
