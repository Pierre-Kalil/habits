import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useActivities } from "../../Providers/actives";

import {
  ContainerMobile,
  ListCardsContainerMobile,
  OptionsContainerMobile,
} from "./style";
import AddActivities from "../../components/AddActivities";

import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import { MenuHeader } from "../../components/Header/styles";
import HeaderLogged from "../../components/HeaderLogged";
import Input from "../../components/Input";
import { GroupsContext } from "../../Providers/groups";
import HomeBackground from "../../components/BackgroundHome";
import Footer from "../../components/Footer";

const Activities = () => {
  const { showActivities } = useActivities();
  const [isUpdate, setIsUpdate] = useState(false);
  const [inputUpdate, setInpuUpdate] = useState("");
  const { UpdateActivities, DeleteActivities } = useActivities();
  const { ShowActivities } = useActivities();
  const {groupName} = useContext(GroupsContext);

  const UpdateHere = () => {
    setIsUpdate(true);
  };

  const handleUpdate = (id, inputUpdate, group) => {
    const data = { id: id, title: inputUpdate, group: group };
    UpdateActivities(data);
  };

  useEffect(() => {
    ShowActivities(showActivities[0]?.group);
  }, [showActivities]);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (

    <ContainerMobile>
      <HeaderLogged />
      <HomeBackground />
      <h1>Atividades e Metas</h1>
      <h1>{groupName}</h1>
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
      <Footer />
    </ContainerMobile>
  );
};

export default Activities;
