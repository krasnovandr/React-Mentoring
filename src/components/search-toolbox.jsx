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
    margin: "20px",
    padding: "20px",
    border: "1px solid grey",
    // backgroundImage: `url(${logo})`,
    // backgroundColor: 'transparent',
    // color: "white"
    // color: green,
    // background: 'white',
    // border: "3px",
    // borderRadius: 3,
    // boxShadow: "2px 2px 2px 2px"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  radio: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "255 255 255"
  }
});

class SearchToolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", searchBy: this.props.searchBy };
  }

  handleTriggerSearch = e => {
    this.props.onSearchTriggered(this.state);
  };

  handleSearchChange = e => {
    this.setState({ query: event.target.value });
  };

  handleSearchbyCriteria = e => {
    this.setState({ searchBy: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              id="standard-name"
              label="Search"
              className={classes.textField}
              value={this.state.query}
              onChange={this.handleSearchChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component="legend">Search By</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.searchBy}
              onChange={this.handleSearchbyCriteria}
            >
              <FormControlLabel
                value="title"
                className={classes.textField}
                control={<Radio />}
                label="Title"
              />
              <FormControlLabel
                value="genres"
                className={classes.textField}
                control={<Radio />}
                label="Genre"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleTriggerSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// TextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SearchToolbox);
