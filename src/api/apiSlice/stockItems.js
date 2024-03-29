import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stockItems = createApi({
  reducerPath: "stockItems",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    getStockItems: builder.query({
      query: () => `/stockitems?populate[0]=image`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const { useGetStockItemsQuery } = stockItems;
