import React, { useState } from "react";
import Meal from "./FoodRecipie/Meal";
import NavigationBar from "./FoodRecipie/NavigationBar";

const App = () => {
  const [category, setCategory] = useState("canadian");
  return (
    <>
      <NavigationBar setCategory={setCategory} />
      <Meal category={category} />
    </>
  );
};

export default App;
