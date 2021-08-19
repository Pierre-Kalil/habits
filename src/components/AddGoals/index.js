import { useState } from "react";
import { useGoals } from "../../Providers/goals";
import Button from "../Button";
import Input from "../Input";
<<<<<<< HEAD
import { ContainerAddGoals, ContainerCreate } from "./styled";
=======
import { ContainerAddGoals } from "./styles";
>>>>>>> b17a628217a1d71118a937cb3b19a68ce2dcd1d2

const AddGoals = ({ id }) => {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [how_much_achieved, setHow_much_achieved] = useState("");
  const [isCreate, setIsCreate] = useState(false);

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
    setIsCreate(false);
  };

  const handleIsCreate = () => {
    setIsCreate(true);
  };

  //os inputs abaixo estão nos cards na page de grupos
  return (
<<<<<<< HEAD
    <div>
      <ContainerAddGoals>
        {isCreate ? (
          <ContainerCreate>
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
            <button onClick={() => handleGoal(id)}>Enviar</button>
          </ContainerCreate>
        ) : (
          <ContainerCreate>
            <button onClick={handleIsCreate}>Criar Meta</button>
          </ContainerCreate>
        )}
      </ContainerAddGoals>
    </div>
=======
    <ContainerAddGoals>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <input
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        placeholder="Dificuldade"
      />
      <input
        value={how_much_achieved}
        onChange={(e) => setHow_much_achieved(e.target.value)}
        placeholder="Quanto conseguiu?"
      />
      <Button callback={() => handleGoal(id)}>Criar Meta</Button>
    </ContainerAddGoals>
>>>>>>> b17a628217a1d71118a937cb3b19a68ce2dcd1d2
  );
};

export default AddGoals;
