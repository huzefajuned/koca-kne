const Loader = () => {
  return (
    <div className=" absolute flex items-center justify-center min-h-screen w-full bg-gray-200">
      <div className="loader relative w-28 h-12">
        <span className="load absolute bottom-0 bg-purple-600 rounded-full w-4 h-4 animate-loading_713"></span>
      </div>
    </div>
  );
};

export default Loader;
