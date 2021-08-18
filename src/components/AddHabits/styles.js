import styled from "styled-components";
import Background from "../../images/fundoForm.png";

export const Container = styled.form`
  height: 500px;
  width: 350px;
  background-image: url(${Background});
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

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

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    border: 0;
    background: none;
    margin: 7px auto;
    text-align: center;
    border: 2px solid #8e97fd;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  input:focus {
    width: 280px;
    border-color: #e0aaff;
  }
`;

export const ContainerButtons = styled.div`
  width: 80%;
  display: flex;
  button {
  }
`;
export const Button2 = styled.button`
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  margin-left: 1px;
  padding: 14px 33px;
  text-align: center;
  border: 2px solid #e0aaff;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  :hover {
    background: #e0aaff;
  }
`;

export const ContainerDark = styled.div``;
