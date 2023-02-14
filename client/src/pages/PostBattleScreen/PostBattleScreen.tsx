import React, { useState } from "react";
import PlayersList from "../../components/PlayersList";
import Select from "../../components/Select";
import { sortPlayersByTeam } from "../../utils/utils";
import { usePostBattleScreen } from "./usePostBattleScreen";

import useStyles from "./styles";

const PostBatleScreen = () => {
  const { classes } = useStyles();
  const [currentSession, setCurrentSession] = useState<string>("firstGame");
  const { players, teams, sessionId, winner, sessions, error } =
    usePostBattleScreen(currentSession);

  const { blue, red } = sortPlayersByTeam(teams, players);
  const [firstteam, secondTeam] = teams;

  return (
    <>
      <div style={{ border: "1px solid", padding: "16px" }}>
        <h2>Choose the game session</h2>
        {sessions.length > 0 && (
          <Select
            value={currentSession}
            options={sessions}
            onChange={setCurrentSession}
          />
        )}
      </div>
      {error.length > 0 ? (
        <h1>{error}</h1>
      ) : (
        <div className={classes.screen}>
          <h1>{`Session: ${sessionId}`}</h1>
          <h2>{`The "${winner}" team is winner`}</h2>
          <div className={classes.table}>
            <div className={classes.block}>
              <h2>{`${firstteam} team:`}</h2>
              <div>
                <PlayersList list={blue} />
              </div>
            </div>
            <div className={classes.block}>
              <h2>{`${secondTeam} team:`}</h2>
              <div>
                <PlayersList list={red} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostBatleScreen;
