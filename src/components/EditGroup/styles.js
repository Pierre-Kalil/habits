import styled, { css } from "styled-components";
import clouds5 from "../../images/clouds5.png";

export const Container = styled.form `
    height: 320px;
    width: 350px;
    background-image: url(${clouds5});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    border-radius: 8px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    h4{
        padding: 10px;
        text-align: center;
        font-family:'Calibri';
        color:var(--background);
        font-size: 24px;
    }
`


export const InputContainerGroup = styled.div`
/* background: var(--background); */
border-radius: 8px;
margin-top: 16px;
border: 1px solid var(--roxo-secundario);
color: var(--roxo-secundario);
border:0;
padding: 4px;
width: 100%;
display: flex;
flex-direction: column;
transition: 0.4s;
background-color: var(--roxo-secundario);

border-bottom: 4px solid var(--roxo-secundario);
border-right: 4px solid var(--roxo-secundario);

${props => props.isErrored && css`
border-color: red;
svg {
  color: red;
}
`}

input {
  /* background: transparent; */
  align-items: center;
  font-size: 16px;
  border: solid var(--roxo-secundario);
  border-radius: 8px;
  padding: 5px 0px 5px 10px;
  flex: 1;
  border: 0;
  color: var(--roxo-terciario);
  /* padding-left: 8px; */
  height:32px;
}
  input::placeholder {
    color: var(--roxo-secundario);
    font-size: 16px;
  }

svg {
  margin-top: 4px;
}
`;