import axios from "axios";
import { createContext, useContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [showActivities, setShowActivities] = useState([]);

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
    console.log(id);
    axios
      .get(`https://kabit-api.herokuapp.com/activities/?group=${id}&page=1`)
      .then((response) => setShowActivities(response.data.results))
      .catch((err) => console.log(err));
  };

  const UpdateActivities = (data) => {
    const { id, title, group } = data;
    console.log(data);
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

  return (
    <ActivitiesContext.Provider
      value={{
        showActivities,
        CreateActives,
        ShowActivities,
        UpdateActivities,
        DeleteActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
