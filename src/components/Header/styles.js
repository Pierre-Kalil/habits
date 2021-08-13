import styled from "styled-components"

export const MenuHeader = styled.header`
	position: sticky;
	top: 0;
	background-color: #8e97fd;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
	z-index: 2;
`;

export const ButtonFlexContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 300px;
`;


export const MenuButton = styled.button`
	width: 80px;
	height: 80px;
	margin: auto 0;
	background-color: transparent;
	border: 1px solid transparent;
	font-size: 12px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	text-align: center;
	cursor: pointer;
`;