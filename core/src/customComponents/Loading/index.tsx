import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="flex h-8 w-8 animate-spin items-center justify-center rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!-m-px flex !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
