import React, { useState, useEffect } from "react";
//import "./App.css";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import Movies from "./movies";
import Pagination from "./common/pagination";
import Genres from "./common/genres";
import _ from "lodash";

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("null");
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

  const getPagedData = () => {
    const genreMovies =
      currentGenre !== "null"
        ? movies.filter((m) => m.genre._id === currentGenre._id)
        : movies;
    const sorted = _.orderBy(
      genreMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const pageMovies = paginate(sorted, currentPage, pageSize);

    return { length: genreMovies.length, data: pageMovies };
  };

  const { length, data: pageMovies } = getPagedData();

  const genreChange = (genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1);
  };

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  const changeLike = (movie) => {
    const movs = [...movies];
    const index = movs.indexOf(movie);
    movs[index] = { ...movie };
    movs[index].like = !movs[index].like;
    setMovies(movs);
  };

  const onSort = (sCol) => {
    setSortColumn(sCol);
  };

  return (
      <div className="row">
        <div className="col-3">
          <Genres
            genres={genres}
            currentGenre={currentGenre}
            genreChange={genreChange}
          />
        </div>
        <div className="col-9">
          <Movies
            movies={pageMovies}
            length={length}
            changeLike={changeLike}
            deleteMovie={deleteMovie}
            sortCol={sortColumn}
            onSort={onSort}
          />
          <Pagination
            length={length}
            size={pageSize}
            pageChange={pageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
  );
}

export default MoviePage;

//import './App.css';
// import Movies from "./component/movies";

// function App() {

//   return (
//     <Movies />
//   );
// }

// export default App;
