import React from "react";
import TextBox from "./TextBox";
import { makeStyles } from "@material-ui/styles";
const Main = () => {
  const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(200, 200, 200, .3)",
      height: 500,
      padding: "0 30px"
    }
  });
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <TextBox textboxId="eventKey" textboxLabel="Event Key:" />
    </main>
  );
};
export default Main;
