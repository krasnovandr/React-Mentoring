import React, { useState, useEffect } from 'react';
import MoviesList from "../components/movies-list";
import { MovieService } from "../movie-service";
import SearchToolbox from "../components/search-toolbox";
import SortingPanel from "../components/sorting-panel";
import { ErrorMessage } from "../shared-components/error-message";


export function Movies(props) {
  const [searchCriteria, setSearchCriteria] = useState({ query: "", searchBy: "title" });
  const [orderBy, setOrderBy] = useState("release_date");
  const [order, setOrder] = useState("asc");
  const [error, setError] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  const movieService = new MovieService();

  useEffect(() => {
    movieService.searchMovie(searchCriteria.searchBy, searchCriteria.query, orderBy, order)
      .then(data => setMoviesList(data))
      .catch(error => setError(error));

  }, [searchCriteria, orderBy, order]);


  if (error) {
    return <ErrorMessage></ErrorMessage>;
  }

  return (
    <div>
      <SearchToolbox
        onSearchTriggered={(newCriteria) => setSearchCriteria({ query: newCriteria.query, searchBy: newCriteria.searchBy })}
      />
      <SortingPanel
        moviesList={moviesList}
        onOrderByChanged={(newOrderBy) => setOrderBy(newOrderBy)}
        onOrderChanged={(newOrder) => setOrder(newOrder)}
      />
      <MoviesList items={moviesList} />
    </div>
  );
}
