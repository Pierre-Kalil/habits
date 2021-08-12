import styled from 'styled-components';


export const Back = styled.button`
    position: absolute;
    width: 55px;
    height: 55px;
    left: 20px;
    top: 30px;
    background: none;
    border: none;
    border-radius: 50%;
    &:hover {
        background-color: gray;
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    
`;