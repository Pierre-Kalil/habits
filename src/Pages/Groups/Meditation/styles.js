import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: var(--background);

  p {
    width: 80%;
    font-style: italic;
    font-size: 13px;
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  text-align: justify;
  background-color: var(--caixa-de-texto);
  color: #fff;
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(153, 140, 140, 0.55);
`;

export const InputStyle = styled.input`
  width: 80%;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  background-color: #ccc;
`;
