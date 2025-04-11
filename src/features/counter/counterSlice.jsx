import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,  // Initial state
};

export const counterSlice = createSlice({
  name: "counter",  // The name of the slice
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;  // Incrementing the count
    },
    dec: (state) => {
      state.count -= 1;  // Decrementing the count
    },
  },
});

export const { inc, dec } = counterSlice.actions;  // Export actions
export default counterSlice.reducer;  // Export the reducer
