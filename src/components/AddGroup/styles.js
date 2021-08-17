import styled from "styled-components";
import Background from "../../images/fundoForm.png";

export const Container = styled.form`
  height: 330px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-image: url(${Background});

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
  }
`;
