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


const Groups = () => {
  const viewport = window.innerWidth;
  const {groups} = useContext(GroupsContext);

  console.log(groups)
  return (
    <>
      <HeaderLogged />
      {viewport < 500 ? (
        <ContainerMobile>
          <h2>Organize sua vida</h2>
          <h4>Escolha uma opção: </h4>
          <OptionsContainerMobile>
            {groups.map(group =><ListCardsContainerMobile key = {group.id}>
              <h4>nome:</h4>
              <div>{group.name}</div>
              <h4>categoria:</h4>
              <div>{group.category}</div>
              </ListCardsContainerMobile> )}
          </OptionsContainerMobile>
        </ContainerMobile>
      ) : (
        <ContainerDescktop>
          <h1>Escolha seu grupo</h1>
          <OptionsContainerDescktop>
            {groups.map(group =><ListCardsContainerDesktop key = {group.id}>
              <h4>nome:</h4>
              <div>{group.name}</div>
              <h4>categoria:</h4>
              <div>{group.category}</div>
              </ListCardsContainerDesktop> )}
          </OptionsContainerDescktop>
        </ContainerDescktop>
      )}
    </>
  );
};

export default Groups;
