import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sports WebSocket Server Running");
});
let match = {
  team1: "India",
  team2: "Australia",
  runs: 120,
  wickets: 3,
  overs: 14.2,
  commentary: [
    "Four by Kohli!",
    "Excellent yorker.",
    "Wicket! Bowled him."
  ],
  striker: "Virat Kohli",
  nonStriker: "Rohit Sharma",
  bowler: "Starc",
  target: 180
};
const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    console.log("Client Connected");

   socket.send(JSON.stringify(match));

   socket.on("message", (message) => {

    const action = message.toString();

   if (message === "run") {
  match.runs += 1;
  match.commentary.unshift("1 Run");
}

if (message === "four") {
  match.runs += 4;
  match.commentary.unshift("FOUR!");
}

if (message === "six") {
  match.runs += 6;
  match.commentary.unshift("SIX!");
}

if (message === "wicket") {
  match.wickets += 1;
  match.commentary.unshift("WICKET!");
}

if (message === "over") {
  match.overs += 0.1;
}

    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify(match));
        }
    });
});

    socket.on("close", () => {
        console.log("Client Disconnected");
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});