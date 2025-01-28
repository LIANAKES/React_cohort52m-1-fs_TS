
import { MainButton } from "./styles";

interface MainButtonProps {
  name?: string; 
  type?: "submit" | "button" | "reset"; 
  onClick?: () => void; 
  disabled?: boolean; 
}

const Button = ({ name = "SEND", type = "button", onClick, disabled = false }: MainButtonProps) => {
  return (
    <MainButton type={type} onClick={!disabled ? onClick : undefined} disabled={disabled}>
      {name}
    </MainButton>
  );
};

export default Button;