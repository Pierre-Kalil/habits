import { useContext, useEffect, useState } from "react";
import { useActivities } from "../../Providers/actives";
import { useGoals } from "../../Providers/goals";

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
import AddGoals from "../../components/AddGoals";

import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import HeaderLogged from "../../components/HeaderLogged";
import { GroupsContext } from "../../Providers/groups";

import Button from "../../components/Button";

import HomeBackground from "../../components/BackgroundHome";
import Footer from "../../components/Footer";

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
  const [isGoalUpdate, setIsGoalUpdate] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [inputUpdate, setInpuUpdate] = useState("");

  const [inputGoalUpdate, setInpuGoalUpdate] = useState(false);
  const { showGoals, ShowGoals, UpdateGoals, DeleteGoals } = useGoals();

  const { groupName } = useContext(GroupsContext);
  const [idActive, setIdActive] = useState("");

  const UpdateHere = () => {
    setIsUpdate(true);
  };
  const handleUpdate = (id, inputUpdate, group) => {
    const data = { id: id, title: inputUpdate, group: group };
    setIsUpdate(false);
    UpdateActivities(data);
  };

  const UpdateGoalHere = () => {
    setIsGoalUpdate(true);
  };
  const handleGoalUpdate = (id, inputGoalUpdate) => {
    const data = { id: id, achieved: inputGoalUpdate };
    UpdateGoals(data);
  };

  const hanldeSearch = (active) => {
    OneActivities(active);
    setIsSearch(false);
  };
  const handleIsSearch = () => {
    setIsSearch(true);
  };

  useEffect(() => {
    ShowActivities(localStorage.getItem("id"));
    ShowGoals(localStorage.getItem("id"));
  }, [showActivities, showGoals]);

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

      <ContainerActivitiesGoals>
        <OptionsContainerMobile>
          <ContainerCreateSearch>
            <ContainerAddActive>
              <AddActivities id={localStorage.getItem("id")} />
              {/* <button>Criar Atividade</button> */}
            </ContainerAddActive>
            {isSearch ? (
              <ContainerInputs>
                <input
                  value={idActive}
                  onChange={(e) => setIdActive(e.target.value)}
                  placeholder="Digite o numero da atividade"
                />
                <button onClick={() => hanldeSearch(idActive)}>Enviar</button>
              </ContainerInputs>
            ) : (
              <ContainerInputs>
                <button onClick={handleIsSearch}>Enviar</button>
              </ContainerInputs>
            )}
          </ContainerCreateSearch>
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

        {/********************************* METAS *******************************/}
        <OptionsContainerMobile>
          <div>
            <AddGoals id={localStorage.getItem("id")} />
          </div>
          <ul>
            {showGoals &&
              showGoals.map((goal, index) => (
                <ListCardsContainerMobile key={index}>
                  <p>
                    {goal.title}
                    {isGoalUpdate ? (
                      <button
                        onClick={() =>
                          handleGoalUpdate(goal.id, inputGoalUpdate)
                        }
                      >
                        Enviar
                      </button>
                    ) : (
                      <button onClick={UpdateGoalHere}>Atualizar</button>
                    )}{" "}
                    <button onClick={() => DeleteGoals(goal.id)}>
                      Remover
                    </button>
                    {isGoalUpdate ? (
                      <input
                        placeholder="Atingido?"
                        /* value={inputGoalUpdate} */
                        onChange={(e) => setInpuGoalUpdate(true)}
                      />
                    ) : (
                      <></>
                    )}
                  </p>
                </ListCardsContainerMobile>
              ))}
          </ul>
        </OptionsContainerMobile>
        {/********************************* FIM METAS *******************************/}
      </ContainerActivitiesGoals>
    </ContainerMobile>
  );
};

export default Activities;
