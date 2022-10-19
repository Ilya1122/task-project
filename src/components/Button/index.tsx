import React, { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
  isEdit?: boolean;
}

export const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ isEdit, ...rest }) => <StyledButton isEdit={isEdit} {...rest} />;
