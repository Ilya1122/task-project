import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "constants/index";

import { IUser, EditUser } from "./usersTypes";

export const usersService = createApi({
  reducerPath: "users",
  tagTypes: ["USERS"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], unknown>({
      query: () => ({
        url: "users",
        method: "GET",
      }),

      providesTags: ["USERS"],
    }),

    createUser: builder.mutation<unknown, EditUser>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),

      invalidatesTags: ["USERS"],
    }),

    editUser: builder.mutation<unknown, { id: string; values: EditUser }>({
      query: ({ id, values }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: values,
      }),

      invalidatesTags: ["USERS"],
    }),

    deleteUser: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["USERS"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useEditUserMutation,
  useCreateUserMutation,
} = usersService;
