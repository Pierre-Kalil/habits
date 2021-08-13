import { useState, useEffect } from "react";
import AddHabits from "../../components/AddHabits"
import Habit from "../../components/Habit"
import {useHabits} from "../../Providers/habits"
import SinalMais from "../../components/SinalMais"
import {Container, Content} from "./styles"
import HeaderLogged from "../../components/HeaderLogged"



const Habits = () => {
    const {habits, loadHabits} = useHabits();
    const [addNewHabit, setAddNewHabit] = useState(0);

    useEffect(()=>{
        loadHabits();
    },[habits])

    return(
    <Container>
        <HeaderLogged />
        <Content>
            {habits.map((habit)=> <Habit key={habit.id} habit={habit}></Habit>)}
            
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