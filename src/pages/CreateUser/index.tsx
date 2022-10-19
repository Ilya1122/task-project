import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCreateUserMutation } from "store/users/usersService";
import { EditUser } from "store/users/usersTypes";
import { useRedirectRoutes } from "hooks/useRedirectRoutes";

import { Loading } from "components/Loading";
import { Form } from "components/Form";
import { Input } from "components/Input";

import { Container } from "./styles";

export const CreateUser: React.FC = () => {
  const { redirectToUsers } = useRedirectRoutes();

  const formState = useForm<EditUser>({
    defaultValues: {
      name: "",
      age: 0,
      aboutPerson: "",
    },

    mode: "all",
  });

  const [create, { isLoading }] = useCreateUserMutation();

  const inputsName = ["name", "age", "aboutPerson"];

  const onSubmit: SubmitHandler<EditUser> = async (values) => {
    try {
      await create(values);

      redirectToUsers();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} formState={formState} goBack={redirectToUsers}>
        {inputsName.map((input) => (
          <Input
            name={input as keyof EditUser}
            placeholder={input}
            formState={formState}
            key={input}
          />
        ))}
      </Form>
    </Container>
  );
};
