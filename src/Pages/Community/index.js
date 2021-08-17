import {
  ContainerMobile,
  OptionsContainerMobile,
  CardsContainerMobile,
  ListCardsContainerMobile,
} from "./styles";
import {
  ContainerDescktop,
  OptionsContainerDescktop,
  CardsContainerDesktop,
  ListCardsContainerDesktop,
} from "./styles";

import HeaderLogged from "../../components/HeaderLogged";
import Button from "../../components/Button";
import axios from "axios";
import { useContext } from "react";
import { CommunityContext } from "../../Providers/community";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";

const Community = () => {
  const viewport = window.innerWidth;
  const { CardsGroups } = useContext(CommunityContext);

  const SubmitToSubscribe = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post(
        `https://kabit-api.herokuapp.com/groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

        const { auth } = useAuth();
        if (!auth) {
          return <Redirect to="/login" />
        }
  return (
    <>
      <HeaderLogged />
      {viewport < 500 ? (
        <ContainerMobile>
          <h2>Organize sua vida</h2>
          <h4>Escolha uma opção: </h4>
          <OptionsContainerMobile>
            <CardsContainerMobile>
              {CardsGroups.map((group, index) => (
                <ListCardsContainerMobile key={index}>
                  <h3>Nome: {group.name}</h3>
                  <p>Categoria: {group.category}</p>
                  <p>Descrição: {group.description}</p>
                  <Button onClick={() => SubmitToSubscribe(group.id)}>
                    Cadastrar-se
                  </Button>
                </ListCardsContainerMobile>
              ))}
            </CardsContainerMobile>
          </OptionsContainerMobile>
        </ContainerMobile>
      ) : (
        <ContainerDescktop>
          <h1>Escolha seu grupo</h1>
          <OptionsContainerDescktop>
            <CardsContainerDesktop>
              {CardsGroups.map((group, index) => (
                <ListCardsContainerDesktop key={index}>
                  <h3>Nome: {group.name}</h3>
                  <p>Categoria: {group.category}</p>
                  <p>Descrição: {group.description}</p>
                  <Button onClick={() => SubmitToSubscribe(group.id)}>
                    Cadastrar-se
                  </Button>
                </ListCardsContainerDesktop>
              ))}
            </CardsContainerDesktop>
          </OptionsContainerDescktop>
        </ContainerDescktop>
      )}
    </>
  );
};

export default Community;
