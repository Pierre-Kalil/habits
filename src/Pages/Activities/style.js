import styled from "styled-components";

export const ContainerMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 769px) {
  }
`;

export const ContainerTitleMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h2 {
    margin: 20px 0;
    font-size: 28px;
  }
`;

export const ContainerActivitiesGoals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const ContainerCreateSearch = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    border-radius: 10px;
    border: none;
    background: var(--roxo-secundario);
    font-weight: bold;
    color: #fff;
    ::placeholder {
      color: #fff;
    }
  }

  input:hover {
    opacity: 0.8;
  }

  button {
    width: 100%;
  }

  @media (min-width: 769px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-image: var(--gradiente);

  button {
    width: 50%;
    padding: 8px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
    font-weight: bold;
  }

  input {
    margin: 10px 0;
    padding: 9px;
  }

  @media (min-width: 500px) {
    width: 40%;
    input {
      width: 70%;
    }
    button {
      width: 50%;
    }
  }
`;

export const ContainerAddActive = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-image: var(--gradiente);

  button:hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  @media (min-width: 500px) {
    width: 40%;
  }
`;

export const OptionsContainerMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
`;

//lista dos grupos
export const CardsContainerMobile = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const ListCardsContainerMobile = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 70%;
  height: 150px;
  margin: 5px 0;
  border-radius: 20px;
  background-image: var(--gradiente);
  box-shadow: 1px 1px 4px 1px var(--sombra-box);
  background-color: var(--roxo-secundario);
  color: #fff;
  text-align: center;

  input {
    padding: 8px 0;
    border: none;
    border-radius: 10px;
  }

  @media (min-width: 500px) {
    width: 45%;
  }
  @media (min-width: 769px) {
    width: 40%;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  button {
    width: 35%;
    padding: 5px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
  }
`;

//UTILIZAR OS MESMOS CONTAINERS PARA METAS
