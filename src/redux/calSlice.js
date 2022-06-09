import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overwrite: false,
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
      if (state.overwrite) {
        return {
          ...state,
          currentValue: payload,
          overwrite: false,
        };
      }
      return {
        ...state,
        currentValue: state.currentValue + payload,
      };
    },

    add(state, { payload }) {
      const history = () =>
        state.operation !== ""
          ? state.previousValue.substring(0, state.previousValue.length - 1)
          : state.previousValue;

      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + history() + payload,
        currentValue: "",
      };
    },
    sub(state, { payload }) {
      const history = () =>
        state.operation !== ""
          ? state.previousValue.substring(0, state.previousValue.length - 1)
          : state.previousValue;

      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + history() + payload,
        currentValue: "",
      };
    },
    multi(state, { payload }) {
      const history = () =>
        state.operation !== ""
          ? state.previousValue.substring(0, state.previousValue.length - 1)
          : state.previousValue;

      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + history() + payload,
        currentValue: "",
      };
    },
    div(state, { payload }) {
      const history = () =>
        state.operation !== ""
          ? state.previousValue.substring(0, state.previousValue.length - 1)
          : state.previousValue;

      return {
        ...state,
        operation: payload,
        previousValue: state.currentValue + history() + payload,
        currentValue: "",
      };
    },
    equals(state) {
      state.results = eval(state.previousValue + state.currentValue);
      state.previousValue = "";
      state.currentValue = state.results;
      state.overwrite = true;
    },
    clear(state) {
      state.previousValue = "";
      state.currentValue = "";
      state.operation = "";
      state.results = "";
    },
  },
});

export const { numberClick, add, sub, multi, div, equals, clear } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
