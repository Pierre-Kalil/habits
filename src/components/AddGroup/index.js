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
import { InputContainerGroup } from "../../Pages/Groups/styles"

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
          <input placeholder="Nome" {...register("name")} />
          <input placeholder="Descrição" {...register("description")} />
          <input placeholder="Categoria" {...register("category")} />
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
