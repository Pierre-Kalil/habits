import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 500px){
        
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        width: 500px;
    }
    @media screen and (min-width: 1000px){
        
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        width: 1000px;
    }
`