import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-hero_background p-4">
      <div className="flex flex-col items-center justify-center w-full text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono text-center">
          Welcome To <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Kishanganj's Youth Festival
          </span>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 w-full">
        <button
          onClick={() =>
            toast.success("we are not accepting volunteer request now! ")
          }
          className="border-white border-2 bg-white p-3 sm:p-5 rounded-lg hover:bg-black hover:text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
        >
          Join as volunteer
        </button>
        <Link to="https://forms.gle/tcW38VWbbhGAfbHn9" target="_blank">
          <button className="border-white border-2 bg-white p-3 sm:p-5 rounded-lg hover:bg-black hover:text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Participant Registration 📍
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
