import { Img } from "../Imagem";
import { StyledNav } from "./style";
import LogoHub from "../../assests/LogoHub.svg";
import { ButtonExit } from "../Button";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/UserContext/AuthContext";
export const Nav = () => {
  const { userLogout } = useContext(AuthenticationContext);
  return (
    <StyledNav>
      <div>
        <Img src={LogoHub} width={130} alt={"Logo kenzie hub"} />
        <ButtonExit type={"button"} onClick={() => userLogout()}>
          Sair
        </ButtonExit>
      </div>
    </StyledNav>
  );
};
