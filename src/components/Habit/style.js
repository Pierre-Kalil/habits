import styled from 'styled-components'

export const Container = styled.div `
    height: 250px;
    width: 250px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--gradiente);
    color: white;
    border-radius: 30px;
    h1{
        height: 40px;
    }
`

export const ContainerInfos = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 150px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 5px;
    h4{
        margin-bottom: 4px;
        margin-top: 4px;
    }
`

export const ContainerButtons = styled.div `
    display: flex;
    width: 90%;
    height: 40px;
    button + button {
        margin-left: 6px;
    }
`
