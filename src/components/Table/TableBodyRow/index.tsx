import React, { useState, useCallback, memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser, EditUser } from "store/users/usersTypes";
import { Button } from "components/Button";
import { Input } from "components/Input";

import { TableRow, Column, WrapperButton } from "./styles";

interface TableBodyRowProps {
  editUser: (id: string, values: EditUser) => void;
  deleteUser: (id: string) => void;
  user: IUser;
}

export const TableBodyRow: React.FC<TableBodyRowProps> = memo(
  ({ deleteUser, editUser, user }) => {
    const [isEdit, setIsEdit] = useState(true);

    const formState = useForm<EditUser>({
      defaultValues: user,
      mode: "all",
    });

    const onChangeIsEdit = useCallback(() => setIsEdit((prev) => !prev), []);

    const onDelete = useCallback(
      () => deleteUser(user.id),
      [deleteUser, user.id]
    );

    const onEdit: SubmitHandler<EditUser> = async (values) => {
      onChangeIsEdit();

      await editUser(user.id, values);
    };

    return (
      <TableRow>
        <Column>{user.id}</Column>

        <Column>
          <Input formState={formState} isEdit={isEdit} name="name" />
        </Column>

        <Column>
          <Input formState={formState} isEdit={isEdit} name="age" />
        </Column>

        <Column>
          <Input formState={formState} isEdit={isEdit} name="aboutPerson" />
        </Column>

        <Column>
          <WrapperButton>
            {isEdit ? (
              <>
                <Button onClick={onChangeIsEdit} isEdit>
                  Edit
                </Button>

                <Button color="blue" onClick={onDelete}>
                  Delete
                </Button>
              </>
            ) : (
              <>
                <Button
                  disabled={!formState.formState.isValid}
                  onClick={formState.handleSubmit(onEdit)}
                  isEdit
                >
                  Save
                </Button>

                <Button
                  disabled={!formState.formState.isValid}
                  onClick={onChangeIsEdit}
                  color="blue"
                >
                  Cancel
                </Button>
              </>
            )}
          </WrapperButton>
        </Column>
      </TableRow>
    );
  }
);
