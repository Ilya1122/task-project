import { useNavigate } from "react-router-dom";

import { USER_PATH } from "router/route-path";

interface HookReturnType {
  redirectToUsers: () => void;
  redirectToCreateUser: () => void;
}

export const useRedirectRoutes = (): HookReturnType => {
  const navigate = useNavigate();

  const redirectToUsers = (): void => navigate(USER_PATH.users);
  const redirectToCreateUser = (): void => navigate(USER_PATH.createUser);

  return {
    redirectToUsers,
    redirectToCreateUser,
  };
};
