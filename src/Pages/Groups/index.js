import {
  ContainerMobile,
  // BoxContainerMobile,
  OptionsContainerMobile,
} from "./styles";
import {
  ContainerDescktop,
  // BoxContainerDescktop,
  OptionsContainerDescktop,
} from "./styles";
// import { Link } from "react-router-dom";

import HeaderLogged from "../../components/HeaderLogged";

const Groups = () => {
  const viewport = window.innerWidth;

  return (
    <>
      <HeaderLogged />
      {viewport < 500 ? (
        <ContainerMobile>
          <h2>Organize sua vida</h2>
          <h4>Escolha uma opção: </h4>
          <OptionsContainerMobile>
            {/**Cards transferidos para community */}
          </OptionsContainerMobile>
        </ContainerMobile>
      ) : (
        <ContainerDescktop>
          <h1>Escolha seu grupo</h1>
          <OptionsContainerDescktop>
            {/**Cards transferidos para community */}
          </OptionsContainerDescktop>
        </ContainerDescktop>
      )}
    </>
  );
};

export default Groups;
