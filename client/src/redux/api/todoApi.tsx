import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Todo from "../../types/interfaces.ts";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodosByEmail: builder.query<Todo[], string>({
      query: (email) => `todos?email=${email}`,
    }),
  }),
});

export const { useGetTodosByEmailQuery } = todoApi;
