import { useState } from "react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    { id: 1, name: "Upcoming Event 1", date: "2024-07-15" },
    { id: 2, name: "Upcoming Event 2", date: "2024-07-20" },
  ];

  const pastEvents = [
    { id: 1, name: "Past Event 1", date: "2023-06-10" },
    { id: 2, name: "Past Event 2", date: "2023-05-25" },
  ];

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-6">
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-4 py-2 text-white rounded-lg ${
            activeTab === "upcoming" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Upcoming Events
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`px-4 py-2 text-white rounded-lg ${
            activeTab === "past" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Past Events
        </button>
      </div>
      <div className="w-full max-w-2xl">
        {activeTab === "upcoming" && (
          <div className="transition-opacity duration-500 opacity-100">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Upcoming Events
            </h2>
            <ul className="space-y-4">
              {upcomingEvents.map((event) => (
                <li key={event.id} className="mb-2">
                  <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold">{event.name}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "past" && (
          <div className="transition-opacity duration-500 opacity-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Past Events</h2>
            <ul className="space-y-4">
              {pastEvents.map((event) => (
                <li key={event.id} className="mb-2">
                  <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold">{event.name}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
