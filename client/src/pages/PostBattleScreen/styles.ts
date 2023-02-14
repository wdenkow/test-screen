import { makeStyles } from "tss-react/mui";

export default makeStyles()(() => ({
  main: {
    marginTop: "40px",
  },
  screen: {
    "& h1": {
      borderBottom: "1px solid",
    },
  },
  table: {
    display: "flex",
  },
  block: {
    width: "50%",
    border: "1px solid",
    "&:first-of-type": {
      borderRight: "transparent",
    },
  },
}));
