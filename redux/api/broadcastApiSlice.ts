import { apiSlice } from ".";

export const broadcastApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all broadcast data
    getAllBroadcastData: builder.query({
      query: () => "/broadcast-flow",
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: ["Broadcast"],
    }),
  }),
});

export const { useGetAllBroadcastDataQuery } = broadcastApiSlice;
