import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100vw;
  height: 100%;
  padding-bottom: 100px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  height: 935px;
  background-color: var(--grey-3);
  box-shadow: 0px 3px 32px -8px rgb(0 0 0 / 25%);
  border-radius: 3px;
  max-width: 500px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 45px;
  }
`;

export const StyledDivLogoLink = styled.div`
  width: 80%;
  height: 80px;
  max-width: 500px;

  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 27px 0;

  img {
    width: 110px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 79px;
  height: 31px;
  border-radius: 4px;

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

export const StyledSelect = styled.select`
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
