import axios from "axios";
import { createContext, useContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [showActivities, setShowActivities] = useState([]);
  const [oneActives, setOneActive] = useState([]);

  const CreateActives = (data) => {
    console.log(data);
    axios
      .post("https://kabit-api.herokuapp.com/activities/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response.data.activities))
      .catch((err) => console.log(err));
  };

  const ShowActivities = (id) => {
    axios
      .get(`https://kabit-api.herokuapp.com/activities/?group=${id}&page=1`)
      .then((response) => setShowActivities(response.data.results))
      .catch((err) => console.log(err));
  };

  const UpdateActivities = (data) => {
    const { id, title, group } = data;
    axios
      .patch(
        `https://kabit-api.herokuapp.com/activities/${id}/`,
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

  const DeleteActivities = (id) => {
    axios
      .delete(`https://kabit-api.herokuapp.com/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const OneActivities = (id) => {
    axios
      .get(`https://kabit-api.herokuapp.com/activities/${id}/`)
      .then((response) => setOneActive([response.data]));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        showActivities,
        CreateActives,
        ShowActivities,
        UpdateActivities,
        DeleteActivities,
        OneActivities,
        oneActives,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
