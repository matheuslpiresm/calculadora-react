import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;

  input {
    width: 100%;
    height: 75px;
    background-color: #222222;
    border: 0;
    display: flex;
    padding: 5px 10px;
    flex-direction: column;
    align-items: flex-end;
    color: #fff;
    font-size: 24px;
    border-radius: 20px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    transition: all 0.3s ease; 
    font-weight: 700;

    &:focus {
      outline: none;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
    }
  }
`;