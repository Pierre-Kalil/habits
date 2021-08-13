import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 15px;
    flex-wrap: wrap;
    h1 {
      left: 22.93%;
      right: 22.6%;
      margin-bottom: 11%;
      margin-top: 11.11%;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 100%;
      line-height: 19px;
      letter-spacing: 0.24em;
      color: #000000;
      img {
        width: 18%;
        height: 18%;
        margin-bottom: 0;
      }
    }
    img {
      width: 75%;
      height: 80%;
      left: 32px;
      top: 186px;
      margin-bottom: 20%;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 30%;
      margin-bottom: 5px;
      p {
        font-family: HeadlandOne;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 108.1%;
        /* or 15px */

        letter-spacing: 0.05em;

        color: #a1a4b2;
      }
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  img {
    width: 40%;
    height: 40%;
  }
`;
export const Desktop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 80%;
  margin-top: 20px;

  img {
    width: 30vw;
    height: 23vw;
    animation: go-back 1s infinite alternate;
  }
  @keyframes go-back {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
  h1 {
    font-family: "Tourney", cursive;
    font-size: 55px;
    line-height: 100%;
  }
`;

export const ContainerDescktop = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  min-width: 150px;
  /* width: 80%; */
  margin: 5px;
  padding: 10px;
  background: #8e97fd;
  color: #fff;
  border: 0;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
`;
