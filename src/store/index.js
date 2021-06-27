import { configureStore } from "@reduxjs/toolkit";
import { mailApi } from "./services/mailApi";
import searchReducer from './reducers';


export const store = configureStore({
  reducer: {
    search: searchReducer,
    [mailApi.reducerPath]: mailApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mailApi.middleware)
})