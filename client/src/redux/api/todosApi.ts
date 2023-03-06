import Todo from "../../types/interfaces.ts";
import { emptyApi } from "./emptyApi";

const authApi = emptyApi
  .enhanceEndpoints({ addTagTypes: ["Todo"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTodosByEmail: builder.query<Todo[], string>({
        query: (email) => `todos?email=${email}`,
        providesTags: ["Todo"],
      }),
      createTodo: builder.mutation({
        query: (body) => ({
          url: "/todos",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Todo"],
      }),
    }),
  });

export const { useGetTodosByEmailQuery, useCreateTodoMutation } = authApi;
