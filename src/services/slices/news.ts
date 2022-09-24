import {INewsData} from "../types/news";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {dataAPI} from "../api/data";
import {NEWS_PAGE_LIMIT_DESKTOP} from "../../constants";

const initialState: INewsData = {
  page: 1,
  total: 0,
  size: NEWS_PAGE_LIMIT_DESKTOP,
  data: [],
}


export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(dataAPI.endpoints.getFrontpageData.matchFulfilled, (state, action) => {
        const allData = action.payload.blocks
        const [newsCategory] = allData?.filter((obj: { layout: string; }) => obj.layout === 'news')
        const news = newsCategory.category.items
        if (state.page === 1) {
          state.data = news
        } else {
          const reduced = state.data.filter(stateItem => !news.find((payloadItem: { id: number; }) => stateItem.id === payloadItem.id))
          state.data = reduced.concat(action.payload.data);
        }
        state.total = action.payload.total
      })
      .addMatcher(dataAPI.endpoints.getFrontpageData.matchRejected, (state, action) => {
        if (action.error.name !== "ConditionError") {
          state.data = []
          state.total = 0
          state.page = 1
        }
      })
  },
})

export const { setNewsPage } = newsSlice.actions

export default newsSlice.reducer;
