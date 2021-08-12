import { Container, InputStyle, TextContainer } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Meditation = () => {
  const [cardsPrimary, setCardsPrimary] = useState([]);

  // useEffect(() => {
  //   LoadCards();
  // }, []);

  useEffect(() => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/")
      .then((response) => console.log(response.data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  console.log(cardsPrimary);

  const token = JSON.parse(localStorage.getItem("token"));

  const decode = jwt_decode(token);

  const UserID = decode.user_id;

  console.log(UserID);

  return (
    <Container>
      <h1>Meditação</h1>
      <TextContainer>
        Começamos estes primeiro dias com cerca de 10 min de prática para que
        você se familarize aos poucos com que é a meditação. Nos primeiro dias,
        os audios começam com uma breve introdução e depois podemos seguir para
        meditação guiada. Procure um local um pouco mais silencioso para
        praticar e sente de maneira confortável com as mãos sobre as coxas ou
        deite de barriga para cima com as palmas das mãos viradas para o corpo.
      </TextContainer>
      <p>
        “Ao meditar, deixe a porta da frente e a porta do fundo abertas. Deixe
        os pensamentos chegarem e partirem. Apenas não lhes sirva chá.”
      </p>

      {/* <div>
        <ul>
          {cardsPrimary &&
            cardsPrimary.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div> */}
    </Container>
  );
};

export default Meditation;
