import React, { useState } from "react";
import Meal from "./FoodRecipie/Meal";
import NavigationBar from "./FoodRecipie/NavigationBar";

const App = () => {
  const [category, setCategoryText] = useState("canadian");
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);
  return (
    <>
      <NavigationBar
        setCategory={setCategoryText}
        setSearchText={setSearchText}
      />
      <Meal category={category} searchText={searchText} />
    </>
  );
};

export default App;
