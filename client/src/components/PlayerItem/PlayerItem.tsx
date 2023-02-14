import React, { useState } from "react";
import { IPlayer } from "../../interfaces/interfaces";
import { FriendRequestButton } from "./FriendRequestButton";
import usePlayerStyles from "./styles";

const PlayerItem = ({ nickname, isAlive, score, addInfo }: IPlayer) => {
  const { classes } = usePlayerStyles({ isAlive });
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const toggleTooltipVisible = () => setIsShowTooltip(!isShowTooltip);

  const onAddUserClick = () => {
    alert(nickname);
  };

  return (
    <div className={classes.player}>
      <div className={"classes.nameBlock"}>
        <span
          className={classes.name}
          onMouseEnter={toggleTooltipVisible}
          onMouseLeave={toggleTooltipVisible}
        >
          {nickname}
          {isShowTooltip && (
            <p className={classes.tooltip}>
              <span>{`Kills: ${addInfo.kills}`}</span> &nbsp;
              <span>{`Deaths: ${addInfo.deaths}`}</span>
            </p>
          )}
        </span>
        <FriendRequestButton onClick={onAddUserClick} />
      </div>
      <span>{score}</span>
    </div>
  );
};

export default PlayerItem;
