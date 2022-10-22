import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 85px;
  color: #fff;
  border-bottom-style: outset;
  border-top-style: inset;
  border-bottom-color: var(--grey-3);
  border-top-color: var(--grey-3);
  position: relative;
  top: 100px;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
  }
`;
