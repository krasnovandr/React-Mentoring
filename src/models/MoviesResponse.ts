import Movie from "./Movie";

export interface MoviesResponse {
  data?: Movie[];
  total: number;
  offset: number;
  limit: number;
}
