import React from "react";

function Like({ like, onClick }) {
  const heart = () => {
    return like === true ? "" : "-o";
  };
  return (
    <i
      onClick={onClick}
      className={"fa fa-heart" + heart()}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
}

export default Like;
