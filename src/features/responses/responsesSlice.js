import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import responsesService from "./responsesService";

const initialState = {
  response: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createResponse = createAsyncThunk(
  "responses/create",
  async (responseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await responsesService.createResponse(responseData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getResponse = createAsyncThunk(
  "responses/get",
  async (selectedMoods, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await responsesService.getResponse(selectedMoods, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const responsesSlice = createSlice({
  name: "responses",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // createResponse cases
      .addCase(createResponse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createResponse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(createResponse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // getResponse cases
      .addCase(getResponse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResponse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.response = action.payload;
      })
      .addCase(getResponse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = responsesSlice.actions;
export default responsesSlice.reducer;
