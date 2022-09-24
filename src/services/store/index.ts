import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataAPI } from "../api/data";
import newsReducer from "../slices/news";
import journalReducer from "../slices/journal";

export const rootReducer = combineReducers({
  news: newsReducer,
  journal: journalReducer,
  [dataAPI.reducerPath]: dataAPI.reducer,
});

export const index = configureStore({
  reducer: rootReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([dataAPI.middleware]),
  devTools: process.env.NODE_ENV === "development",
  preloadedState: undefined,
});

export default store;
