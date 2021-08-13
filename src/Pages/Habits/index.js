import { useState, useEffect } from "react";
import AddHabits from "../../components/AddHabits"
import Habit from "../../components/Habit"
import {useHabits} from "../../Providers/habits"
import SinalMais from "../../components/SinalMais"
import {Container, Content} from "./styles"
import Header from "../../components/Header"
import axios from "axios";


const Habits = () => {
    const {habits, setHabits} = useHabits();
    const [addNewHabit, setAddNewHabit] = useState(0);

    const loadHabits = () => {
        axios.get("https://kabit-api.herokuapp.com/habits/personal/", {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            },
        }).then(response=> {setHabits(response.data)});
    }

    useEffect(()=>{
        loadHabits();
    },[habits])

    return(
    <Container>
        <Header />
        <Content>
            {habits.map((habit, index)=> <Habit key={index} habit={habit}></Habit>)}
            
            {addNewHabit ? 
                <AddHabits setAddNewHabit={setAddNewHabit}/>
                :
                <></>
            }
            <SinalMais onClick = {() => {setAddNewHabit(1)}} />
        </Content>
    </Container>
    )
}

export default Habits;