export interface IPlayer {
  nickname: string;
  score: number;
  team: string;
  isAlive: boolean;
  addInfo: {
    kills: number;
    deaths: number;
  };
}

export interface SortedPlayers {
  [key: string]: {
    alivePlayers: IPlayer[];
    deadPlayers: IPlayer[];
    allPlayers: IPlayer[];
  };
}
