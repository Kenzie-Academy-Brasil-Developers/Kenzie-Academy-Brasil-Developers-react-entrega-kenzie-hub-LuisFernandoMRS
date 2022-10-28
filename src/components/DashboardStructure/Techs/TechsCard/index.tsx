import { useContext } from "react";
import { StyledLi } from "./style";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TechsContext } from "../../../../contexts/TechsContext/TechsContext";
import { AuthenticationContext } from "../../../../contexts/UserContext/AuthContext";

export const TechsCards = (): any => {
  const { techs, deleteTech } = useContext(TechsContext);
  

  return techs.map((tech) => {
    return (
      <StyledLi key={tech.id}>
        <h2>{tech.title}</h2>
        <div>
          <p>{tech.status}</p>
          <button
            type="button"
            onClick={() => {
              deleteTech(tech.id);
            }}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </StyledLi>
    );
  });
};
