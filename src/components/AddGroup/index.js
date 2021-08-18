import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { GroupsContext } from "../../Providers/groups"
import { Container, ContainerButtons, ContainerInputs } from "./styles"
import Button from "../Button"
import * as yup from "yup";
import { InputContainerGroup } from "../../Pages/Groups/styles"

const AddGroup = ({setRegister}) => {
    const {newGroup} = useContext(GroupsContext)

    const schema = yup.object().shape({
        name: yup.string().required('Nome Obrigatório!'),
        description: yup.string().required('Descrição obrigatória!'),
        category: yup.string().required('Categoria obrigatória!')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver((schema))})

    const handleNewGroup = (data) => {
        newGroup(data);
        setRegister(false);
    }

    return (
        <>
            <Container onSubmit = {handleSubmit(handleNewGroup)}>
                <h3>Cadastrar Grupo</h3>
                <ContainerInputs>
                    <InputContainerGroup>
                    <input placeholder='Nome' {...register('name')} />
                    </InputContainerGroup>
                    <InputContainerGroup>
                    <input placeholder='Descrição' {...register('description')} />
                    </InputContainerGroup>
                    <InputContainerGroup>
                    <input placeholder='Categoria' {...register('category')} />
                    </InputContainerGroup>
                </ContainerInputs>
                <ContainerButtons>
                    <Button callback = {()=> setRegister(false)}>CANCELAR</Button>
                    <Button type = 'submit'>ADICIONAR</Button>
                </ContainerButtons>
            </Container>
        </>
    )


}

export default AddGroup;
