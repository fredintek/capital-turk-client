import { BroadcastData } from "@/utilities/interfaces";
import { apiSlice } from ".";

export const broadcastApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all broadcast data
    getAllBroadcastData: builder.query({
      query: () => "/broadcast-flow",
      transformResponse: (response: any): BroadcastData[] => {
        return response.data;
      },
      providesTags: ["Broadcast"],
    }),
  }),
});

export const { useGetAllBroadcastDataQuery } = broadcastApiSlice;
