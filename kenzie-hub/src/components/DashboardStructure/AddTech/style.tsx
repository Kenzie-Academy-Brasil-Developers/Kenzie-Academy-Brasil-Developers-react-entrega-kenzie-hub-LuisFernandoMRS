import styled from "styled-components";

export const StyledContAddTech = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
  padding: 40px 0px;
  button {
    border: none;
    font-size: 20px;
    width: 32px;
    height: 32px;
    color: white;
    background-color: var(--grey-3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: 1px solid var(--grey-2);
      background-color: var(--grey-2);
      scale: 1.3;
      transition: 0.5s ease;
    }
  }
`;
