import { createBrowserRouter } from "react-router-dom";

import { USER_PATH } from "./route-path";

import { Users } from "pages/Users";
import { CreateUser } from "pages/CreateUser";

export const router = createBrowserRouter([
  {
    path: USER_PATH.users,
    element: <Users />,
  },
  {
    path: USER_PATH.createUser,
    element: <CreateUser />,
  },
]);
