import { useEffect, useState } from "react";

function Admin() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onopen = () => {
      console.log("Admin Connected");
    };

    setSocket(ws);

    return () => ws.close();
  }, []);

  const sendCommand = (command) => {
    if (socket) {
      socket.send(command);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold text-center mb-10">
        Admin Panel
      </h1>

      <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-xl">

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => sendCommand("run")}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded"
          >
            +1 Run
          </button>

          <button
            onClick={() => sendCommand("wicket")}
            className="bg-red-600 hover:bg-red-700 p-4 rounded"
          >
            Wicket
          </button>

          <button
            onClick={() => sendCommand("over")}
            className="bg-green-600 hover:bg-green-700 p-4 rounded"
          >
            +0.1 Over
          </button>

          <button
            onClick={() => sendCommand("four")}
            className="bg-purple-600 hover:bg-purple-700 p-4 rounded"
          >
            Four
          </button>

          <button
            onClick={() => sendCommand("six")}
            className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded"
          >
            Six
          </button>

        </div>
      </div>

    </div>
  );
}

export default Admin;