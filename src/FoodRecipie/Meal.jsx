import React, { useEffect, useState } from "react";
import "../css/FoodRecipieCss/Meal.css";

const Meal = ({ category }) => {
  //   console.log("the category is:" + category);
  const [mealData, setMealData] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + category
      );
      const data = await api.json();
      setMealData(data.meals);
      console.log("my data = ", data.meals);
    };
    fetchDataFromApi();
  }, [category]);

  return (
    <div className="container">
      {mealData.map((meal) => (
        <div key={meal.idMeal} className="card-div">
          <img src={meal.strMealThumb} alt="meal image" className="img-card" />
          <p>{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
};

export default Meal;
