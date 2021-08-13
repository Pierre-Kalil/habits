import styled from 'styled-components'

export const Container = styled.div `
    height: 250px;
    width: 250px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        height: 40px;
    }
`

export const ContainerInfos = styled.div `
    width: 90%;
    height: 150px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 25px;
`

export const ContainerButtons = styled.div `
    display: flex;
    width: 90%;
    height: 40px;
`
