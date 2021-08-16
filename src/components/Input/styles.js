import styled, { css } from "styled-components";

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
	font-size:20px;
	margin-top:10px;
	div {
		span{
			color: var(--red);
		}
	}
`;

  /* input {
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
  } */


  export const InputContainer1 = styled.div`
    background: var(--background);
    border-radius: 10px;
    border: 2px solid var(--roxo-secundario);
    color: var(--roxo-secundario);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;

    border-bottom: 6px solid var(--roxo-secundario);
    border-right: 6px solid var(--roxo-secundario);

    ${props => props.isErrored && css`
    border-color: var(--red);
    svg {
      color: var(--red);
    }
    `}

    input {
      /* background: transparent; */
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

    svg {
      margin-right: 1
    }
  `;
