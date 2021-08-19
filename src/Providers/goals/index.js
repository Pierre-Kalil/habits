import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [showGoals, setShowGoals] = useState([]);
  const [oneGoal, setOneGoal] = useState([]);

  const CreateGoals = (data) => {
    axios
      .post("https://kabit-api.herokuapp.com/goals/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => toast.sucess('Meta criada com sucesso'))
      .catch((err) => console.log('Erro ao criar meta'));
  };

  const ShowGoals = (id) => {
    axios
      .get(`https://kabit-api.herokuapp.com/goals/?group=${id}&page=1`)
      .then((response) => setShowGoals(response.data.results))
      .catch((err) => toast.error('Erro ao mostrar metas'));
  };

  const UpdateGoals = (id) => {
    
    axios
      .patch(
        `https://kabit-api.herokuapp.com/goals/${id}/`,
        {
          achieved: true
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then(() => toast.sucess('Atualizado com sucesso'))
      .catch((err) => console.log(err));
  };

  const DeleteGoals = (id) => {
    axios
      .delete(`https://kabit-api.herokuapp.com/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(() => toast.sucess('Deletado com sucesso'))
      .catch((err) => console.log(err));
  };

  const OneGoal = (id) => {
    axios
      .get(`https://kabit-api.herokuapp.com/goals/${id}/`)
      .then((response) => setOneGoal([response.data]));
  };

  return (
    <GoalsContext.Provider
      value={{
        showGoals,
        CreateGoals,
        ShowGoals,
        UpdateGoals,
        DeleteGoals,
        OneGoal,
        oneGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
