import { useEffect, useState } from "react";

function Home() {
  const [match, setMatch] = useState({
    team1: "",
    team2: "",
    runs: 0,
    wickets: 0,
    overs: 0,
    commentary: [],
  });

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMatch(data);
    };

    return () => socket.close();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        Sports Live App
      </h1>

      <div className="max-w-xl mx-auto bg-slate-800 rounded-xl p-6 shadow-lg">

        <h2 className="text-3xl font-semibold mb-4">
          {match.team1} vs {match.team2}
        </h2>

        <div className="text-5xl font-bold text-green-400">
          {match.runs}/{match.wickets}
        </div>

        <p className="text-gray-400 mt-2 text-xl">
          {match.overs} Overs
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            Live Commentary
          </h3>

          <div className="space-y-2 max-h-80 overflow-y-auto">
            {match.commentary.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 p-3 rounded"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;