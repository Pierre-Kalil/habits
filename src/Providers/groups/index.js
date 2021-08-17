import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [groupName,setGroupName] = useState('');

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

  const editGroup = (data, group) => {
        
        axios.patch(`https://kabit-api.herokuapp.com/groups/${group}/`, data, {
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        .then(()=> toast.success('editado com sucesso'))
        .catch(err => console.log(err))
};

  const nameGroup = (group) => {
    axios.get(`https://kabit-api.herokuapp.com/groups/${group}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((response) => setGroupName(response.data.name))
    .catch((err)=> console.log(err))
}; 

  



  return (
    <GroupsContext.Provider value={{ groups, newGroup, loadGroups , editGroup, nameGroup, groupName}}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
