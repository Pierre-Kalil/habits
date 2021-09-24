import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 15px;
    flex-wrap: wrap;
    h1 {
      left: 22.93%;
      right: 22.6%;
      margin-bottom: 11%;
      margin-top: 11.11%;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 100%;
      line-height: 19px;
      letter-spacing: 0.24em;
      color: #000000;
      img {
        width: 18%;
        height: 18%;
        margin-bottom: 0;
      }
    }
    img {
      width: 75%;
      height: 80%;
      left: 32px;
      /* top: 186px; */
      margin-bottom: 20%;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 30%;
      margin-bottom: 5px;
      p {
        padding: 5px;
        font-family: HeadlandOne;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 108.1%;
        /* or 15px */

        letter-spacing: 0.05em;

        color: #a1a4b2;
      }
    }
  }
`;

export const Logo = styled.div`
  /* position: absolute; */
  img {
    width: 40%;
    height: 40%;
  }
`;
export const Desktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  img {
    width: 300px;
    height: 300px;
    animation: go-back 1s infinite alternate;
  }
  @keyframes go-back {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const DesktopTitle = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-family: "Helvetica";
    font-size: 45px;
    line-height: 100%;
    padding-bottom: 10px;
  }

  h2 {
    color: var(--roxo-primario);
    padding-bottom: 10px;
  }
`;

export const DesktopButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const HomeBackground = styled.div`
  display: flex;

  img {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -2;
  }
`;

export const ContainerDescktop = styled.div`
  /* height: 90vh; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ContainerDescription = styled.div`
  /* position: absolute; */
  img {
    margin-top: 144px;
    width: 360px;
    height: 360px;
    margin-right: 64px;
  }
`;

export const StyledButton = styled.button`
  min-width: 150px;
  margin: 5px;
  width: 240px;
  height: 56px;
  background: var(--roxo-primario);
  color: var(--background);

  border: 2px solid var(--roxo-secundario);
  border-radius: 4px;
  align-items: center;
  cursor: pointer;

  font-size: 32px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 16px 0 16px 16px;

  :hover {
    background-color: var(--roxo-secundario);
    border: 2px solid var(--background);
    border-radius: 16px 0 16px 16px;
  }
  :active {
    background-color: var(--caixa-de-texto);
    border: 2px solid #222222;
    color: #222222;
    border-radius: 16px 0 16px 16px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    width: 300px;
    text-align: center;

    h1 {
      margin-top: 10px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
