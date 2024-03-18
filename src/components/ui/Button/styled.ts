import { styled } from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 8px;
  width: 100%;
  background-color: #2C9DDB;
  border: none;
  color: #FFFFFF;
  &:disabled {
    color: gray;
    background-color: lightgray;
  }
`;
