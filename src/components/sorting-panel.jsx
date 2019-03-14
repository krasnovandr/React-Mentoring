import React from "react";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// id: 399055,
// title: "The Shape of Water",
// tagline: "A Fairy Tale for Troubled Times",
// vote_average: 7.3,
// vote_count: 3200,
// release_date: "2017-12-01",
// poster_path:
//   "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
// overview:
//   "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
// budget: 19500000,
// revenue: 185545281,
// genres: ["Drama", "Fantasy", "Romance"],
// runtime: 123

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

export class SortingPanel extends React.Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.state = { orderBy: "", order: "" };
  }
  handleChangeSortingBy = e => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onOrderChanged(e.target.value);
  };

  handleChangeSortingOrder = e => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onOrderChanged(e.target.value);
  };
  render() {
    return (
      <div>
        {/* <span>{(this.props.filmsItems  && this.props.filmsItems.data) ? 0: this.props.filmsItems.data.length } Movies Found</span> */}
        {/* <FormControl>
          <InputLabel htmlFor="sort-by">Sort By</InputLabel>
        </FormControl> */}

        <FormControl>
          {/* <InputLabel htmlFor="sort-by">Sort By</InputLabel> */}
          <Select
            native
            value={this.state.orderBy}
            onChange={this.handleChangeSortingBy}
            inputProps={{
              // name: "orderBy",
              id: "sort-by"
            }}
          >
            {/* <option value="" /> */}
            <option value="release_date">Release Date</option>
            <option value="title">Title</option>
            <option value="vote_average">Vote Average</option>
          </Select>
        </FormControl>
        <FormControl>
          {/* <InputLabel htmlFor="order-id">Sort Order</InputLabel> */}
          <Select
            native
            value={this.state.order}
            onChange={this.handleChangeSortingOrder}
            inputProps={{
              name: "asc",
              id: "order-id"
            }}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(SortingPanel);
