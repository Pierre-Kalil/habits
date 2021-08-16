import styled from "styled-components";

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

export const ContainerDescktop = styled.div`
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
export const BoxContainerDescktop = styled.div`
  background-color: purple;
  height: 30vh;
  font-size: 20px;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OptionsContainerDescktop = styled.div`
  height: 50vh;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
