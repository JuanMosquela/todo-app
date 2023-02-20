import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api/todoApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
