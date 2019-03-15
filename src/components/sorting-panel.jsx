import React from "react";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  item: {
    textAlign: 'center',
  },
});

class SortingPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orderBy: "", order: "" };
  }

  // componentDidUpdate() {
  //   const films = this.props.filmsItems;
  // }
  handleChangeSortingBy = e => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onOrderByChanged(e.target.value);
  };

  handleChangeSortingOrder = e => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onOrderChanged(e.target.value);
  };
  render() {
    const { classes } = this.props;
    const movies = this.props.moviesList;
    let averageMovieRating = 0;
    if (movies.data && movies.data.length > 0) {
      const ratings = movies.data.map(movie => movie.vote_average);
      averageMovieRating = (ratings.reduce((a, b) => a + b) / movies.data.length).toFixed(2);
    }
    return (
      <div>
        <Grid container spacing={16} className={classes.root} direction="row" justify="space-between" >

          {(movies && movies.data && averageMovieRating > 0)
            &&
            <Grid item md={4} className={classes.item}>
              <FormControl >
                <div>
                  <div>Movies Found {movies.data.length} </div>
                  <div>Average Rating  {averageMovieRating}</div>
                </div>
              </FormControl>
            </Grid>
          }

          <Grid item md={4} className={classes.item}>
            <FormControl>
              <Select
                native
                value={this.state.orderBy}
                onChange={this.handleChangeSortingBy}
                inputProps={{
                  name: "orderBy",
                  id: "sort-by"
                }}
              >
                {/* <option value="" /> */}
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
                <option value="vote_average">Vote Average</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} className={classes.item}>
            <FormControl>
              {/* <InputLabel htmlFor="order-id">Sort Order</InputLabel> */}
              <Select
                native
                value={this.state.order}
                onChange={this.handleChangeSortingOrder}
                inputProps={{
                  name: "order",
                  id: "order-id"
                }}
              >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>


      </div>
    );
  }
}

// SortingPanel.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(SortingPanel);
