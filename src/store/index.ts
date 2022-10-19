import { configureStore } from "@reduxjs/toolkit";

import { usersService } from "store/users/usersService";

export const store = configureStore({
  reducer: {
    [usersService.reducerPath]: usersService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(usersService.middleware),
});
