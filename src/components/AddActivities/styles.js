import styled from "styled-components";

export const ContainerAddActivities = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCreate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  button {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 20px;
    background-image: var(--gradiente-buttom);
    color: #fff;
  }

  input {
    margin: 10px 0;
    padding: 10px;
  }
`;
