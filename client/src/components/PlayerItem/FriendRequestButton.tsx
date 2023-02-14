import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";

interface IFriendRequestButton {
  onClick: () => void;
}

const useBtnStyles = makeStyles<{ isActive: boolean }>()(
  (theme, { isActive }) => ({
    button: {
      padding: "2px 4px",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      fontSize: "20px",
      borderRadius: "5px",
      "&:hover": {
        cursor: isActive ? "initial" : "pointer",
        backgroundColor: isActive
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 1)",
      },
    },
  })
);

export const FriendRequestButton = ({ onClick }: IFriendRequestButton) => {
  const [isSendRequest, setIsSendRequest] = useState(false);
  const { classes } = useBtnStyles({ isActive: isSendRequest });

  const handleClick = () => {
    if (isSendRequest) {
      return;
    }
    onClick();
    setIsSendRequest(true);
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      {isSendRequest ? "✓" : "+"}
    </button>
  );
};
