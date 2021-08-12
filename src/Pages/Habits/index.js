import { useState, useEffect } from "react";
import AddHabits from "../../components/AddHabits"
import Habit from "../../components/Habit"
import {useHabits} from "../../Providers/habits"
import SinalMais from "../../components/SinalMais"
import {Container, Content} from "./styles"
import Header from "../../components/Header"


const Habits = () => {
    const {habits, setHabits} = useHabits();
    const [addNewHabit, setAddNewHabit] = useState(0);

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