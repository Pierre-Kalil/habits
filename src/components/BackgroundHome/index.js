import { BackGroundH } from "./styles";
import Clouds from "../../images/Clouds.png";
import habits from "../../images/habits.jpg";
import habits2 from "../../images/habits2.png";

const HomeBackground = () => {
  return (
    <BackGroundH>
      <img src={habits2} alt="background-home"></img>
    </BackGroundH>
  );
};

export default HomeBackground;
