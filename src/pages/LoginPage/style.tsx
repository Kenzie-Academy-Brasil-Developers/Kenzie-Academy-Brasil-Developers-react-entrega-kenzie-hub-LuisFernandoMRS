import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100vw;

  img {
    padding-bottom: 30px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  height: 550px;

  background: #212529;
  box-shadow: 0px 3px 32px -8px rgb(0 0 0 / 25%);
  border-radius: 3px;
  max-width: 500px;

  h1 {
    padding-top: 35px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: var(--grey-0);
  background-color: var(--grey-1);
  border: 1px solid var(--grey-1);

  font-family: "Inter";
  font-style: normal;

  border-radius: 4px;
  font-size: 16px;
  line-height: 26px;
  height: 50px;
  width: 100%;

  &:hover {
    background-color: var(--grey-2);
    transition: 1s ease;
  }
`;

export const StyledDivLinkMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 25px;
  padding-top: 15px;
`;
