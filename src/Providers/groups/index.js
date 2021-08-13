import axios from "axios";
import { useEffect } from "react";
import {createContext, useContext, useState } from "react"

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {
    
    const [groups, setGroups] = useState([]);

    const loadGroups = () => {
        axios.get('https://kabit-api.herokuapp.com/groups/subscriptions/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            },
        }).then(response=> setGroups(response.data));
    }

    useEffect ( () => {
        loadGroups();
    },[groups])

    return(
        <GroupsContext.Provider value ={{groups, loadGroups}}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => useContext(GroupsContext)