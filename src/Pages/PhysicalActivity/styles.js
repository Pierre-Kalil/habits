import styled from "styled-components"

export const ContainerMobile = styled.div `
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        height: 5vh;
        text-align: center;
        margin-bottom: 10px;
    }
    button{
        margin-bottom: 10px;
        height: 5vh;
        width: 150px;
        background-color: pink;
        border-radius: 10px;
    }
`

export const ContainerMobileDescription = styled.div `
    padding: 15px;
    text-align: justify;

`

export const ContainerMobileImages = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 40vh;
    figure{
        width: 160px;
        img{
            height: 85px;
            width: 160px;
        }
        figcaption{
            font-size: 11px;
            text-align: center;
        }
    }
`


// DESKTOP

export const Header = styled.div `
    height: 10vh;
    width: 100%;
    background-color: blue;
`

export const ContainerDesktop = styled.div `
    height: 100vh;
    background-color: white;
    @media screen and (min-width: 1200px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }
`

export const ContainerDesktopTitle = styled.div `
    height: 10vh;
    width: 100vw;
    display: flex;
    
    h1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 1200px){
        width: 1200px;
    }
`

export const ContainerDesktopDescription = styled.div `
    height: 25vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 80%;
        height: 20vh;
        background-color: purple;

        display: flex;
        justify-content: center;
        align-items: center;
        p{

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 25px;
            height: 150px;

            text-align: justify;
            font-size: 25px;
        }
    }
    @media screen and (min-width: 1200px){
        width: 1200px;
    }
`

export const ContainerDescktopButton = styled.div`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        height: 40px;
        width: 150px;
        border-radius: 10px;
        background-color: pink;
    }
    @media screen and (min-width: 1200px){
        width: 1200px;
    }
`

export const ContainerDesktopImages = styled.div `
    height: 50vh;
    
    display: flex;
    justify-content: space-around;

    padding-top: 50px;
    
    figure{
        width: 20vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        figcaption{
            margin-top: 10px;
            text-align: center;
        }
        img{
        height: 120px;
        width: 200px;
        }
    }
    @media screen and (min-width: 1200px){
        width: 1000px;
    }

`