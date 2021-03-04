import React from "react";

function MovieContent({ match, history }) {
  const handleBack = () => {
    history.replace("/movies");
  };
  return (
    <div>
      <h1>Movie From {match.params.id}</h1>
      <button className="btn btn-primary m-2" onClick={() => handleBack()}>
        Save
      </button>
    </div>
  );
}

export default MovieContent;
