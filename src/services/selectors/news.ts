import {TRootState} from "../types";

export const dataNewsSelector = (state: TRootState) => state.news.data
export const totalNewsSelector = (state: TRootState) => state.news.total
export const pageNewsSelector = (state: TRootState) => state.news.page
