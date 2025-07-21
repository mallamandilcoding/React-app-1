import React, { useEffect } from "react";
import { movies } from "./data";
import "../css/Movies.css";

const Movies = ({ category }) => {
  //   useEffect(() => {
  //     alert(category); // This will alert only when 'category' changes
  //   }, [category]);

  const filteredMovies =
    (category || "all") !== "all"
      ? movies.filter((movie) => movie.category.toLowerCase() === category)
      : movies;

  console.log(filteredMovies);

  const imgCard = {
    width: "250px",
    cursor: "pointer",
    borderRadius: "10px",
    border: "1px solid yellow",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "35px",
        flexWrap: "wrap",
        // backgroundColor: "yellow",
        width: "1200px",
        margin: "0 auto",
        padding: "20px",
        justifyContent: "flex-start",
      }}
    >
      {filteredMovies.map((movie) => (
        <div className="movie_card" style={{ flex: "0 1 auto" }} key={movie.id}>
          <img src={movie.poster_path} alt="" style={imgCard} />
          <h4
            style={{
              marginTop: "15px",
              width: "250px",
              wordBreak: "break-word",
              cursor: "default",
            }}
          >
            {movie.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Movies;
