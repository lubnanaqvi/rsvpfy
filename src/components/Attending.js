import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/styles";

export default function FormControlLabelPosition({ handleChange }) {
  const useStyles = makeStyles({
    root: {
      margin: "2%",
      width: 200
    }
  });
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">Attending?</FormLabel>
      <RadioGroup
        aria-label="attending"
        name="attending"
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="Yes"
          control={<Radio color="default" />}
          label="Yes"
          labelPlacement="end"
        />
        <FormControlLabel
          value="No"
          control={<Radio color="default" />}
          label="No"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
