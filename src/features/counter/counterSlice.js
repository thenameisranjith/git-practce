import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "",
};
console.log("called", name);

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = initialState.value;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { increment, decrement, reset, changeName } = counterSlice.actions;
export default counterSlice.reducer;
