import { useContext } from "react";
import { AuthenticationContext } from "../../../contexts/UserContext/AuthContext";
import { ModalRegisterTech } from "../../Modal/RegisterTech";
import { AddTech } from "../AddTech";
import { ListTechs } from "../Techs/ListTechs";

import { StyledMain } from "./style";

export const AllStructureDashbord = () => {
  const { currentModal } = useContext(AuthenticationContext);
  return (
    <StyledMain>
      {currentModal && <ModalRegisterTech />}
      <AddTech />
      <ListTechs />
    </StyledMain>
  );
};
