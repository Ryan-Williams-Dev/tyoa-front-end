import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moodsService from "./moodsService";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  moods: [],
  selectedMoods: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const get = createAsyncThunk("moods/get", async (thunkAPI) => {
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
    resetSelectedMoods: (state) => {
      state.selectedMoods = [];
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    selectMood: (state, action) => {
      state.selectedMoods.push(action.payload);
    },
    deselectMood: (state, action) => {
      const newSelected = state.selectedMoods.filter(
        (mood) => mood !== action.payload
      );
      state.selectedMoods = newSelected;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(get.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.moods = action.payload;
      })
      .addCase(get.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.moods = null;
      });
  },
});

export const { resetSelectedMoods, selectMood, deselectMood } =
  moodsSlice.actions;
export default moodsSlice.reducer;
