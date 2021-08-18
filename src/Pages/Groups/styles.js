import styled, {css} from "styled-components";

export const ContainerMobile = styled.div`
  height: 90vh;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
  }

  h4 {
    color: gray;
    text-align: center;
  }
`;

export const BoxContainerMobile = styled.div`
  height: 22vh;
  background-color: blue;
  border: 2px solid black;
  width: 70vw;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const OptionsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
`;

//DESKTOP

export const ContainerDesktop = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BoxContainerDesktop = styled.div`
  background-color: purple;
  height: 30vh;
  font-size: 20px;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OptionsContainerDesktop = styled.div`
  /* height: 400px; */
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
`;

export const InputContainerGroup = styled.div`
/* background: var(--background); */
border-radius: 10px;
border: 2px solid var(--roxo-secundario);
color: var(--roxo-secundario);
padding: 4px;
width: 100%;
display: flex;
/* flex-direction: column; */
transition: 0.4s;
background-color: var(--roxo-secundario);

border-bottom: 6px solid var(--roxo-secundario);
border-right: 6px solid var(--roxo-secundario);

${props => props.isErrored && css`
border-color: red;
svg {
  color: red;
}
`}

input {
  /* background: transparent; */
  align-items: center;
  font-size: 16px;
  border: 2px solid var(--roxo-secundario);
  border-radius: 8px;
  padding: 5px 0px 5px 10px;
  flex: 1;
  border: 0;
  color: var(--roxo-terciario);
  /* padding-left: 8px; */
  height:32px;
}
  input::placeholder {
    color: var(--roxo-secundario);
    font-size: 16px;
  }

svg {
  margin-top: 4px;
}
`;

export const ListCardsContainerDesktop = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 320px;
  margin: 5px 0;
  box-shadow: 1px 1px 4px 1px var(--sombra-box);
  color: #fff;
  background: linear-gradient(177.48deg, #10002B 6.72%, #3C096C 30.84%, #8E97FD 77.98%);
  border-radius: 50px;
  font-size: 20px;

  /* button {
    width: 50%;
  } */

  hr {
    width: 80%;
  }
`;
