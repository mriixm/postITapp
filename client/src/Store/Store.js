import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Feature/UserSlice";

export const Store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
