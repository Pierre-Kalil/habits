import styled from "styled-components"

export const MenuHeader = styled.header`
	position: sticky;
	top: 0;
	background-color: var(--roxo-primario);
	width: 100vw;
	display: flex;
	justify-content: space-between;
	/* margin-bottom: 48px; */
	height: 80px;
	z-index: 2;
`;

export const ButtonFlexContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 640px;
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
	width: 320px;
	height: 40px;
	margin: auto 0;
	background-color: transparent;
	border: 2px solid transparent;
	font-size: 20px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	text-align: center;
	cursor: pointer;
	color: var(--background);

	:hover{
		background-color: var(--roxo-secundario);
		border: 2px solid var(--background);
		border-radius: 16px 0 16px 16px;
	}
	:active{
		background-color: var(--caixa-de-texto);
		border: 2px solid #222222;
		color: #222222;
		border-radius: 16px 0 16px 16px;
	}
`;