import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const loadGroups = () => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })

      .then((response) => setGroups(response.data));
  };

  useEffect(() => {
    loadGroups();
  });
  console.log(groups);
  const newGroup = (data) => {
    const { name, description, category } = data;

    axios.post(
      "https://kabit-api.herokuapp.com/groups/",
      {
        name: name,
        description: description,
        category: category,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
  };

  return (
    <GroupsContext.Provider value={{ groups, newGroup, loadGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
