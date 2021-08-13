import { createContext, useContext, useEffect, useState} from "react";
import axios from "axios"

export const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habits, setHabits] = useState([]);

    useEffect(()=>{
        axios.get("https://kabit-api.herokuapp.com/habits/personal/",{
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
    }).then(response => {setHabits(response.data)});
    },[])
    
    return(
        <HabitsContext.Provider value = {{habits, setHabits}}>
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits  = () => useContext(HabitsContext);