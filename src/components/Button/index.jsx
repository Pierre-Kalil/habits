import { StyledButton } from "./styles";

const Button = ({ callback, children }) => {
  return <StyledButton onClick={callback}> {children} </StyledButton>;
};

export default Button;
