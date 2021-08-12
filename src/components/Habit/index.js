import Button  from "../Button"
import { Container, ContainerInfos, ContainerButtons } from "./style"
import {useHabits} from "../../Providers/habits"
const Habit = ({habit}) => {

    const {habits, setHabits} = useHabits();
    
    const updateHabit = () => {
        habit.achieved = "true"
        habit.how_much_achieved = 100;
        
        localStorage.setItem("habits", JSON.stringify(habits));
        setHabits(habits)
        
    }

    const deleteHabit = () =>{
        setHabits(habits.filter((x) => x != habit));
        localStorage.setItem("habits", JSON.stringify(habits.filter((x) => x != habit)));
    }
    
    return(
        <Container>
            <h1>MEU HÁBITO</h1>
            <ContainerInfos>
                <h5>TITULO: {habit.title}</h5>
                <h5>CATEGORIA: {habit.category}</h5>
                <h5>DIFICULDADE: {habit.difficulty}</h5>
                <h5>FREQUÊNCIA: {habit.frequency}</h5>
                <h5>ALCANÇADO: {habit.achieved}</h5>
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