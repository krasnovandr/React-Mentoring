import * as queryString from "query-string"
export class MovieService {
  baseUrl: string;

  constructor() {
    this.baseUrl = "http://react-cdp-api.herokuapp.com/movies";
  }

  handleErrors(response: Response) {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    return response;
  }

  searchMovie(
    searchBy: string,
    search: string,
    sortBy: string,
    sortOrder: string,
    offset = 0,
    limit = 18
  ): Promise<any> {

    let params = { searchBy, search, sortBy, sortOrder, offset, limit }

    let queryParams = queryString.stringify(params);
    let buildedUrl = `${this.baseUrl}?${queryParams}`;

    return fetch(buildedUrl)
      .then(response => this.handleErrors(response))
      .then(response => response.json())
  }

  getMovie(id: number): Promise<Response> {
    let buildedUrl = `${this.baseUrl}/${id}`;
    return fetch(buildedUrl)
      .then(response => this.handleErrors(response))
      .then(response => response.json())
  }
}
