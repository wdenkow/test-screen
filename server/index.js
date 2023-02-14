import express from "express";
import cors from "cors";

import { allSessions } from "./utils.js";

const app = express();
const PORT = 3002;

app.use(cors());

app.get("/sessions", (req, res) => {
  const sessionsKeys = Object.keys(allSessions);

  if (sessionsKeys.length === 0) {
    return res.status(404).json({
      message: "No active sessionsSession",
    });
  }
  // I add "fourSession" for simulation error in front side
  res.json([...sessionsKeys, "fourGameSession"]);
});

app.get("/sessions/:id", (req, res) => {
  const session = allSessions[req.params.id];
  if (!session) {
    return res.status(404).json({
      message: `Session ${req.params.id} not found`,
    });
  }

  res.json(session);
});

app.listen(3002, (req, res) => {
  console.log("Server listening on port " + PORT);
});
