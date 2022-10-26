import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: var(--grey-2);
  height: 50px;
  border: none;
  /* border: 0.9px solid var(--grey-0); */
  color: var(--grey-0);
  border-radius: 3px;

  ::placeholder {
    padding-left: 15px;
    color: var(--grey-0);
  }
`;
