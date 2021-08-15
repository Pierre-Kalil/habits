import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [actives, setActives] = useState([]);

  const loadActives = (data) => {
    console.log(data);
    // const { title, realization_time, group } = data;
    axios
      .post("https://kabit-api.herokuapp.com/activities/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => setActives(response.data.activities));
  };

  useEffect(() => {
    loadActives();
  }, []);

  return (
    <ActivitiesContext.Provider value={{ actives, setActives, loadActives }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
