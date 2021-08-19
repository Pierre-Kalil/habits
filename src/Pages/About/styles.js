import styled from "styled-components";

export const DevFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const DevContainer = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const MenuHeader = styled.header`
  position: sticky;
  /* top: 0; */
  background-color: var(--roxo-primario);
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 48px; */
  height: 80px;
  z-index: 2;
`;

export const ButtonFlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 320px;
  margin-right: 32px;
`;

export const TresemmeLogo = styled.img`
  width: auto;
  height: 64px;
  cursor: pointer;
  padding-top: 8px;
  padding-left: 24px;
`;

export const MenuButton = styled.button`
  width: 240px;
  height: 40px;
  margin: auto 0;
  background-color: transparent;
  border: 2px solid transparent;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  cursor: pointer;
  color: var(--background);

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
