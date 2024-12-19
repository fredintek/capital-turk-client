"use client";
import ErrorCard from "@/components/ErrorCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetAllCommunicationDataQuery } from "@/redux/api/communicationApiSlice";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const {
    data: allCommunicationData,
    error: allCommunicationDataError,
    isLoading: allCommunicationDataIsLoading,
    isError: allCommunicationDataIsError,
  } = useGetAllCommunicationDataQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  return (
    <section className="py-10">
      <div className="container flex flex-col gap-8">
        {/* Loading State */}
        {allCommunicationDataIsLoading && <LoadingSpinner />}

        {/* Error State */}
        {allCommunicationDataIsError && (
          <ErrorCard errorData={allCommunicationDataError} />
        )}

        {/* Success State */}
        {!allCommunicationDataIsLoading &&
          !allCommunicationDataIsError &&
          allCommunicationData && (
            <>
              {/* top */}
              <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-semibold">
                  {allCommunicationData[0]?.title}
                </h1>

                {/* address */}
                <div>
                  <h2 className="text-xl font-medium">Address</h2>
                  <p>{allCommunicationData[0]?.address}</p>
                </div>

                {/* phone */}
                <div>
                  <h2 className="text-xl font-medium">Telephone</h2>
                  <p>{allCommunicationData[0]?.phone?.join("| ")}</p>
                </div>

                {/* advert */}
                <div>
                  <h2 className="text-xl font-medium">Advert</h2>
                  <p className="text-red-500 font-light">
                    {allCommunicationData[0]?.advert}
                  </p>
                </div>
              </div>
            </>
          )}

        {/* bottom */}
        <div>
          <p className="text-[14px] text-gray-400 font-light">
            The works of DJs and Producers broadcast on Capital Radio, which we
            hold the title of 'Official Broadcasting Organisation of Cyprus' and
            which reach our listeners from Capital Radio 93.8 FM, Capital Radio
            Cyprus mobile applications and www.capitalcyprus.com, cannot be
            recorded, republished and/or reproduced. In such cases, Capitalcity
            Publishing Ltd. reserves its legal rights
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
