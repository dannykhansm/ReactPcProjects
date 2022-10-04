import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    geners: [],
    sortColumn: { path: "title", order: "asc" },
    currentPage: 1,
    pageSize: 4,
  };
  componentDidMount() {
    const geners = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), geners });
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
  handleGenresSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) return <p>There are no Movies in the database</p>;
    const { totalCount, data: movies } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-sm-3">
          <ListGroup
            items={this.state.geners}
            // we hava assign same value as defaultProps textProperty="name" valueProperty="_id"
            onItemSelect={this.handleGenresSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} Movies in Database</p>
          <MoviesTable
            sortColumn={sortColumn}
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
