export const createPlayers = (defaultNick) => {
  return Array.from(new Array(100)).map((item, index) => {
    const playerKills = Math.floor(Math.random() * 100);
    const playerDeaths = Math.floor(Math.random() * 100);
    const isAlivePlayer =
      defaultNick === "secondGamePlayer"
        ? index < 49
          ? false
          : index % 3 === 0 && index % 5 === 0 && true
        : index > 49
        ? false
        : index % 3 === 0 && index % 5 === 0 && true;

    const playerScore = isAlivePlayer ? playerKills * 1.5 : playerKills * 0.5;

    return (item = {
      nickname: defaultNick + index,
      score: playerScore,
      team:
        defaultNick === "secondGamePlayer"
          ? index <= 49
            ? "red"
            : "blue"
          : index > 49
          ? "blue"
          : "red",
      isAlive: isAlivePlayer,
      addInfo: {
        kills: playerKills,
        deaths: playerDeaths,
      },
    });
  });
};

export const allSessions = {
  firstGame: {
    id: "firstGameSession",
    players: createPlayers("firstGamePlayer"),
    teams: ["blue", "red"],
    winner: "red",
  },
  secondGame: {
    id: "secondGameSession",
    players: createPlayers("secondGamePlayer"),
    teams: ["red", "blue"],
    winner: "blue",
  },
  thirdGame: {
    id: "thirdGameSession",
    players: createPlayers("thirdGamePlayer"),
    teams: ["blue", "red"],
    winner: "red",
  },
  testNoPlayers: {
    id: "thirdGameSession",
    players: [],
    teams: ["blue", "red"],
    winner: "red",
  },
};
