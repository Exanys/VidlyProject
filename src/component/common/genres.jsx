import React from "react";

function Genres({ genres, currentGenre, genreChange }) {
  return (
    <ul className="list-group">
      <li
        key="1"
        className={
          currentGenre === "null" ? "list-group-item active" : "list-group-item"
        }
        onClick={() => {
          genreChange("null");
        }}
      >
        All genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            genre === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => {
            genreChange(genre);
          }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default Genres;
