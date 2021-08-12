import {Container} from "./styles"
import {FiPlus} from "react-icons/fi"
const SinalMais = ({onClick}) => {
    return(
        <Container onClick ={onClick}>
            <FiPlus size={200} />
        </Container>
    )
}

export default SinalMais;