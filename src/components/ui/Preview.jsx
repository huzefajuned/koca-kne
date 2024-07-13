import React from "react";

const Preview = ({ isopen, setIsopen, url }) => {
  return (
    <div
      onClick={() => setIsopen(false)}
      className="w-full h-full fixed top-0 flex flex-row justify-center items-center bg-transparent backdrop-blur-lg  cursor-pointer p-2"
    >
      <img src={url} alt={url} className="rounded-lg" />
    </div>
  );
};

export default Preview;
