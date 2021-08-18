import Button  from "../Button"
import { Container, ContainerInfos, ContainerButtons } from "./styles"
import {useHabits} from "../../Providers/habits"

const Habit = ({habit}) => {

    const {updateHabit, deleteHabit} = useHabits();

    return(
        <Container>
            <h1>Meu Hábito </h1>
            <ContainerInfos>
                <h5>Título: {habit.title}</h5>
                <h5>Categoria: {habit.category}</h5>
                <h5>Dificuldade: {habit.difficulty}</h5>
                <h5>Frequência: {habit.frequency}</h5>
                <h5>Alcançado: {habit.achieved.toString()}</h5>
                <h5>Quanto alcançou:{habit.how_much_achieved}</h5>
            </ContainerInfos>
            <ContainerButtons>
                <Button callback ={() => deleteHabit(habit)}>EXCLUIR</Button>
                <Button callback ={() => updateHabit(habit)}>ATUALIZAR</Button>
            </ContainerButtons>
        </Container>
    )
}

export default Habit