import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #a5678e 10%, #a5678e 60%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(55, 0, 55, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "2%"
  }
});

export default function SubmitButton({ handleClick }) {
  const classes = useStyles();
  return (
    <Button onClick={handleClick} className={classes.root}>
      Submit
    </Button>
  );
}
