import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-4);
  border-radius: 4.06066px;
  padding: 23px;

  &:hover {
    background-color: var(--grey-2);
    scale: 1.03;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 30px;

    button {
      background-color: transparent;
      border: none;
      width: 24px;
      height: 24px;
      color: white;
      font-size: 23px;

      &:hover {
        scale: 1.3;
      }
    }
  }
`;