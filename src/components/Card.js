import React from "react";

const Card = ({ meal }) => {
  console.log(meal);
  return (
    <div className="mealContainer">
      <h3>{meal.strMeal}</h3>
    </div>
  );
};

export default Card;
