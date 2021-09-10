import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

function SearchWeather({ handleChangeWeather }) {
  const [inputValue, setInputValue] = useState("Curitiba");

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = () => {
    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, inputValue));
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchWeather;
