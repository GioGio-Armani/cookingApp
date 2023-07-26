import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("tomato");

  //   const getMeals = () => {
  axios
    .post(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((res) => {
      setMeals(res.data.meals);
    });
  //   };
  //   getMeals();
  return (
    <div className="mealsContainer">
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <Card meal={meal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
