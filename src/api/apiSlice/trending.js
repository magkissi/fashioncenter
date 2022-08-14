import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trendingItems = createApi({
  reducerPath: "trendingItems",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    getStockItems: builder.query({
      query: () => `/trendings?populate[0]=image`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const { useGetTrendingItemsQuery } = trendingItems;
