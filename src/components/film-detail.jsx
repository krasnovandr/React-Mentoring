import React from "react";

export function FilmDetails(props) {
  const filmData = props.value;

  return (
    <div>
      <img src={filmData.poster_path} />
      <div>{filmData.title}</div>
      <div> {filmData.release_date}</div>
      <div> {filmData.overview}</div>
      <div />
    </div>
  );
}
