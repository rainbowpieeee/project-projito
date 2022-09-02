import {TRootState} from "../types";

export const dataJournalSelector = (state: TRootState) => state.journal.data
export const totalJournalSelector = (state: TRootState) => state.journal.total
export const pageJournalSelector = (state: TRootState) => state.journal.page
export const filterJournalSelector = (state: TRootState) => state.journal.filter
