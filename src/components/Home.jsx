import React, { useState } from "react";
import Movies from "../Moviezone/Movies";
import NavigationBar from "../Moviezone/NavigationBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <NavigationBar setCategory={setSelectedCategory} />
      <Movies category={selectedCategory} />
    </>
  );
};

export default Home;
