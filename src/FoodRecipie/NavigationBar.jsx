import React from "react";

const NavigationBar = ({ setCategory, setSearchText }) => {
  const handleCategory = (e) => {
    const buttonText = e.target.innerText.toLowerCase();
    setCategory(buttonText);
    // alert(buttonText);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
    // console.log(searchText);
  };
  return (
    <div>
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
          Indian
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg fw-bold"
          onClick={handleCategory}
        >
          Japanese
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg fw-bold"
          onClick={handleCategory}
        >
          American
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-lg fw-bold"
          onClick={handleCategory}
        >
          Thai
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg fw-bold"
          onClick={handleCategory}
        >
          British
        </button>
        <button
          type="button"
          className="btn btn-outline-warning btn-lg fw-bold"
          onClick={handleCategory}
        >
          Russian
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-lg fw-bold"
          onClick={handleCategory}
        >
          Chinese
        </button>
      </div>
      <div>
        <input
          type="textl"
          className="form-control"
          id="searchText"
          placeholder="Search !!!"
          style={{ width: "600px", margin: "0 auto" }}
          onKeyUp={handleSearch}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
