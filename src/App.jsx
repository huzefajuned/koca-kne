function App() {
  return (
    <div className="flex flex-row gap-2 items-center justify-around h-screen w-screen bg-cover bg-center bg-no-repeat bg-hero_background">
      <div className=" flex flex-col items-center justify-center w-1/2 h-full  ">
        <h1 className="text-2xl font-bold font-mono ">
          Welcome To <br />
          <span className="text-5xl">Kishanganj's Youth Festival</span>
        </h1>
      </div>
      <div className="">
        <button
          className=" border-white border-2 p-2
             rounded-lg hover:text-gray-400"
        >
          Join as volunteer
        </button>
      </div>
    </div>
  );
}

export default App;
