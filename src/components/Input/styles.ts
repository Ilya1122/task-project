import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  resize: none;
  border: 1px solid #000;
  outline: none;
  padding: 10px 15px;
  text-align: center;

  &:read-only {
    border: none;
  }
`;
