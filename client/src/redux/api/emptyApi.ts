import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-app-iz14.onrender.com/api",
  }),

  endpoints: () => ({}),
});
