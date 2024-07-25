import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.color || '#4e4e4e'};
  padding: 15px 30px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  width: 80px;
  border-radius: 50px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border: 0;
  transition: all 0.3s ease; 

  margin: 3px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);  
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
`;