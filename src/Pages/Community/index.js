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
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Community = () => {
  const viewport = window.innerWidth;
  const [CardsGroups, setCardsGroups] = useState([]);

  useEffect(() => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/")
      .then((response) => setCardsGroups(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  const SubmitToSubscribe = (id) => {
    console.log(id);
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
                  <h3>{group.name} </h3>
                  <p>{group.category}</p>
                  <p>id: {group.id}</p>
                  <button onClick={() => SubmitToSubscribe(group.id)}>
                    Cadastrar-se
                  </button>
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
