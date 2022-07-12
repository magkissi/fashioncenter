import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stockItems = createApi({
  reducerPath: "stockItems",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  endpoints: (builder) => ({
    getStockItems: builder.query({
      query: () => `/men`,
    }),
  }),
});

export const { useGetStockItemsQuery } = stockItems;
