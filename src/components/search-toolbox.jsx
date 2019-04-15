import React from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
const styles = theme => ({
  root: {
    minHeight: "30px",
    margin: "20px",
    padding: "20px",
    border: "1px solid grey",
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row"
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
    width: "100%",
  },
  search: {
    textAlign: "right",
    alignContent: "flex-end"
  }
});

class SearchToolbox extends React.Component {
  handleTriggerSearch = e => {
    this.props.onSearchTriggered();
  };

  handleSearchChange = e => {
    this.props.onSearchChanged(e.target.value);
  };

  handleSearchbyCriteria = e => {
    this.props.onSearchByChanged(e.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} alignItems="center" >
          <Grid item xs={12} >
            <TextField
              id="standard-name"
              label="Search"
              className={classes.textField}
              value={this.props.searchCriteria.query}
              onChange={this.handleSearchChange}
              margin="normal"
              data-testid="search-input"
            />
          </Grid>
          <Grid item xs={2}>
            <FormLabel >Search By</FormLabel>
          </Grid>
          <Grid item xs={4} >
            <RadioGroup
              aria-label="Genre"
              name="genres"
              className={classes.group}
              value={this.props.searchCriteria.searchBy}
              data-testid="search-radiogroup"
            >
              <FormControlLabel
                value="title"
                control={<Radio />}
                label="Title"
                data-testid="title-radio"
                onChange={this.handleSearchbyCriteria}
              />
              <FormControlLabel
                value="genres"
                control={<Radio />}
                label="Genre"
                data-testid="genre-radio"
                onChange={this.handleSearchbyCriteria}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} className={classes.search}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleTriggerSearch}
              data-testid="search-button"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SearchToolbox);
