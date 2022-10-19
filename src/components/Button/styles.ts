import styled from "styled-components";

interface ButtonProps {
  isEdit?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: ${({ isEdit }) => (isEdit ? "#4CC713" : "#e62222")};
  justify-content: center;
  color: #ffffff;

  &:hover {
    background: ${({ isEdit }) => (isEdit ? "#45a21a" : "#ff3636")};
  }

  &:disabled {
    background-color: silver;
  }
`;
