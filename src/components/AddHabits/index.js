import Button from "../../components/Button"
import { Container, ContainerButtons, ContainerInputs, ContainerTest, InputContainerHabit } from "./styles"
import {useHabits} from "../../Providers/habits"
import {useUser} from "../../Providers/user"
import Input from "../Input"

import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";

const AddHabits = ({setAddNewHabit}) => {

    const {addHabit} = useHabits();
    const {user} = useUser();
    
    const formSchema = yup.object().shape({
        title: yup.string().required("Titúlo Obrigatório!"),
        category: yup.string().required("Categoria Obrigatório!"),
        difficulty: yup.string().required("Dificuldade Obrigatória!"),
        frequency: yup.string().required("Frequência Obrigatório!"),
        achieved: yup.boolean().required("Item Obrigatório!"),
        how_much_achieved: yup.number().required("Item Obrigatório!"),
    })

    const {
        register, handleSubmit,
        formState: {errors}}
        = useForm({
            resolver: yupResolver((formSchema)),
        });

        const onSubmit =(data)=>{
            addHabit(data, user);
            setAddNewHabit(0);
        }

    return( 
        <>
        
            <Container onSubmit= {handleSubmit(onSubmit)}>
                <h3>Registre seus hábitos</h3>
                <ContainerInputs>
                    <InputContainerHabit>
                    <input placeholder="Título" {...register("title")}></input>
                    </InputContainerHabit>
                    <InputContainerHabit>
                    <input placeholder="Categoria" {...register("category")}></input>
                    </InputContainerHabit>
                    <InputContainerHabit>
                    <input placeholder="Dificuldade" {...register("difficulty")}></input>
                    </InputContainerHabit>
                    <InputContainerHabit>
                    <input placeholder="Frequencia" {...register("frequency")}></input>
                    </InputContainerHabit>
                    <InputContainerHabit>
                    <input placeholder="Alcançado?" {...register("achieved")}></input>
                    </InputContainerHabit>
                    <InputContainerHabit>
                    <input placeholder="Quanto alcançou?" {...register("how_much_achieved")}></input>
                    </InputContainerHabit>
                </ContainerInputs>
                <ContainerButtons>
                        <Button callback={()=>{setAddNewHabit(0)}}>CANCELAR</Button>
                        <Button type="submit">ADICIONAR</Button>
                </ContainerButtons>
            </Container>
        
        </>
    )
}

export default AddHabits;
