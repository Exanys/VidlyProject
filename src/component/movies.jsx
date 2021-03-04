import MoviesTable from "./moviesTable";

function Movies({ length, movies, changeLike, deleteMovie, onSort, sortCol }) {
  if (length === 0) return <p>There is no movie in database.</p>;

  return (
    <div>
      <p>Showing {length} movies in database.</p>
      <MoviesTable
        movies={movies}
        changeLike={changeLike}
        deleteMovie={deleteMovie}
        onSort={onSort}
        sortCol={sortCol}
      />
    </div>
  );
}

export default Movies;

// import React, { useState, useEffect } from "react";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
// import Pagination from "./common/pagination";
// import Genres from "./common/genres";
// import _ from "lodash";
// import MoviesTable from "./moviesTable";

// function Movies() {
//   const [movies, setMovies] = useState([]);
//   const [pageSize] = useState(4);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [genres, setGenres] = useState([]);
//   const [currentGenre, setCurrentGenre] = useState("null");
//   const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

//   useEffect(() => {
//     setMovies(getMovies());
//     setGenres(getGenres());
//   }, []);

//   const getPagedData = () => {
//     const genreMovies =
//       currentGenre !== "null"
//         ? movies.filter((m) => m.genre._id === currentGenre._id)
//         : movies;
//     const sorted = _.orderBy(
//       genreMovies,
//       [sortColumn.path],
//       [sortColumn.order]
//     );
//     const pageMovies = paginate(sorted, currentPage, pageSize);

//     return { length: genreMovies.length, data: pageMovies };
//   };

//   const { length, data: pageMovies } = getPagedData();

//   const genreChange = (genre) => {
//     setCurrentGenre(genre);
//     setCurrentPage(1);
//   };

//   const pageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const deleteMovie = (id) => {
//     setMovies(movies.filter((movie) => movie._id !== id));
//   };

//   const changeLike = (movie) => {
//     const movs = [...movies];
//     const index = movs.indexOf(movie);
//     movs[index] = { ...movie };
//     movs[index].like = !movs[index].like;
//     setMovies(movs);
//   };

//   const onSort = (sCol) => {
//     setSortColumn(sCol);
//   };

//   return (
//     <main className="container">
//       <div className="row">
//         <div className="col-3">
//           <Genres
//             genres={genres}
//             currentGenre={currentGenre}
//             genreChange={genreChange}
//           />
//         </div>
//         <div className="col-9">
//           <div>
//             <p>There is no movies in database.</p>;
//             <div>
//               <p>There is {length} movies in database.</p>
//               <MoviesTable
//                 movies={pageMovies}
//                 changeLike={changeLike}
//                 deleteMovie={deleteMovie}
//                 onSort={onSort}
//                 sortCol={sortColumn}
//               />
//             </div>
//           </div>
//           <Pagination
//             length={length}
//             size={pageSize}
//             pageChange={pageChange}
//             currentPage={currentPage}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Movies;
