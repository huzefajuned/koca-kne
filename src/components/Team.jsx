import teamData from "../utils/team.json";
const Team = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center  p-4">
      <h1 className="text-4xl font-bold  mb-8">Teams</h1>

      {teamData.map((team, index) => {
        const teamName = Object.keys(team)[0];
        const members = team[teamName];

        return (
          <div key={index} className="w-full max-w-4xl mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center ">{teamName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white p-4 rounded-lg  border-2 cursor-pointer shadow-2xl"
                >
                  <img
                    className="w-24 h-24 rounded-full mb-2"
                    src={member.profile}
                    alt={member.Name}
                  />
                  <span className="text-lg font-medium">{member.Name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
