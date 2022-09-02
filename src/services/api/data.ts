import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {getDefaultHeaders} from "./index";
import {INewsItem, TNewsRequest} from "../types/news";
import {BASE_API_URL, JOURNAL_MAIN_LIMIT, NEWS_MAIN_LIMIT, PROJECTS_LIMIT, X_TOTAL_COUNT} from "../../constants";
import {IPopup} from "../types/popup";
import {ISamplePageContent} from "../types/sample";
import {IDiaryItem} from "../types/diary";
import {IBanner} from "../types/banner";
import {IProjectItem} from "../types/project";
import {IJournalItem, TJournalRequest} from "../types/journal";

export const dataAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => getDefaultHeaders(headers),
  }),
  endpoints: (build) => ({
    getPopup: build.query<IPopup, void>({
      query: () => ({
        url: '/popup',
      }),
    }),
    getBanner: build.query<IBanner, void>({
      query: () => ({
        url: '/banner',
      }),
    }),
    getSampleContent: build.query<ReadonlyArray<ISamplePageContent>, string | undefined>({
      query: (name) => ({
        url: '/sample',
        params: {
          name: name
        },
      }),
    }),
    getNews: build.query<{data: Array<INewsItem>, total: number}, TNewsRequest>({
      query: ({page, size}) => ({
        url: `/news`,
        params: {
          _page: page,
          _limit: size,
        },
      }),
      transformResponse(data: Array<INewsItem>, meta) {
        return {data, total: Number(meta?.response?.headers.get(X_TOTAL_COUNT))}
      }
    }),
    getMainNews: build.query<ReadonlyArray<INewsItem>, void>({
      query: () => ({
        url: `/news`,
        params: {
          _page: 1,
          _limit: NEWS_MAIN_LIMIT,
        },
      }),
    }),
    getDiaries: build.query<Array<IDiaryItem>, void>({
      query: () => ({
        url: '/diaries',
      }),
    }),
    getProjects: build.query<ReadonlyArray<IProjectItem>, void>({
      query: () => ({
        url: '/projects',
        params: {
          _limit: PROJECTS_LIMIT,
        },
      }),
    }),
    getJournal: build.query<{data: Array<IJournalItem>, total: number}, TJournalRequest>({
      query: ({page, size, filter}) => ({
        url: `/journal`,
        params: filter === "all" ? {
          _page: page,
          _limit: size,
        } : {
          _page: page,
          _limit: size,
          type: filter,
        },
      }),
      transformResponse(data: Array<IJournalItem>, meta) {
        return {data, total: Number(meta?.response?.headers.get(X_TOTAL_COUNT))}
      }
    }),
    getMainJournal: build.query<ReadonlyArray<IJournalItem>, void>({
      query: () => ({
        url: `/journal`,
        params: {
          _page: 1,
          _limit: JOURNAL_MAIN_LIMIT,
        },
      }),
    }),
  })
})
