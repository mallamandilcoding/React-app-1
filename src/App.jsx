import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Team from "./pages/Team";
import ProductDetail from "./pages/ProductDetail";

// import Meal from "./FoodRecipie/Meal";
// import NavigationBar from "./FoodRecipie/NavigationBar";

const App = () => {
  // const [category, setCategoryText] = useState("canadian");
  // const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  return (
    <>
      {/* <NavigationBar
        setCategory={setCategoryText}
        setSearchText={setSearchText}
      />
      <Meal category={category} searchText={searchText} /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
