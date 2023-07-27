import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meals = ({ inputValue }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .post(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
      )
      .then((res) => {
        if (res.data.meals === null) {
          setMeals([]);
        } else {
          setMeals(res.data.meals);
        }
      });
  }, [inputValue]);
  return (
    <div className="mealsContainer">
      {meals.length === 0 ? (
        <p>Aucun repas trouvé pour "{inputValue}"</p>
      ) : (
        <ul className="cards-ul">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="cards">
              <Card meal={meal} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Meals;
