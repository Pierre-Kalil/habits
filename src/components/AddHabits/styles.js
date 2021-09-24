import styled from "styled-components";
import Background from "../../images/fundoForm.png";

export const Container = styled.form`
  /* height: 500px; */
  width: 100vw;
  background-image: url(${Background});
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px;
  height: 85vh;
  z-index: 999;
  @media screen and (min-width: 500px) {
    border-radius: 24px;
    height: 500px;
    width: 350px;
  }

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
  z-index: 999;
  margin-top: 20px;

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
    font-size: 15px;
  }
  input:focus {
    width: 280px;
    border-color: #e0aaff;
  }
  input::placeholder {
    color: #fff;
  }
`;

export const ContainerButtons = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  button + button {
    margin-left: 5px;
  }
`;
export const Button2 = styled.button`
  border: 0;
  background: none;
  display: block;
  margin: 13px auto;
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

export const ContainerDark = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    height: 90vh;
  }
`;
