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
} from "./styles";
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
  const { showGoals, ShowGoals, UpdateGoals, DeleteGoals, OneGoal,oneGoal } = useGoals();

  const { groupName } = useContext(GroupsContext);
  const [idActive, setIdActive] = useState("");
  const [idGoal,setIdGoal] = useState('');

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
    setIsUpdate(false)
  };

  const handleSearch = (active) => {
    OneActivities(active);
    setIsSearch(false);
  };
  const handleGoalSearch = (goal) => {
    OneGoal(goal);
    setIsSearch(true);
  }
  const handleIsSearch = () => {
    setIsSearch(true);
  };

  useEffect(() => {
    ShowGoals(localStorage.getItem("id"));
  }, [showGoals]);

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
      <HeaderLogged />
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
                <Button onClick={() => handleSearch(idActive)}>Enviar</Button>
              </ContainerInputs>
            ) : (
              <ContainerInputs>
                <Button onClick={handleIsSearch}>Pesuisar</Button>
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
                      <Button
                        onClick={() =>
                          handleUpdate(active.id, inputUpdate, active.group)
                        }
                      >
                        Enviar
                      </Button>
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
                    <div>{active.title}  <p>{active.id}</p></div>
                    <div>{active.realization_time}</div>
                
                    <ContainerButton>
                      {isUpdate ? (
                        <Button
                          onClick={() =>
                            handleUpdate(active.id, inputUpdate, active.group)
                          }
                        >
                          Enviar
                        </Button>
                      ) : (
                        <Button onClick={UpdateHere}>Atualizar</Button>
                      )}{" "}
                      <Button onClick={() => DeleteActivities(active.id)}>
                        Remover
                      </Button>
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
          <CardsContainerMobile>
          <ContainerCreateSearch>
            <ContainerAddActive>
              <div>
                <AddGoals id={localStorage.getItem("id")} />
              </div> 
            </ContainerAddActive>
            {isSearch ? (
              <ContainerInputs>
                <input
                  value={idGoal}
                  onChange={(e) => setIdGoal(e.target.value)}
                  placeholder="Digite o numero da meta"
                />
                <Button onClick={() => handleGoalSearch(idGoal)}>Enviar</Button>
              </ContainerInputs>
            ) : (
              <ContainerInputs>
                <Button onClick={handleIsSearch}>Pesuisar</Button>
              </ContainerInputs>
            )}
          </ContainerCreateSearch>
            {idGoal.length !== 0
              ? oneGoal &&
                oneGoal.map((goal, index) => (
                  <ListCardsContainerMobile key={index}>
                    {goal.title}
                    {isUpdate ? (
                      <Button
                        onClick={() =>
                          handleGoalUpdate(goal.id, inputUpdate, goal.group)
                        }
                      >
                        Enviar
                      </Button>
                    ) : (
                      <button onClick={UpdateHere}>Atualizar</button>
                    )}{" "}
                    <button onClick={() => DeleteActivities(goal.id)}>
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
            
            :showGoals &&
              showGoals.map((goal, index) => (
                <ListCardsContainerMobile key={index}>
                  {goal.title}
                  {goal.difficulty}
                  {goal.how_much_achieved}
                  {goal.achieved.toString()}
                  {goal.id}
                  
                    <button onClick={()=> UpdateGoals(goal.id)}>Atualizar</button>
                  
                  <button onClick={() => DeleteGoals(goal.id)}>Remover</button>
                  
                   
                </ListCardsContainerMobile>
              ))}
          </CardsContainerMobile>
        </OptionsContainerMobile>
        {/********************************* FIM METAS *******************************/}
      </ContainerActivitiesGoals>
    </ContainerMobile>
  );
};

export default Activities;
