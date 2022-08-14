import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bestSellingItems = createApi({
  reducerPath: "bestSellingItems",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  tagTypes: ["POST"],
  endpoints: (builder) => ({
    getBestSellingItems: builder.query({
      query: () => `/bestsellings?populate[0]=picture`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const { useGetBestSellingItemsQuery } = bestSellingItems;
