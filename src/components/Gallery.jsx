import gallery from "../utils/gallery.json";
const Gallery = () => {
  return (
    <div className=" flex flex-row flex-wrap gap-6  justify-center  p-8 ">
      {gallery?.map((_img, i) => (
        <img
          loading="lazy"
          src={_img.url}
          alt="_img"
          key={i}
          className="object-cover h-80 w-52 rounded-md shadow-xl  p-0
          "
        />
      ))}
    </div>
  );
};

export default Gallery;
