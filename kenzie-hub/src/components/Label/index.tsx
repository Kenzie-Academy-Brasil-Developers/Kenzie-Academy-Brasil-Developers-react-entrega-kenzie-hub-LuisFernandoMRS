import { ReactNode } from "react";
import { StyledLabel } from "./style";
interface ILabelProps {
  htmlFor?: string | undefined;
  children: ReactNode;
}
export const Label = ({ htmlFor, children }: ILabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
