import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  output: "",
};

const counterSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    numberClick(state, { payload }) {
      return {
        ...state,
      };
    },
  },
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
