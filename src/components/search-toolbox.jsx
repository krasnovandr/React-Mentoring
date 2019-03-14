import React from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

export class SearchToolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", searchBy: this.props.searchBy };
  }

  handleTriggerSearch = e => {
    this.props.onSearchTriggered(this.state);
  };

  handleSearchChange = e => {
    // this.props.onSearchChanged()
    this.setState({ query: event.target.value });
  };

  handleSearchbyCriteria = e => {
    this.setState({ searchBy: event.target.value });
  };

  render() {
    return (
      <div>
        <label>Search</label>
        <input value={this.state.query} onChange={this.handleSearchChange} />
        <hr />
        <Radio
          checked={this.state.searchBy === "title"}
          onChange={this.handleSearchbyCriteria}
          value="title"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.searchBy === "genres"}
          onChange={this.handleSearchbyCriteria}
          value="genres"
          name="radio-button-demo"
          aria-label="B"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleTriggerSearch}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SearchToolbox);
