import styled from "styled-components";

export const MenuHeader = styled.header`
  position: sticky;
  background-color: var(--roxo-primario);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  position: relative;

  svg {
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 10;
    cursor: pointer;
  }

  @media (min-width: 767px) {
    height: 10vh;
    svg {
      display: none;
    }
  }
`;

export const ButtonFlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 640px;
  /* margin-right: 32px; */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TresemmeLogo = styled.img`
  width: auto;
  height: 40%;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  width: 240px;
  height: 40px;
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

export const Menuhamburguer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 45vh;
  top: 0px;
  opacity: 1;
  background: var(--roxo-primario);
  z-index: 3;
  transition: all 3s ease;

  li {
    z-index: 4;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 8px;
  }
`;