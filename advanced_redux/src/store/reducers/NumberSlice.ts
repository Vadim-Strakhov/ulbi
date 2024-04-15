import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumberState {
  count: number;
}

const initialState: NumberState = {
  count: 0,
};

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});

export default numberSlice.reducer;
