import React from "react";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../public/background.png";
const styles = theme => ({
  root: {
    minHeight: "30px",
    padding: "20px",
    backgroundImage: `url(/${logo})`,
    backgroundColor: "transparent"
  }
});

function Header(props) {
  const { classes } = props;

  return <div className={classes.root} />;
}

export default withStyles(styles)(Header);
