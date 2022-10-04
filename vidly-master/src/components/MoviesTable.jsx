import React, { Component } from "react";
import Like from "./common/Like";
import TableHeader from "./common/TableHeader";

class MoviesTable extends Component {
  column = [
    { path: "title", Title: "Title" },
    { path: "genre.name", Title: "Genre" },
    { path: "numberInStock", Title: "Stock" },
    { path: "dailyRentalRate", Title: "Rate" },
    { key: "like" },
    { key: "del" },
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          column={this.column}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
