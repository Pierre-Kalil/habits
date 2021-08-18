import { useContext, useEffect, useState } from "react";
import { useActivities } from "../../Providers/actives";

import {
  ContainerMobile,
  CardsContainerMobile,
  ListCardsContainerMobile,
  OptionsContainerMobile,
  ContainerActivitiesGoals,
  ContainerInputs,
  ContainerTitleMobile,
  ContainerButton,
  ContainerCreateSearch,
  ContainerAddActive,
} from "./style";
import AddActivities from "../../components/AddActivities";

import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import HeaderLogged from "../../components/HeaderLogged";
import { GroupsContext } from "../../Providers/groups";
import Button from "../../components/Button";
import SinalMais from "../../components/SinalMais";

const Activities = () => {
  const {
    showActivities,
    oneActives,
    OneActivities,
    UpdateActivities,
    DeleteActivities,
    ShowActivities,
  } = useActivities();
  const [isUpdate, setIsUpdate] = useState(false);
  const [inputUpdate, setInpuUpdate] = useState("");

  const { groupName } = useContext(GroupsContext);
  const [idActive, setIdActive] = useState("");

  const UpdateHere = () => {
    setIsUpdate(true);
  };

  const handleUpdate = (id, inputUpdate, group) => {
    const data = { id: id, title: inputUpdate, group: group };
    UpdateActivities(data);
  };

  const hanldeSearch = (active) => {
    OneActivities(active);
  };

  useEffect(() => {
    ShowActivities(localStorage.getItem("id"));
  }, [showActivities]);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  console.log();
  return (
    <ContainerMobile>
      {/* <HeaderLogged /> */}
      <ContainerTitleMobile>
        <h1>Atividades e Metas</h1>
        <h2>Grupo: {groupName}</h2>
      </ContainerTitleMobile>
      <ContainerCreateSearch>
        {/* <AddActivities id={localStorage.getItem("id")} /> */}
        <ContainerAddActive>
          <button>Criar Atividade</button>
        </ContainerAddActive>
        <ContainerInputs>
          <h3>Pesquisar atividade</h3>
          <input
            value={idActive}
            onChange={(e) => setIdActive(e.target.value)}
            placeholder="Digite o numero da atividade"
          />
          <Button callback={() => hanldeSearch(idActive)}>Enviar</Button>
        </ContainerInputs>
      </ContainerCreateSearch>

      <ContainerActivitiesGoals>
        <OptionsContainerMobile>
          <CardsContainerMobile>
            {idActive.length !== 0
              ? oneActives &&
                oneActives.map((active, index) => (
                  <ListCardsContainerMobile key={index}>
                    {active.title}
                    {isUpdate ? (
                      <button
                        onClick={() =>
                          handleUpdate(active.id, inputUpdate, active.group)
                        }
                      >
                        Enviar
                      </button>
                    ) : (
                      <button onClick={UpdateHere}>Atualizar</button>
                    )}{" "}
                    <button onClick={() => DeleteActivities(active.id)}>
                      Remover
                    </button>
                    {isUpdate ? (
                      <input
                        placeholder="Digite o novo nome"
                        value={inputUpdate}
                        onChange={(e) => setInpuUpdate(e.target.value)}
                      />
                    ) : (
                      <></>
                    )}
                  </ListCardsContainerMobile>
                ))
              : showActivities &&
                showActivities.map((active, index) => (
                  <ListCardsContainerMobile key={index}>
                    <div>{active.title}</div>
                    <div>{active.realization_time}</div>
                    <ContainerButton>
                      {isUpdate ? (
                        <button
                          onClick={() =>
                            handleUpdate(active.id, inputUpdate, active.group)
                          }
                        >
                          Enviar
                        </button>
                      ) : (
                        <button onClick={UpdateHere}>Atualizar</button>
                      )}{" "}
                      <button onClick={() => DeleteActivities(active.id)}>
                        Remover
                      </button>
                    </ContainerButton>
                    {isUpdate ? (
                      <input
                        placeholder="Digite o novo nome"
                        value={inputUpdate}
                        onChange={(e) => setInpuUpdate(e.target.value)}
                      />
                    ) : (
                      <></>
                    )}
                  </ListCardsContainerMobile>
                ))}
          </CardsContainerMobile>
        </OptionsContainerMobile>
        <OptionsContainerMobile>
          <CardsContainerMobile></CardsContainerMobile>
          Metas
        </OptionsContainerMobile>
      </ContainerActivitiesGoals>
    </ContainerMobile>
  );
};

export default Activities;
