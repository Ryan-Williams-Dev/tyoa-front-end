import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import promptsReducer from "../features/prompts/promptsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    prompts: promptsReducer,
  },
});
