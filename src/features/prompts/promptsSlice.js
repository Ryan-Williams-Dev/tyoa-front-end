import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import promptsService from "./promptsService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  prompts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const promptsSlice = createSlice({
  name: prompt,
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = promptsSlice.actions;
export default promptsSlice.reducer;
