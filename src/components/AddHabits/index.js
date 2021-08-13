import Button from "../../components/Button"
import { Container, ContainerButtons, ContainerInputs, ContainerTest } from "./styles"
import {useHabits} from "../../Providers/habits"
import {useUser} from "../../Providers/user"

import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";

const AddHabits = ({setAddNewHabit}) => {

    const {habits, setHabits} = useHabits();
    const {user} = useUser();
    
    const formSchema = yup.object().shape({
        title: yup.string().required("Titúlo Obrigatório"),
        category: yup.string().required("Categoria Obrigatório"),
        difficulty: yup.string().required("Dificuldade Obrigatória"),
        frequency: yup.string().required("Frequência Obrigatório"),
        achieved: yup.string().required("Item Obrigatório"),
        how_much_achieved: yup.string().required("Item Obrigatório"),
    })

    const {
        register, handleSubmit,
        formState: {errors}}
        = useForm({
            resolver: yupResolver((formSchema)),
        });

        

        const onSubmit =(data)=>{
            
            const {title, category,difficulty,frequency,achieved,how_much_achieved} = data;
            
            axios.post("https://kabit-api.herokuapp.com/habits/", {
                title: title,
                category: category,
                difficulty: difficulty,
                frequency: frequency,
                achieved: achieved,
                how_much_achieved: how_much_achieved,
                user: user,
            }, {
                headers:{
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            })

            setAddNewHabit(0);
        }

    return( 
        <>
        
            <Container onSubmit= {handleSubmit(onSubmit)}>
                <h3>CADASTRAR HÁBITOS</h3>
                <ContainerInputs>
                    <input placeholder="title" {...register("title")}></input>
                    <input placeholder="category" {...register("category")}></input>
                    <input placeholder="dificulty" {...register("difficulty")}></input>
                    <input placeholder="frequency" {...register("frequency")}></input>
                    <input placeholder="achieved" {...register("achieved")}></input>
                    <input placeholder="how_much_achieved" {...register("how_much_achieved")}></input>
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
