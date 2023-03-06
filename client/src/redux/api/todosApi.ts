import Todo from "../../types/interfaces.ts";
import { emptyApi } from "./emptyApi";

const authApi = emptyApi
  .enhanceEndpoints({ addTagTypes: ["Todo"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTodosByEmail: builder.query({
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
      updateTodo: builder.mutation({
        query: ({ id, ...rest }) => ({
          url: `/todos/${id}`,
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["Todo"],
      }),
      deleteTodo: builder.mutation({
        query: (id) => ({
          url: `/todos/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Todo"],
      }),
    }),
  });

export const {
  useGetTodosByEmailQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = authApi;
