import React, { useEffect, useState } from "react";

const Input = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Rechercher une recette"
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
