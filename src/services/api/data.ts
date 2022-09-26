import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getDefaultHeaders } from "./index";
import { INewsItem, TNewsRequest } from "../types/news";
import {
  BASE_API_URL,
  JOURNAL_MAIN_LIMIT,
  NEWS_MAIN_LIMIT,
  PROJECTS_LIMIT,
  X_TOTAL_COUNT,
} from "../../constants";
import { IPopup } from "../types/popup";
import { ISamplePageContent } from "../types/sample";
import { IDiaryItem } from "../types/diary";
import { IBanner } from "../types/banner";
import { IProjectItem } from "../types/project";
import { IJournalItem, TJournalRequest } from "../types/journal";

export const dataAPI = createApi({
  reducerPath: "dataAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => getDefaultHeaders(headers),
  }),
  endpoints: (build) => ({
    getFrontpageData: build.query<any, void>({
      query: () => ({
        url: "/frontpage",
      }),
    }),
    getLayoutData: build.query<any, void>({
      query: () => ({
        url: "/context",
      }),
    }),
    getBanner: build.query<IBanner, void>({
      query: () => ({
        url: "/banner",
      }),
    }),
    getPageData: build.query<ReadonlyArray<any>, string | undefined>({
      query: (name) => ({
        url: `/page/${name}`,
      }),
    }),
    getNews: build.query<
      { data: Array<INewsItem>; total: number },
      TNewsRequest
    >({
      query: ({ page, size }) => ({
        url: `/news`,
        params: {
          _page: page,
          _limit: size,
        },
      }),
      transformResponse(data: Array<INewsItem>, meta) {
        return {
          data,
          total: Number(meta?.response?.headers.get(X_TOTAL_COUNT)),
        };
      },
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
        url: "/diaries",
      }),
    }),
    getProjects: build.query<ReadonlyArray<IProjectItem>, void>({
      query: () => ({
        url: "/projects",
        params: {
          _limit: PROJECTS_LIMIT,
        },
      }),
    }),
    getJournal: build.query<{ data: any; total: number }, TJournalRequest>({
      query: ({ page, size, filter }) => ({
        url: `category/journal`,
        params:
          filter === "all"
            ? {
                _page: page,
                _limit: size,
              }
            : {
                _page: page,
                _limit: size,
                tag: filter,
              },
      }),
      transformResponse(data: any, meta) {
        return {
          data,
          total: Number(meta?.response?.headers.get(X_TOTAL_COUNT)),
        };
      },
    }),
    getMainJournal: build.query<ReadonlyArray<any>, void>({
      query: () => ({
        url: `category/journal`,
        params: {
          _page: 1,
          _limit: JOURNAL_MAIN_LIMIT,
        },
      }),
    }),
  }),
});
