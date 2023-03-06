import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),

  endpoints: () => ({}),
});
