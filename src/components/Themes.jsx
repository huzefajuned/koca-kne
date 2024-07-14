import themesData from "../utils/themes.json";
// Sample JSON Data

const Themes = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center  p-10">
      <h1 className="text-4xl font-bold  mb-8">Themes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {themesData.map((theme, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={theme.image}
              alt={theme.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl mb-2">{theme.title}</h2>
              <p className="text-gray-700">{theme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
