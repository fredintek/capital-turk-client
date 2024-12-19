import { apiSlice } from ".";

export const funApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all fun data
    getAllFunData: builder.query({
      query: () => "/fun",
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: ["Fun"],
    }),
  }),
});

export const { useGetAllFunDataQuery } = funApiSlice;
