import { apiSlice } from ".";

export const showcaseApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all showcase data
    getAllShowcaseData: builder.query({
      query: () => "/showcase",
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: ["Showcase"],
    }),
  }),
});

export const { useGetAllShowcaseDataQuery } = showcaseApiSlice;
