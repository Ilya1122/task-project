import React, { useCallback, memo } from "react";

import {
  useGetUsersQuery,
  useDeleteUserMutation,
  useEditUserMutation,
} from "store/users/usersService";
import { EditUser } from "store/users/usersTypes";
import { useRedirectRoutes } from "hooks/useRedirectRoutes";

import { Loading } from "components/Loading";
import { Button } from "components/Button";
import { Table } from "components/Table";

import { Container } from "./styles";

export const Users: React.FC = memo(() => {
  const { redirectToCreateUser } = useRedirectRoutes();

  const { data, isLoading } = useGetUsersQuery({});

  const [deleteUser] = useDeleteUserMutation();
  const [editUser] = useEditUserMutation();

  const onDelete = useCallback((id: string) => deleteUser(id), [deleteUser]);

  const onEdit = useCallback(
    (id: string, values: EditUser) => editUser({ id, values }),
    [editUser]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Button onClick={redirectToCreateUser} isEdit>
        Create
      </Button>

      <Table usersList={data || []} deleteUser={onDelete} editUser={onEdit} />
    </Container>
  );
});
