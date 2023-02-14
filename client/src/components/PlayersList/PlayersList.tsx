import React from "react";
import { IPlayer } from "../../interfaces/interfaces";
import PlayerItem from "../PlayerItem";

interface Props {
  list: IPlayer[];
}

const PlayersList = ({ list }: Props) => {
  return (
    <>
      {list?.length > 0 ? (
        list.map((item) => {
          return <PlayerItem key={item.nickname} {...item} />;
        })
      ) : (
        <p>Empty players list</p>
      )}
    </>
  );
};

export default PlayersList;
