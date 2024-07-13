import spinner from "../../assets/spinner.gif";

const Loader = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center min-h-screen w-full bg-transparent backdrop-blur-sm">
      <div
        className="flex flex-row  gap-2 items-center bg-white p-2
       rounded-lg"
      >
        <img src={spinner} alt="spinner" />
      </div>
      <h2 className="font-thin font-mono text-lg mt-4 text-orange-800 ">
        Koca Season II
      </h2>
    </div>
  );
};

export default Loader;
