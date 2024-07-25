import { ButtonContainer } from "./styles";

const Button = ({ label, color, onClick }) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
