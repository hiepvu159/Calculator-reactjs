import { configureStore } from "@reduxjs/toolkit";

import calculatorSlice from "./calSlice";

const store = configureStore({ reducer: calculatorSlice });
