import React from "react";

function MovieForm({ match, history }) {
  const handleBack = () => {
    history.push("/movies");
  };
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button className="btn btn-primary m-2" onClick={() => handleBack()}>
        Save
      </button>
    </div>
  );
}

export default MovieForm;
