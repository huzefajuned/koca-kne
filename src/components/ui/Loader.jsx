import spinner from "../../assets/spinner.gif";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className=" fixed top-0 flex flex-col items-center justify-center h-screen w-screen bg-transparent backdrop-blur-sm">
      <div
        className="flex flex-row  gap-2 items-center   p-2
       rounded-lg"
      >
        {/* <img src={spinner} alt="spinner" /> */}
        <img src={logo} alt="logo" className="w-24 md:w-16" />
      </div>
      <div className="main flex flex-row">
        <span className="flex flex-row">
          <span className="animate-blink text-3xl text-white">.</span>
          <span
            className="animate-blink text-3xl text-white"
            style={{ animationDelay: "0.2s" }}
          >
            .
          </span>
          <span
            className="animate-blink text-3xl text-white"
            style={{ animationDelay: "0.4s" }}
          >
            .
          </span>
        </span>
      </div>

      {/* <span className="md:text-2xl text-sm hidden md:flex  bg-clip-text text-black absolute bottom-0">
        Season II
      </span> */}
    </div>
  );
};

export default Loader;
