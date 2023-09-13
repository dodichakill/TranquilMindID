import React from "react";

const ReadMoreTimeline = ({ content }) => {
  return (
    <>
      <div
        className='read-more absolute z-10 top-0 left-0 sm:left-[20rem] w-[300px] h-[88px] sm:w-[350px] sm:h-fit lg:w-[650px] px-4 py-[1rem] sm:px-6 sm:py-8 bg-white rounded-2xl'
        style={{ boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.2)" }}
      >
        <p className="text-[0.6rem] sm:text-sm lg:text-base">
          {content}
        </p>
      </div>
    </>
  );
};

export default ReadMoreTimeline;
