import React from "react";
import { makeStyles } from "@material-ui/styles";
const Footer = () => {
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #734b6d 30%, #230043 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(55, 0, 55, .3)",
      color: "white",
      textAlign: "center",
      fontStyle: "italic"
    }
  });
  const classes = useStyles();
  return (
    <footer className={classes.root}>Copyright &copy; Lubna Naqvi 2019</footer>
  );
};
export default Footer;
