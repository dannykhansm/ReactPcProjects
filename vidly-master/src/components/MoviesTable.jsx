import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/Table";

class MoviesTable extends Component {
  column = [
    { path: "title", Title: "Title" },
    { path: "genre.name", Title: "Genre" },
    { path: "numberInStock", Title: "Stock" },
    { path: "dailyRentalRate", Title: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        column={this.column}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
