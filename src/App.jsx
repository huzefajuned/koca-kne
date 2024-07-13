import toast from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center justify-around h-screen w-screen bg-cover bg-center bg-no-repeat bg-hero_background">
      <div className=" flex flex-col items-center justify-center w-full text-white">
        <h1 className="text-2xl font-bold font-mono ">
          Welcome To <br />
          <span className="text-5xl">Kishanganj's Youth Festival</span>
        </h1>
      </div>

      <div className=" flex flex-row justify-center items-center gap-10  w-full">
        <button
          onClick={() =>
            toast.success("we are not accepting volunteer request now! ")
          }
          className=" border-white border-2
          bg-white p-5
          hover:bg-green-700
          hover:border-gray-700
          hover:text-white rounded-lg "
        >
          Join as volunteer
        </button>
        <button
          onClick={() =>
            toast.success("we are not accepting volunteer request now! ")
          }
          className=" border-white border-2
          bg-white p-5
          hover:bg-green-700
          hover:border-gray-700
          hover:text-white rounded-lg "
        >
          Participant Registraion 📍
        </button>
      </div>
    </div>
  );
}

export default App;
