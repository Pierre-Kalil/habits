import { useState, useEffect } from "react";
import AddHabits from "../../components/AddHabits"
import Habit from "../../components/Habit"
import {useHabits} from "../../Providers/habits"
import SinalMais from "../../components/SinalMais"
import Button from "../../components/Button";
import {Container, Content} from "./styles"
import HeaderLogged from "../../components/HeaderLogged"
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import Footer from "../../components/Footer";
import HomeBackground from "../../components/BackgroundHome";


const Habits = () => {
    const {habits, loadHabits} = useHabits();
    const [addNewHabit, setAddNewHabit] = useState(0);

    useEffect(()=>{
        loadHabits();
    },[habits])

          const { auth } = useAuth();
        if (!auth) {
          return <Redirect to="/login" />
        }
    return(
    <div>
        <HomeBackground />
        <Container>
        <HeaderLogged />
            <h1>Hábitos</h1>
            <div>
                <Button onClick = {() => {setAddNewHabit(1)}}>Adicionar Hábitos</Button>
            </div>
        <Content>

            {habits.map((habit)=> <Habit key={habit.id} habit={habit}></Habit>)}
            
            {addNewHabit ? 
                <AddHabits setAddNewHabit={setAddNewHabit}/>
                :
                <></>
            }

        </Content>

        <Footer />
    </Container>
    </div>
    )
}

export default Habits;