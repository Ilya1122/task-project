import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { EditUser } from "store/users/usersTypes";
import { Button } from "components/Button";

import { Container, WrapperButton, Title } from "./styles";

interface FormProps {
  formState: UseFormReturn<EditUser>;
  onSubmit: SubmitHandler<EditUser>;
  children: JSX.Element[];
  goBack: () => void;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  goBack,
  formState,
  children,
}) => (
  <Container>
    <Title>Create User</Title>

    {children}

    <WrapperButton>
      <Button
        onClick={formState.handleSubmit(onSubmit)}
        disabled={!formState.formState.isValid}
        isEdit
      >
        Create
      </Button>

      <Button onClick={goBack}>Cancel</Button>
    </WrapperButton>
  </Container>
);
