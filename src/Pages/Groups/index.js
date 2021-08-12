import {
  ContainerMobile,
  // BoxContainerMobile,
  OptionsContainerMobile,
  CardsContainer,
  ListCardsContainer,
} from "./styles";
import {
  ContainerDescktop,
  BoxContainerDescktop,
  OptionsContainerDescktop,
} from "./styles";
import { Link } from "react-router-dom";

import HeaderLogged from "../../components/HeaderLogged";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Groups = () => {
  const viewport = window.innerWidth;
  const [CardsGroups, setCardsGroups] = useState([]);

  useEffect(() => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/")
      .then((response) => setCardsGroups(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  const SubmitToSubscribe = (id) => {
    axios
      .post(`https://kabit-api.herokuapp.com/groups/${id}/subscriptions/`)
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
            <CardsContainer>
              {CardsGroups &&
                CardsGroups.map((group, index) => (
                  <ListCardsContainer key={index}>
                    <h3>{group.name} </h3>
                    <p>{group.category}</p>
                    <p>id: {group.id}</p>
                    <button onClick={() => SubmitToSubscribe(group.id)}>
                      Cadastrar-se
                    </button>
                  </ListCardsContainer>
                ))}
            </CardsContainer>
          </OptionsContainerMobile>
        </ContainerMobile>
      ) : (
        <ContainerDescktop>
          <h1>Escolha seu grupo</h1>
          <OptionsContainerDescktop>
            <Link
              to={"/groups/Meditation"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerDescktop>Meditação</BoxContainerDescktop>
            </Link>
            <Link
              to={"/groups/physicalActivity"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerDescktop>Exercício Físico</BoxContainerDescktop>
            </Link>
            <Link
              to={"/groups/respiracao"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <BoxContainerDescktop>
                Respiração para dormir
              </BoxContainerDescktop>
            </Link>
          </OptionsContainerDescktop>
        </ContainerDescktop>
      )}
    </>
  );
};

export default Groups;
