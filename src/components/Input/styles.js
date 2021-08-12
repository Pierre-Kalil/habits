import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
;

  input {
    padding: 5px 0px 5px 10px;
    height: 35px;
    border: 1px solid purple;
    border-bottom: 3px solid;
    border-right: 3px solid;
    border-radius: 8px;
    margin: 10px auto;
  }

  input::placeholder {
    color: purple;
  }
`;
