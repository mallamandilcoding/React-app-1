import React from "react";

const NavigationBar = ({ setCategory }) => {
  const handleCategory = (e) => {
    const buttonText = e.target.innerText.toLowerCase();
    setCategory(buttonText);
    // alert(buttonText);
  };
  return (
    <div
      style={{
        width: "1200px",
        // backgroundColor: "purple",
        margin: "30px auto",
        display: "flex",
        gap: "20px",
        justifyContent: "space-evenly",
      }}
    >
      <button
        type="button"
        className="btn btn-outline-warning btn-lg fw-bold"
        onClick={handleCategory}
      >
        ALL
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-lg fw-bold"
        onClick={handleCategory}
      >
        Action
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg fw-bold"
        onClick={handleCategory}
      >
        Thriller
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-lg fw-bold"
        onClick={handleCategory}
      >
        Animation
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-lg fw-bold"
        onClick={handleCategory}
      >
        Horror
      </button>
      <button
        type="button"
        className="btn btn-outline-warning btn-lg fw-bold"
        onClick={handleCategory}
      >
        Drama
      </button>
      <button
        type="button"
        className="btn btn-outline-info btn-lg fw-bold"
        onClick={handleCategory}
      >
        Sci-fi
      </button>
    </div>
  );
};

export default NavigationBar;
