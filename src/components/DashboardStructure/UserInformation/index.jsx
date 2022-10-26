import { useContext } from "react";
import { AuthenticationContext } from "../../../contexts/UserContext/AuthContext";
<<<<<<< HEAD

=======
>>>>>>> e6e84c6a0e1c32f8dadef53c6b1b9dff7d67dc4a
import { StyledHeadline, StyledTitleOne } from "../../../styles/typography";

export const UserInformation = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      <>
        <StyledTitleOne fontSize={24} color={`${"var(--grey-0)"}`}>
          Olá, {user.name}
        </StyledTitleOne>
        <StyledHeadline fontSize={12} color={`${"var(--grey-1)"}`}>
          {user.course_module}
        </StyledHeadline>
      </>
    </div>
  );
};
