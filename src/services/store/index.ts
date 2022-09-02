import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import {dataAPI} from "../api/data";
import newsReducer from "../slices/news"
import journalReducer from "../slices/journal"

export const rootReducer = combineReducers({
  news: newsReducer,
  journal: journalReducer,
  [dataAPI.reducerPath]: dataAPI.reducer,
})

const logger = createLogger()

export const index = configureStore({
  reducer: rootReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    logger,
    dataAPI.middleware
  ]),
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: undefined,
})

export default store
