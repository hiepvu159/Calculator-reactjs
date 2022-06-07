import { configureStore } from "@reduxjs/toolkit";

import calculatorReducer from "./calSlice";

const store = configureStore({ reducer: calculatorReducer });
export default store;
