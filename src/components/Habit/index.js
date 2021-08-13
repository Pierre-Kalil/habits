import Button  from "../Button"
import { Container, ContainerInfos, ContainerButtons } from "./style"
import {useHabits} from "../../Providers/habits"
import axios from "axios"
const Habit = ({habit}) => {

    
    const updateHabit = () => {
        axios.patch(`https://kabit-api.herokuapp.com/habits/${habit.id}/`,{
            achieved: true,
            how_much_achieved: "100",
        },{
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
        });
    }

    const deleteHabit = () =>{
        console.log(habit.id)
        axios.delete(`https://kabit-api.herokuapp.com/habits/${habit.id}/`, {
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`              
            },
        }

        )
        
    }
    
    return(
        <Container>
            <h1>MEU HÁBITO</h1>
            <ContainerInfos>
                <h5>TITULO: {habit.title}</h5>
                <h5>CATEGORIA: {habit.category}</h5>
                <h5>DIFICULDADE: {habit.difficulty}</h5>
                <h5>FREQUÊNCIA: {habit.frequency}</h5>
                <h5>ALCANÇADO: {habit?.achieved}</h5>
                <h5>QUANTO ANCANÇOU:{habit.how_much_achieved}</h5>
            </ContainerInfos>
            <ContainerButtons>
                <Button callback ={deleteHabit}>EXCLUIR</Button>
                <Button callback ={updateHabit}>UPDATE</Button>
            </ContainerButtons>
        </Container>
    )
}

export default Habit