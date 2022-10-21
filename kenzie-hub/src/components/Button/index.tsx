import { ReactNode } from "react";
import { StyledButton, StyledButtonExit, StyledButtonTwo } from "./style";

interface IButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ type, onClick, children }: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export const ButtonRegister = ({ type, onClick, children }: IButtonProps) => {
  return (
    <StyledButtonTwo type={type} onClick={onClick}>
      {children}
    </StyledButtonTwo>
  );
};

export const ButtonExit = ({ type, onClick, children }: IButtonProps) => {
  return (
    <StyledButtonExit type={type} onClick={onClick}>
      {children}
    </StyledButtonExit>
  );
};
