import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { EditUser } from "store/users/usersTypes";
import { StyledInput } from "./styles";

interface InputProps {
  formState: UseFormReturn<EditUser>;
  name: keyof EditUser;
  isEdit?: boolean;
  placeholder?: string;
}
export const Input: React.FC<InputProps> = ({
  formState,
  isEdit,
  name,
  placeholder,
}) => (
  <Controller
    name={name}
    control={formState.control}
    rules={{ required: true }}
    render={({ field }) => (
      <StyledInput {...field} readOnly={isEdit} placeholder={placeholder} />
    )}
  />
);
