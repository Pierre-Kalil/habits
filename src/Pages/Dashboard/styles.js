import styled from "styled-components";
import ImageGroup1 from "../../images/ImageGroup1.png";
import ImageGroup2 from "../../images/ImageGroup2.png";

export const ContainerMobile = styled.div`
  /* height: 90vh; */
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
  }

  h4 {
    color: gray;
    text-align: center;
  }

  img {
    height: 100px;
    width: 100px;
  }
`;

export const BoxContainerMobile = styled.div`
  height: 30vh;
  background-color: blue;
  border: 2px solid black;
  width: 80vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65vh;
`;

// DESKTOP

export const ContainerDesktop = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  width: 90%;
  display: flex;
  /* justify-content: center; */
  height: 15vh;
  figure {
    width: 20%;
  }
  h1 {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-family: "Calibri";
  }
`;

export const OptionsContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  div {
    div {
      width: 300px;
      p {
        font-size: 16px;
        span {
          color: var(--roxo-secundario);
          font-style: italic;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.33);
        }
      }
    }
  }

  a {
    color: var(--roxo-secundario);
    text-decoration: none;
    text-align: center;
    /* font-size: 2.5rem; */
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.67);
    font-family: "Calibri";
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerHabtisGroups = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49%;

  .figure {
    /* padding: 10px; */
    width: 80%;
    height: 350px;
    border-radius: 20px;
    border: 6px solid var(--roxo-secundario);
  }

  .figure:hover {
    background-color: var(--caixa-de-texto);
  }

  img {
    width: 100%;
    height: 100%;
  }

  .text {
    text-align: right;
    width: 150px;
  }

  .text2 {
    text-align: left;
    width: 150px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;

    .figure {
      width: 200px;
      height: 200px;
    }
  }
`;

export const Divisor = styled.div`
  display: flex;
  flex-direction: column;
  width: 5px;

  hr {
    width: 100%;
    margin: 16px 0;
  }

  @media (max-width: 768) {
    flex-direction: row;
  }
`;
