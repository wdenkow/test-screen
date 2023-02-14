import { makeStyles } from "tss-react/mui";

export default makeStyles<{ isAlive: boolean }>()((theme, { isAlive }) => ({
  player: {
    boxSizing: "border-box",
    borderBottom: "1px solid",
    padding: "2px 10px",
    backgroundColor: isAlive ? "rgba(255, 165, 0, 0.8)" : "rgba(0, 0, 0, 0.35)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
  },
  name: {
    position: "relative",
    marginRight: "10px",
  },
  tooltip: {
    padding: "4px",
    borderRadius: "5px",
    zIndex: 1,
    backgroundColor: "white",
    boxShadow: "0 0 3px",
    width: "160px",
    position: "absolute",
    top: "16px",
    left: 0,
    right: 0,
    fontSize: "16px",
  },
}));
