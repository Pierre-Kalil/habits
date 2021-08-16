import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [showActivities, setShowActivities] = useState([]);

  const CreateActives = (data) => {
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
      .get(`https://kabit-api.herokuapp.com/activities/?group=${id}`)
      .then((response) =>
        setShowActivities([...showActivities, response.data.activities])
      )
      .catch((err) => console.log(err));
  };

  return (
    <ActivitiesContext.Provider
      value={{ showActivities, CreateActives, ShowActivities }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
