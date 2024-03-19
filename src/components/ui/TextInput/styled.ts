import { styled } from "styled-components";

export const StyledInput = styled.input`
  padding: 8px;
  border: 2px solid #EBEBEB;
  border-radius: 1px;
  background-color: #F2F2F2;

  ::placeholder {
    color: red;
    opacity: 1;
  }
  &:focus {
    outline-color: #2C9DDB;
  }
`;
