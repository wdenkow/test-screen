import { IPlayer, SortedPlayers } from "../interfaces/interfaces";

const sortByScore = (a: IPlayer, b: IPlayer) => b.score - a.score;

export function sortPlayersByTeam(teams: string[], allPlayers: IPlayer[]) {
  const [firstTeam, secondTeam] = teams;
  const sortedPlayers: SortedPlayers = {
    [`${firstTeam}`]: {
      alivePlayers: [],
      deadPlayers: [],
      allPlayers: [],
    },
    [`${secondTeam}`]: {
      alivePlayers: [],
      deadPlayers: [],
      allPlayers: [],
    },
  };

  for (const team of teams) {
    allPlayers.forEach((player) => {
      if (player.team === team) {
        sortedPlayers[team] = {
          ...sortedPlayers[team],
          allPlayers: [...sortedPlayers[team].allPlayers, player],
        };

        if (player.isAlive) {
          sortedPlayers[team] = {
            ...sortedPlayers[team],
            alivePlayers: [...sortedPlayers[team].alivePlayers, player],
          };
        } else {
          sortedPlayers[team] = {
            ...sortedPlayers[team],
            deadPlayers: [...sortedPlayers[team].deadPlayers, player],
          };
        }
      }
    });
  }

  return {
    [`${firstTeam}`]: [
      ...sortedPlayers[firstTeam].alivePlayers.sort(sortByScore),
      ...sortedPlayers[firstTeam].deadPlayers.sort(sortByScore),
    ],
    [`${secondTeam}`]: [
      ...sortedPlayers[secondTeam].alivePlayers.sort(sortByScore),
      ...sortedPlayers[secondTeam].deadPlayers.sort(sortByScore),
    ],
  };
}
