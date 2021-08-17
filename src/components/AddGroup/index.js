import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GroupsContext } from "../../Providers/groups";
import {
  ContainerButtons,
  ContainerInputs,
  Button2,
} from "../AddHabits/styles";
import { Container } from "./styles";
import * as yup from "yup";

const AddGroup = ({ setRegister }) => {
  const { newGroup } = useContext(GroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    category: yup.string().required("Categoria obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleNewGroup = (data) => {
    newGroup(data);
    setRegister(false);
  };

  return (
    <>
      <Container onSubmit={handleSubmit(handleNewGroup)}>
        <h3>Cadastrar Grupo</h3>
        <ContainerInputs>
          <input placeholder="nome" {...register("name")} />
          <input placeholder="descrição" {...register("description")} />
          <input placeholder="categoria" {...register("category")} />
        </ContainerInputs>
        <ContainerButtons>
          <Button2 onClick={() => setRegister(false)}>Cancelar</Button2>
          <Button2 type="submit">Adicionar</Button2>
        </ContainerButtons>
      </Container>
    </>
  );
};

export default AddGroup;
