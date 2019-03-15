import React from "react";
import MovieList from "../components/movies-list";
import { MovieService } from "../movie-service";


export class MovieDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {},
        };
        this.movieService = new MovieService();
        //   this.state = {
        //     filmsList: [],
        //     searchBy: "title",
        //     query: "",
        //     orderBy: "release_date",
        //     order: "asc"
        //   };
        //   
    }

    componentDidMount() {
        this.movieService.getMovie(this.props.match.params.id)
            .then(data => {
                return this.setState({ film: data })
            });

        this.movieService.searchMovie(this.props.match.params.id)
            .then(data => {
                return this.setState({ film: data })
            });
    }

    render() {
        return (
            <div>
                {this.state.film.title}
            </div>
        );
    }
}
