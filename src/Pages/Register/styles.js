import styled, { keyframes, css } from 'styled-components'
import tresmLogowhite from "../../images/tresmLogowhite.png"

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items:  stretch;
`;

export const Background = styled.div`
	@media (min-width: 1100px) {
		flex: 1;
		background: url(${tresmLogowhite}) no-repeat center, var(--roxo-secundario);
		background-color: var(--roxo-secundario);
		background-size: 480px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 700px;
`;

const appearFromRight = keyframes`
	from {
		opacity: 0;
		transform: translateX(50px)
	}
	to {
		opacity: 1;
		transform: translateX(0px)
	}
`;

export const AnimationContainer = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${appearFromRight} 1s;

	form{
		margin: 80px 0;
		width: 340px;
		text-align: center;
		

		h1 {
			margin-bottom: 32px;
			text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
			font-size: 2.5rem;
			font-family: "Calibri";

		}

		> div {
			margin-top: 16px;
		}

		p {
			margin-top: 24px;

			a {
				font-weight: bold;
				color: var(--roxo-secundario);
				text-decoration: none;

			}
		}
	}
`;

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

export const HomeFooter = styled.footer`
  padding: 10px;
  position: fixed;
  bottom: 0;
  margin-left: 0;
  margin-right: 0;
  width: 100vw;
  text-align: center;
  font-size: 12px;
`;