import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

function MoviesTable({ movies, changeLike, deleteMovie, onSort, sortCol }) {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like onClick={() => changeLike(movie)} like={movie.like} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger m-2"
          onClick={() => deleteMovie(movie._id)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table data={movies} sortCol={sortCol} onSort={onSort} columns={columns} />
  );
}

export default MoviesTable;
