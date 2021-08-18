import { useState } from "react";
import { useGoals } from "../../Providers/goals";
import Button from "../Button";
import Input from "../Input";
import { ContainerAddGoals } from "./styled";

const AddGoals = ({ id }) => {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [how_much_achieved, setHow_much_achieved] = useState("");
  const { CreateGoals } = useGoals();

  //envio do objeto para o provider
  const handleGoal = (id) => {
    const data = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: how_much_achieved,
      group: id,
    };
    console.log(data);
    CreateGoals(data);
  };

  //os inputs abaixo estão nos cards na page de grupos
  return (
    <ContainerAddGoals>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        placeholder="Difficulty"
      />
      <input
        value={how_much_achieved}
        onChange={(e) => setHow_much_achieved(e.target.value)}
        placeholder="How much achieved"
      />
      <Button callback={() => handleGoal(id)}>Enviar</Button>
    </ContainerAddGoals>
  );
};

export default AddGoals;
