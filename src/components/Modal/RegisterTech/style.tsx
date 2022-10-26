import styled from "styled-components";

export const StyledModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-1);
`;

export const StyledDiv = styled.div`
  width: 80%;
  max-width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background: #343b41;
    border-radius: 3.20867px 3.20867px 0px 0px;

    button {
      border: none;
      background-color: transparent;
      color: white;
      width: 24px;
      height: 24px;
      font-size: 20px;

      &:hover {
        scale: 1.2;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 15px;
    background: #212529;
    box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }
`;

export const StyledRegisterTech = styled.button`
  width: 100%;
  height: 40px;
  background-color: red;
`;
export const StyledSelect = styled.select`
  background-color: var(--grey-2);
  height: 50px;

  border: 0.9px solid var(--grey-0);
  color: var(--grey-0);
  border-radius: 3px;

  ::placeholder {
    padding-left: 15px;
    color: var(--grey-0);
  }
`;
