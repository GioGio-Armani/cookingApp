import React from "react";

const Card = ({ meal }) => {
  const youtube = "https://www.youtube.com/embed/" + meal.strYoutube.slice(-11);
  return (
    <div className="mealContainer">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>Ingredient :</p>
      <ul>
        {meal.strIngredient1 && (
          <li>
            {meal.strIngredient1} : {meal.strMeasure1}
          </li>
        )}
        {meal.strIngredient2 && (
          <li>
            {meal.strIngredient2} : {meal.strMeasure2}
          </li>
        )}
        {meal.strIngredient3 && (
          <li>
            {meal.strIngredient3} : {meal.strMeasure3}
          </li>
        )}
        {meal.strIngredient4 && (
          <li>
            {meal.strIngredient4} : {meal.strMeasure4}
          </li>
        )}
        {meal.strIngredient5 && (
          <li>
            {meal.strIngredient5} : {meal.strMeasure5}
          </li>
        )}
        {meal.strIngredient6 && (
          <li>
            {meal.strIngredient6} : {meal.strMeasure6}
          </li>
        )}
        {meal.strIngredient7 && (
          <li>
            {meal.strIngredient7} : {meal.strMeasure7}
          </li>
        )}
        {meal.strIngredient8 && (
          <li>
            {meal.strIngredient8} : {meal.strMeasure8}
          </li>
        )}
        {meal.strIngredient9 && (
          <li>
            {meal.strIngredient9} : {meal.strMeasure9}
          </li>
        )}
        {meal.strIngredient10 && (
          <li>
            {meal.strIngredient10} : {meal.strMeasure10}
          </li>
        )}
        {meal.strIngredient11 && (
          <li>
            {meal.strIngredient11} : {meal.strMeasure11}
          </li>
        )}
        {meal.strIngredient12 && (
          <li>
            {meal.strIngredient12} : {meal.strMeasure12}
          </li>
        )}
        {meal.strIngredient13 && (
          <li>
            {meal.strIngredient13} : {meal.strMeasure13}
          </li>
        )}
        {meal.strIngredient14 && (
          <li>
            {meal.strIngredient14} : {meal.strMeasure14}
          </li>
        )}
        {meal.strIngredient15 && (
          <li>
            {meal.strIngredient15} : {meal.strMeasure15}
          </li>
        )}
        {meal.strIngredient16 && (
          <li>
            {meal.strIngredient16} : {meal.strMeasure16}
          </li>
        )}
        {meal.strIngredient17 && (
          <li>
            {meal.strIngredient17} : {meal.strMeasure17}
          </li>
        )}
        {meal.strIngredient18 && (
          <li>
            {meal.strIngredient18} : {meal.strMeasure18}
          </li>
        )}
        {meal.strIngredient19 && (
          <li>
            {meal.strIngredient19} : {meal.strMeasure19}
          </li>
        )}
        {meal.strIngredient20 && (
          <li>
            {meal.strIngredient20} : {meal.strMeasure20}
          </li>
        )}
      </ul>
      <div className="meal-instruction-container">
        <p className="meal-instruction">{meal.strInstructions}</p>
      </div>
      <iframe
        width="560"
        height="315"
        src={youtube}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* // embed video youtube : https://www.youtube.com/embed/{meal.strYoutube.slice(-11)} */}

      <p>Source :</p>

      <a href={meal.strSource}>See Source</a>
    </div>
  );
};

export default Card;
