import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: var(--grey-0);

  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  line-height: 26px;

  border-radius: 4px;
  height: 50px;

  &:hover {
    background-color: var(--color-primary-Focus);
    transition: 1s ease;
  }

  &:active {
    background-color: var(--color-primary-Negative);
    border: 1px solid var(--color-primary-Negative);
  }
`;

export const StyledButtonTwo = styled(StyledButton)`
  background-color: var(--color-primary-Negative);
  border: 1px solid var(--color-primary-Negative);
`;

export const StyledButtonExit = styled.button`
  width: 79px;
  height: 31px;
  border-radius: 4px;

  border: 1px solid var(--grey-3);

  background-color: var(--grey-3);
  color: var(--grey-0);

  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
    transition: 0.5s ease;
  }
`;
