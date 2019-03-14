import React from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import logo from "../../public/background.png";
const styles = theme => ({
  root: {
    // display: "flex",
    minHeight: "30px",
    padding: "20px",
    backgroundImage: `url(${logo})`,
    backgroundColor: "transparent"
    // color: "white"
    // color: green,
    // background: 'white',
    // border: "3px",
    // borderRadius: 3,
    // boxShadow: "2px 2px 2px 2px"
  }
});

// function FilmsList(props) {
//   const filmsItems = props.items;
function Header(props) {
  const { classes } = props;

  return <div className={classes.root} />;
}

export default withStyles(styles)(Header);
