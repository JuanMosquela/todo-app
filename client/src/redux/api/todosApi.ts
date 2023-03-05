import Todo from "../../types/interfaces.ts";
import { emptyApi } from "./emptyApi";

const authApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodosByEmail: builder.query<Todo[], string>({
      query: (email) => `todos?email=${email}`,
    }),
  }),
});

export const { useGetTodosByEmailQuery } = authApi;
