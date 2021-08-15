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
import { ListCardsContainerDesktop, ListCardsContainerMobile } from "../Community/styles";
import { useState } from "react";
import SinalMais from "../../components/SinalMais";
import AddGroup from "../../components/AddGroup";


const Groups = () => {
  const viewport = window.innerWidth;
  const {groups} = useContext(GroupsContext);
  const [register,setRegister] = useState(false);

  console.log(groups)
  return (
    <>
      <HeaderLogged />
        <ContainerDescktop>
          <h1>Grupos</h1>
          <OptionsContainerDescktop>
            {groups.map(group =><ListCardsContainerDesktop key = {group.id}>
              <h4>nome:</h4>
              <div>{group.name}</div>
              <h4>categoria:</h4>
              <div>{group.category}</div>
              </ListCardsContainerDesktop> )}
          </OptionsContainerDescktop>
        </ContainerDescktop>
        <SinalMais onClick = {() => setRegister(true)} />
          {register? < AddGroup setRegister = {setRegister}/>: <></>}
    </>
  );
};

export default Groups;
