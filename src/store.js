import { configureStore } from "@reduxjs/toolkit";
import * as api from './api';
import { themeReducer } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countriesReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countriesReducer,
        details: detailsReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
})