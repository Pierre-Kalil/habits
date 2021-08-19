import styled from "styled-components";

export const ContainerAddGoals = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin: 10px 0;
    padding: 10px;
    width: 80%;
    align-items: center;
    font-size: 16px;
    border: 2px solid var(--roxo-secundario);
    border-radius: 8px;
    padding: 5px 0px 5px 10px;
    flex: 1;
    border: 0;
    color: var(--roxo-terciario);
    padding-left: 8px;
    height:32px;
    }
      input::placeholder {
        color: var(--roxo-secundario);
        font-size: 16px;
      }
`;
