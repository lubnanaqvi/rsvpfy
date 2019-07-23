import React from "react";
import { makeStyles } from "@material-ui/styles";
const Header = () => {
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #42275a 30%, #734b6d 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(55, 0, 55, .3)",
      color: "white",
      height: 48,
      padding: "0 30px"
    }
  });
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <h1>RSVPfy</h1>
    </header>
  );
};
export default Header;
