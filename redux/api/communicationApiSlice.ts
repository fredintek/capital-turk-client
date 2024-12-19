import { CommunicationData } from "@/utilities/interfaces";
import { apiSlice } from ".";

export const communicationApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all communication data
    getAllCommunicationData: builder.query({
      query: () => "/communication",
      transformResponse: (response: any): CommunicationData[] => {
        return response.data;
      },
      providesTags: ["Communication"],
    }),
  }),
});

export const { useGetAllCommunicationDataQuery } = communicationApiSlice;
