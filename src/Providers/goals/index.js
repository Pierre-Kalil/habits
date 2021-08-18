import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [showGoals, setShowGoals] = useState([]);

  const CreateActives = (data) => {
    axios
      .post("https://kabit-api.herokuapp.com/goals/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response.data.goals))
      .catch((err) => console.log(err));
  };

  const ShowGoals = (id) => {
    axios
      .get(`https://kabit-api.herokuapp.com/goals/?group=${id}&page=1`)
      .then((response) => setShowGoals(response.data.results))
      .catch((err) => console.log(err));
  };
  console.log(showGoals);

  const UpdateGoals = (data) => {
    const { id, title, group } = data;
    console.log(data);
    axios
      .patch(
        `https://kabit-api.herokuapp.com/goals/${id}/`,
        {
          title: title,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const DeleteGoals = (id) => {
    axios
      .delete(`https://kabit-api.herokuapp.com/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <GoalsContext.Provider
      value={{
        showGoals,
        CreateActives,
        ShowGoals,
        UpdateGoals,
        DeleteGoals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);