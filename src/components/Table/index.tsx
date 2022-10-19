import React, { memo } from "react";
import { IUser, EditUser } from "store/users/usersTypes";
import { TableBodyRow } from "./TableBodyRow";

import {
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderItem,
} from "./styles";

interface TableProps {
  editUser: (id: string, values: EditUser) => void;
  deleteUser: (id: string) => void;
  usersList: IUser[] | [];
}

export const Table: React.FC<TableProps> = memo(
  ({ usersList, deleteUser, editUser }) => {
    const columnName = ["Id", "Name", "Age", "About person"];

    return (
      <TableContainer>
        <TableHeader>
          <TableRow>
            {columnName.map((lebel) => (
              <TableHeaderItem key={lebel}>{lebel}</TableHeaderItem>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {usersList.map((user) => (
            <TableBodyRow
              key={user.id}
              deleteUser={deleteUser}
              editUser={editUser}
              user={user}
            />
          ))}
        </TableBody>
      </TableContainer>
    );
  }
);
