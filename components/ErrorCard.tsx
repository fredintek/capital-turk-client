import React from "react";

type Props = {
  errorData: any;
};

const ErrorCard = ({ errorData }: Props) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="text-center text-red-500 text-lg w-fit shadow-shadow-2 p-3 rounded-xl">
        <p>😁</p>
        <small>
          {errorData instanceof Error
            ? errorData.message
            : errorData?.data?.message || "An unknown error occurred"}
        </small>
      </div>
    </div>
  );
};

export default ErrorCard;
