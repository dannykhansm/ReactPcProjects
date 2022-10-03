import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
class Movies extends Component {
  state = {
    movies: [],
    geners: [],
    currentPage: 1,
    pageSize: 4,
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), geners: getGenres() });
  }
  handleDelete = (movie) => {
    const filterdMovies = this.state.movies.filter(
      (item) => item._id !== movie._id
    );
    this.setState({ movies: filterdMovies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };
  hanndlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenresSelect = (gener) => {
    console.log(gener);
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (count === 0) return <p>There are no Movies in the database</p>;
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-sm-3">
          <ListGroup
            items={this.state.geners}
            // textProperty="name"  // we hava assign same value as defaultProps
            // valueProperty="_id"
            onItemSelect={this.handleGenresSelect}
          />
        </div>
        <div className="col">
          <p>Showing {count} Movies in Database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.hanndlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
