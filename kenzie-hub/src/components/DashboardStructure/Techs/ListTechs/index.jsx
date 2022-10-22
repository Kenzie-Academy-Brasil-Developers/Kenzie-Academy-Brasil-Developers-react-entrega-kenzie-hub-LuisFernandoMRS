import { useContext, useEffect } from "react";
import { TechsContext } from "../../../../contexts/TechsContext/TechsContext";
import { LandingPage } from "../../LandingPage";
import { TechsCards } from "../TechsCard";
import { StyledUl } from "./style";

export const ListTechs = () => {
  const { techs } = useContext(TechsContext);
  const { searchUserData } = useContext(TechsContext);
  useEffect(() => {
    searchUserData();
  }, [techs]);
  return (
    <>
      {!techs ? (
        <LandingPage />
      ) : (
        <StyledUl>
          <TechsCards />
        </StyledUl>
      )}
    </>
  );
};
