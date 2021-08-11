import styled from "styled-components"

export const ContainerMobile = styled.div `
    height: 90vh;
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 15vh;
    }

    h4{
        color: gray;
        text-align: center;
    }

    img{
        height: 100px;
        width: 100px;
    }
`

export const BoxContainerMobile = styled.div `
    height: 30vh;
    background-color: blue;
    border: 2px solid black;
    width: 80vw;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const OptionsContainerMobile = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 65vh;
    
`

// DESKTOP

export const ContainerDescktop = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerTitle = styled.div`
    width: 90%;
    display: flex;
    height: 15vh;
    figure{
        width: 20%;
    }
    h1{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const BoxContainerDescktop = styled.div`
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 35vh;

    font-size: 30px;
`

export const OptionsContainerDescktop = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 90%;

    figure{
        img{
            height: 200px;
            width: 200px;
        }
    }
`