import { configureStore } from "@reduxjs/toolkit";
import route from "./route";
import user from "./user";
import category from "./category";

export const store = configureStore({
  reducer: { route, user, category },
});
export const { dispatch } = store;
