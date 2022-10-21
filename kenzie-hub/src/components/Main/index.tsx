import { ReactNode } from "react";
import { StyledMain } from "./style";
interface IMainProps {
  children: ReactNode;
}
export const Main = ({ children }: IMainProps) => {
  return <StyledMain>{children}</StyledMain>;
};
