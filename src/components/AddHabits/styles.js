import styled from "styled-components"

export const Container = styled.form `
    height: 400px;
    width: 350px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    h3{
        padding: 10px;
        text-align: center;
    }
`

export const ContainerInputs = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input{
        height: 40px;
        width: 80%;
        margin-bottom: 10px;
        ::placeholder{
            font-size: 10px;
        }
    }
    
`

export const ContainerButtons = styled.div `
    width: 80%;
    display: flex;    
`