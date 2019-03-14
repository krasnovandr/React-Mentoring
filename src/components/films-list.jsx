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



const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  // card: {
  //   minWidth: 275,
  //   maxWidth: 345
  // },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

function FilmsList(props) {
  const filmsItems = props.items;
  const { classes } = props;
  if (!filmsItems.data || filmsItems.data.length === 0) {
    return <div>No Films Found</div>;
  } else {
    return (
      <div >
        {/* <ul>
          {filmsItems.data.map(film => (
            <FilmDetails key={film.id} value={film} />
          ))}
        </ul> */}
        {/* <img src={filmData.poster_path} />
      <div>{filmData.title}</div>
      <div> {filmData.release_date}</div>
      <div> {filmData.overview}</div> */}
        {/* <h1>Footer</h1> */}
        <GridList cellHeight={"auto"} cols={3} >
          <GridListTile key="Subheader" cols={3} >
            <ListSubheader component="div">
            
            </ListSubheader>
          </GridListTile>
          {filmsItems.data.map(film => (
            <GridListTile key={film.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={film.poster_path}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    {/* <img src={film.poster_path} alt={film.title} /> */}

                    {/* <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography>
                 */}
                    <Typography component="h2">{film.title}</Typography>
                    <Typography component="p">{film.release_date}</Typography>
                    <Typography component="p">{film.genre}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              {/* <GridListTileBar
                title={film.title}
             
                subtitle={<span>: {film.overview}</span>}
              /> */}
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(FilmsList);
