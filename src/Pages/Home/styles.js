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

export const Desktop = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;
