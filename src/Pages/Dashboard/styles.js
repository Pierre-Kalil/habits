import styled from "styled-components";
import ImageGroup1 from "../../images/ImageGroup1.png";
import ImageGroup2 from "../../images/ImageGroup2.png";

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

export const ContainerDesktop = styled.div`
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
        font-size: 48px;
        font-family: 'Calibri';
    }
`

export const BoxContainerDesktopHabits = styled.div`


    background-color: var(--background);
    background-size: contain;
    background-image: url(${ImageGroup1});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 280px;
    border: solid var(--roxo-secundario);
    border-radius: 16px;
    border: 2px 8px 8px 2px;
    font-size: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

    &:hover{
        background-color: var(--caixa-de-texto);
    }


`

export const BoxContainerDesktopGroups = styled.div`


    background-color: var(--background);
    background-size: contain;
    background-image: url(${ImageGroup2});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 280px;
    border: solid var(--roxo-secundario);
    border-radius: 16px;
    border: 2px 8px 8px 2px;
    font-size: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

    &:hover{
        background-color: var(--caixa-de-texto);
    }


`

export const OptionsContainerDesktop = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 90%;


    div {
        div{
            width:400px;
            p{
                font-family: 'Arial';
                font-size: 18px;
                padding: 8px;
                span{
                    color: var(--roxo-secundario);
                    font-style: italic;
                    text-shadow: 0px 4px 4px rgba(0,0,0,0.33);
                }
            }
        }
    }

    a {
        color: var(--roxo-secundario);
        text-decoration: none;
        text-align: center;
        /* font-size: 2.5rem; */
        text-shadow: 0px 4px 4px rgba(0,0,0,0.67);
		font-family: "Calibri";
    }

    figure{
        img{
            height: 200px;
            width: 200px;
        }
    }

`