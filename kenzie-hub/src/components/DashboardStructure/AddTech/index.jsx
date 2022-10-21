import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { AuthenticationContext } from "../../../contexts/UserContext/AuthContext";
import { StyledTitleHTwo } from "../../../styles/typography";
import { StyledContAddTech } from "./style";
export const AddTech = () => {
  const { setCurrentModal } = useContext(AuthenticationContext);
  return (
    <StyledContAddTech>
      <StyledTitleHTwo fontSize={24} color={`${"var(--grey-0)"}`}>
        Tecnologias
      </StyledTitleHTwo>
      <button
        type="button"
        onClick={() => {
          setCurrentModal(true);
        }}
      >
        <FiPlus />
      </button>
    </StyledContAddTech>
  );
};
