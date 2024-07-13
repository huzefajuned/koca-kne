import gallery from "../utils/gallery.json";
import { useState } from "react";
import Preview from "./ui/Preview";
const Gallery = () => {
  const [isopen, setIsopen] = useState(false);
  const [url, setUrl] = useState(null);
  const preview = (url_) => {
    setIsopen(true);
    setUrl(url_);
  };

  console.log("isopen :", isopen);
  return (
    <div className=" h-screen flex flex-row flex-wrap gap-6  justify-center  p-8   overflow-scroll">
      {gallery?.map((_img, i) => (
        <img
          onClick={() => preview(_img.url)}
          loading="lazy"
          src={_img.url}
          alt="_img"
          key={i}
          className="object-cover h-80  w-80 sm:w-52   rounded-md shadow-xl   cursor-pointer hover:border-2 border-white
          "
        />
      ))}
      {/* -- If isopen is true.
        ---then show the  preview modal
        ---show image as popup Modal
      */}
      {isopen && <Preview isopen={isopen} setIsopen={setIsopen} url={url} />}
    </div>
  );
};

export default Gallery;
