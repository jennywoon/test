import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    instas: [],
    isLoading: false,
    error: null,
    // comments: [],
  };

//   export const __getMovies = createAsyncThunk("movies/getMovies", async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(`${API_MOVIES}/board`);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   });

export const InstaSlice = createSlice({
    name: "instas",
    initialState,
    reducers: {},
    extraReducers: {}
})

export const {} = InstaSlice.actions;
export default InstaSlice.reducer;
