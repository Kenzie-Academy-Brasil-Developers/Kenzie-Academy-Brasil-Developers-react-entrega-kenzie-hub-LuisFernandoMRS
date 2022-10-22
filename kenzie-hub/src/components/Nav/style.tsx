import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 100px;

  position: fixed;
  z-index: 10;
  background-color: var(--grey-4);

  width: 100%;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
