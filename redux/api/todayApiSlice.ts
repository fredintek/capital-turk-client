import { apiSlice } from ".";

export const todayApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all today data
    getAllTodayData: builder.query({
      query: () => "/today",
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: ["Today"],
    }),
  }),
});

export const { useGetAllTodayDataQuery } = todayApiSlice;
