import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moodsService from "./moodsService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  moods: [],
  selectedMoods: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const get = createAsyncThunk("moods/get", async (user, thunkAPI) => {
  try {
    return await moodsService.get();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const moodsSlice = createSlice({
  name: "moods",
  initialState,
  reducers: {
    reset: (state) => {
      state.selectedMoods = [];
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default moodsSlice.reducer;
