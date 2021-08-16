import Button  from "../Button"
import { Container, ContainerInfos, ContainerButtons } from "./style"
import {useHabits} from "../../Providers/habits"

const Habit = ({habit}) => {

    const {updateHabit, deleteHabit} = useHabits();

    return(
        <Container>
            <h1>MEU HÁBITO</h1>
            <ContainerInfos>
                <h5>TITULO: {habit.title}</h5>
                <h5>CATEGORIA: {habit.category}</h5>
                <h5>DIFICULDADE: {habit.difficulty}</h5>
                <h5>FREQUÊNCIA: {habit.frequency}</h5>
                <h5>ALCANÇADO: {habit.achieved.toString()}</h5>
                <h5>QUANTO ANCANÇOU:{habit.how_much_achieved}</h5>
            </ContainerInfos>
            <ContainerButtons>
                <Button callback ={() => deleteHabit(habit)}>EXCLUIR</Button>
                <Button callback ={() => updateHabit(habit)}>UPDATE</Button>
            </ContainerButtons>
        </Container>
    )
}

export default Habit