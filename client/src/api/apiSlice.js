import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.CONFIG.API_BASEPATH}` }),
  endpoints: (builder) => ({
    getAuctions: builder.query({
      query: (auction) => `/filterAuctions?search=${auction}`,
    }),
    getAuction: builder.query({
      query: (auctionId) => `/auction/:${auctionId}`,
    }),
  }),
});

export const { useGetAuctionsQuery, useGetAuctionQuery } = apiSlice;
