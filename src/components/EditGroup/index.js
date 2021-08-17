import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Container, ContainerInputs } from "../AddHabits/styles";
import Button from "../Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

const EditGroup = ({setEdit, group}) => { 
    const {editGroup} = useContext(GroupsContext)
    const schema = yup.object().shape({
        category: yup.string().required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver((schema))})

    const handleEditGroup = (data) => {
        editGroup(data,group) 
        setEdit(false)
    }

    return (
        <>
            <Container onSubmit = {handleSubmit(handleEditGroup)}>
                <h4>Nova Categoria:</h4>
                <ContainerInputs>
                    <input placeholder = 'nova categoria' {...register('category')} />
                    <Button type = 'submit' >Editar</Button>
                </ContainerInputs>

            </Container>
        </>
    )
}
export default EditGroup;