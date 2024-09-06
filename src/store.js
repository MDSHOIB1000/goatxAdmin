import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice/auth";
// import filtersReducer from "../features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    auth: todosReducer,
  },
});
