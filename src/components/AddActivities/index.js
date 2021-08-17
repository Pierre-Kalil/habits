import { useState } from "react";
import { useActivities } from "../../Providers/actives";
import Button from "../Button";
import Input from "../Input";
import { ContainerAddActivities } from "./styled";

const AddActivities = ({ id }) => {
  // const [actives, setActives] = useState({})
  const [title, setTitle] = useState("");
  const { CreateActives } = useActivities();

  //funções para formatar data, conforme pede a documentação da API
  const zeroFill = (n) => {
    return n < 9 ? `0${n}` : `${n}`;
  };

  const FormatData = (date) => {
    const d = zeroFill(date.getDate());
    const mo = zeroFill(date.getMonth() + 1);
    const y = zeroFill(date.getFullYear());
    const h = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    const s = zeroFill(date.getSeconds());

    return `${y}-${mo}-${d}T${h}:${mi}:${s}Z`;
  };
  const date = new Date();
  const dateActive = FormatData(date).toString();
  //fim da formatação da data

  //envio do objeto para o provider
  const handleActive = (id) => {
    const data = {
      title: title,
      realization_time: dateActive,
      group: id,
    };
    console.log(data);
    CreateActives(data);
  };

  //os inputs abaixo estão nos cards na page de grupos
  return (
    <ContainerAddActivities>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nome da atividade"
      />
      <Button callback={() => handleActive(id)}>Enviar</Button>
    </ContainerAddActivities>
  );
};

export default AddActivities;
