import { apiSlice } from ".";

export const todayApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all today data
    getAllTodayData: builder.query({
      query: () => ({
        url: "/today",
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetAllTodayDataQuery } = todayApiSlice;
