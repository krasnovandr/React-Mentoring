import React from "react";
import { FilmDetails } from "./film-detail";

import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from "@material-ui/icons/Info";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: grey
  },
  media: {
    // height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
    // height: 0,
    // paddingTop: "56.25%", // 16:9,
    // marginTop: "30"
  },
  card: {
    // display: 'block',
    // width: 30,
    // // transitionDuration: '0.3s',
    // height: 45
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function FilmsList(props) {
  const filmsItems = props.items;

  const { classes } = props;
  if (!filmsItems.data || filmsItems.data.length === 0) {
    return <div>No Films Found</div>;
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {filmsItems.data.map(film => (
            <Grid item md={4} key={film.id}>
              <Paper className={classes.paper}>
                <Grid item xs>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={film.poster_path}
                  />
                </Grid>
                <Grid item xs>
                  <Typography component="p" variant="subtitle1">
                    {film.title}
                  </Typography>
                  <Typography component="p" variant="subtitle2">
                    {film.release_date}
                  </Typography>
                  <Typography component="p" variant="subtitle2">
                    {film.vote_average}
                  </Typography>
                  
                  {film.genres.map(genre => {
                    return <span key={genre}>{genre} </span>;
                  })}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FilmsList);
