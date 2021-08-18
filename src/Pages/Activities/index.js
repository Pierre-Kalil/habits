import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useActivities } from "../../Providers/actives";
import { useGoals } from "../../Providers/goals";

import {
  ContainerMobile,
  ListCardsContainerMobile,
  OptionsContainerMobile,
  ContainerActivitiesGoals,
} from "./style";
import AddActivities from "../../components/AddActivities";
import AddGoals from "../../components/AddGoals";

import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import { MenuHeader } from "../../components/Header/styles";
import HeaderLogged from "../../components/HeaderLogged";
import Input from "../../components/Input";
import { GroupsContext } from "../../Providers/groups";
import HomeBackground from "../../components/BackgroundHome";
import Footer from "../../components/Footer";

const Activities = () => {
  const { showActivities } = useActivities();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isGoalUpdate, setIsGoalUpdate] = useState(false);
  const [inputUpdate, setInpuUpdate] = useState("");
  const [inputGoalUpdate, setInpuGoalUpdate] = useState(false);
  const { UpdateActivities, DeleteActivities } = useActivities();
  const { ShowActivities } = useActivities();
  const { showGoals, ShowGoals, UpdateGoals, DeleteGoals } = useGoals();
  const { groupName } = useContext(GroupsContext);

  const UpdateHere = () => {
    setIsUpdate(true);
  };
  const UpdateGoalHere = () => {
    setIsGoalUpdate(true);
  };
  const handleUpdate = (id, inputUpdate, group) => {
    const data = { id: id, title: inputUpdate, group: group };
    UpdateActivities(data);
  };
  const handleGoalUpdate = (id, inputGoalUpdate) => {
    const data = { id: id, achieved: inputGoalUpdate };
    UpdateGoals(data);
  };

  useEffect(() => {
    ShowActivities(localStorage.getItem("id"));
    ShowGoals(localStorage.getItem("id"));
  }, [showActivities, showGoals]);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <ContainerMobile>
      <HeaderLogged />
      <HomeBackground />
      <h1>Atividades e Metas</h1>
      <h1>Grupo: {groupName}</h1>
      <ContainerActivitiesGoals>
        <OptionsContainerMobile>
          <div>
            <AddActivities id={localStorage.getItem("id")} />
          </div>
          <ul>
            {showActivities &&
              showActivities.map((active, index) => (
                <ListCardsContainerMobile key={index}>
                  <p>
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
                  </p>
                </ListCardsContainerMobile>
              ))}
          </ul>
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
