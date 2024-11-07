import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled = false, onClick, }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled = {false}>{title}</ButtonContainer>;
};

export default Button;
