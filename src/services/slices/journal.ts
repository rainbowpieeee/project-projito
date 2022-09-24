import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataAPI } from "../api/data";
import { JOURNAL_PAGE_LIMIT_DESKTOP } from "../../constants";
import { IJournalData, TJournalFilter } from "../types/journal";

const initialState: IJournalData = {
  page: 1,
  total: 0,
  size: JOURNAL_PAGE_LIMIT_DESKTOP,
  filter: "all",
  data: [],
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    setJournalPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      console.log(action.payload);
    },
    setJournalFilter: (state, action: PayloadAction<TJournalFilter>) => {
      state.page = 1;
      state.data = [];
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        dataAPI.endpoints.getFrontpageData.matchFulfilled,
        (state, action) => {
          const [journalBlock] = action.payload.blocks?.filter(
            (obj: { layout: string }) => obj.layout === "journal"
          );
          if (state.page === 1) {
            state.data = journalBlock.category.items;
          } else {
            const reduced = state.data.filter(
              (stateItem) =>
                !journalBlock.category.items.find(
                  (payloadItem: { id: any }) => stateItem.id === payloadItem.id
                )
            );
            state.data = reduced.concat(action.payload.data);
          }
          state.total = action.payload.blocks.length;
        }
      )
      .addMatcher(
        dataAPI.endpoints.getFrontpageData.matchRejected,
        (state, action) => {
          if (action.error.name !== "ConditionError") {
            state.data = [];
            state.total = 0;
            state.page = 1;
            state.filter = "all";
          }
        }
      );
  },
});

export const { setJournalPage, setJournalFilter } = journalSlice.actions;

export default journalSlice.reducer;
