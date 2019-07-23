import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const EventKey = ({ textboxId, textboxLabel, handleChange }) => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  }));

  const classes = useStyles();

  return (
    <TextField
      id={textboxId}
      label={textboxLabel}
      className={classes.textField}
      margin="normal"
      onChange={handleChange}
    />
  );
};
export default EventKey;
