import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: "",
  currentValue: "",
  previousValue: "",
  operation: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    numberClick(state, { payload }) {
      if (payload === "0" && state.currentValue === "0") return state;
      if (payload === "." && state.currentValue.includes(".")) return state;

      return {
        ...state,
        currentValue: state.currentValue + payload,
      };
    },

    add(state, { payload }) {
      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + payload,
        currentValue: "",
      };
    },
    sub(state, { payload }) {
      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + payload,
        currentValue: "",
      };
    },
    multi(state, { payload }) {
      return {
        operation: payload,
        ...state,
        previousValue: state.currentValue + payload,
        currentValue: "",
      };
    },
    div(state, { payload }) {
      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + payload,
        currentValue: "",
      };
    },
    equals(state) {
      state.results = eval(state.previousValue + state.currentValue);
      state.previousValue = "";
      state.currentValue = state.results;
    },
    clear(state) {
      state.previousValue = "";
      state.currentValue = "";
      state.operation = "";
      state.results = "";
    },
  },
});

export const {
  numberClick,
  clickOperationAgain,
  add,
  sub,
  multi,
  div,
  equals,
  clear,
} = calculatorSlice.actions;
// export const selectOutput = (state) => state.calculator.output;
export default calculatorSlice.reducer;
