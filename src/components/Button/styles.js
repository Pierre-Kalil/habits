import styled from "styled-components";

export const StyledButton = styled.button`
  width: 240px;
  height: 40px;
  /* margin: auto 0; */
  background-color: var(--roxo-secundario);
  border-radius: 16px 0 16px 16px;
  border: 2px solid var(--roxo-secundario);
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  cursor: pointer;
  color: var(--background);
  transition: 0.25s;

  :hover {
    background-color: var(--background);
    border: 2px solid var(--roxo-secundario);
    border-radius: 16px 0 16px 16px;
    color: var(--roxo-secundario);
  }
  :active {
    background-color: var(--caixa-de-texto);
    border: 2px solid #222222;
    color: #222222;
    border-radius: 16px 0 16px 16px;
  }
`;
