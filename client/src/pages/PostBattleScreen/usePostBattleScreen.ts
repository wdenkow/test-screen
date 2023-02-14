import axios from "axios";
import { useEffect, useState } from "react";
import { IPlayer } from "../../interfaces/interfaces";

interface ISessionData {
  id: string;
  players: IPlayer[];
  teams: string[];
  winner: string;
}

async function getSessionById(sessionId: string): Promise<ISessionData> {
  const { data } = await axios.get(
    `http://localhost:3002/sessions/${sessionId}`
  );
  return data;
}

async function getAllSessions(): Promise<string[]> {
  const { data } = await axios.get("http://localhost:3002/sessions/");
  return data;
}

const initialData = {
  id: "",
  players: [],
  teams: [],
  winner: "",
};

export const usePostBattleScreen = (sessionName: string) => {
  const [fetchedData, setFetchedData] = useState<ISessionData>(initialData);
  const [allSissions, setAllSissions] = useState<string[] | []>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getSessionById(sessionName)
      .then((res) => {
        const { players, id, teams, winner } = res;
        setFetchedData({ players, teams, id, winner });
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(`Error from getAllSessions${err}`);
      });
  }, [sessionName]);

  useEffect(() => {
    getAllSessions()
      .then((res) => {
        setAllSissions(res);
        setError("");
      })
      .catch((err) => {
        console.log(`Error from getAllSessions${err}`);
        setError(err.response.data.message);
      });
  }, []);

  const { players, id, teams, winner } = fetchedData;

  return {
    teams: teams,
    players: players,
    sessionId: id,
    winner: winner,
    sessions: allSissions,
    error: error,
  };
};
