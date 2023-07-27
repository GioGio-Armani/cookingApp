import React, { useState } from "react";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Meals from "../components/Meals";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="home">
      <Logo />
      <Input onInputChange={handleInputChange} />
      <Meals inputValue={inputValue} />
    </div>
  );
};

export default Home;
