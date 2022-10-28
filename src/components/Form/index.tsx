import { ReactNode } from "react";
import { StyledForm } from "./style";
interface IFormProps {
  children: ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}
export const Form = ({ children, onSubmit }: IFormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
