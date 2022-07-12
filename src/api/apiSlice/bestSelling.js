import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bestSellingItems = createApi({
  reducerPath: "bestSellingItems",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  endpoints: (builder) => ({
    getBestSellingItems: builder.query({
      query: () => `/women`,
    }),
  }),
});

export const { useGetBestSellingItemsQuery } = bestSellingItems;
