import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useActivities } from "../../Providers/actives";
import {
  ContainerMobile,
  ListCardsContainerMobile,
  OptionsContainerMobile,
} from "./style";
import AddActivities from "../../components/AddActivities";

const Activities = () => {
  const { showActivities } = useActivities();
  const [isUpdate, setIsUpdate] = useState(false);
  const [inputUpdate, setInpuUpdate] = useState("");
  const { UpdateActivities, DeleteActivities } = useActivities();
  const { ShowActivities } = useActivities();

  const UpdateHere = () => {
    setIsUpdate(true);
  };

  const handleUpdate = (id, inputUpdate, group) => {
    const data = { id: id, title: inputUpdate, group: group };
    UpdateActivities(data);
  };

  useEffect(() => {
    ShowActivities(showActivities[0]?.group);
  }, []);

  return (
    <ContainerMobile>
      <h1>Atividades e Metas</h1>
      <OptionsContainerMobile>
        <div>
          <AddActivities id={showActivities[0]?.group} />
        </div>
        <ul>
          {showActivities &&
            showActivities.map((active, index) => (
              <ListCardsContainerMobile key={index}>
                <p>
                  {active.title}
                  {isUpdate ? (
                    <button
                      onClick={() =>
                        handleUpdate(active.id, inputUpdate, active.group)
                      }
                    >
                      Enviar
                    </button>
                  ) : (
                    <button onClick={UpdateHere}>Atualizar</button>
                  )}{" "}
                  <button onClick={() => DeleteActivities(active.id)}>
                    Remover
                  </button>
                  {isUpdate ? (
                    <input
                      placeholder="Digite o novo nome"
                      value={inputUpdate}
                      onChange={(e) => setInpuUpdate(e.target.value)}
                    />
                  ) : (
                    <></>
                  )}
                </p>
              </ListCardsContainerMobile>
            ))}
        </ul>
      </OptionsContainerMobile>
    </ContainerMobile>
  );
};

export default Activities;
