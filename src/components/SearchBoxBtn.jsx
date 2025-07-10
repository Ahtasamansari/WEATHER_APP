import React, { useState } from "react";
import "./SearchBox.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function SearchBoxBtn({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = `http://api.openweathermap.org/data/2.5/forecast`;
  const API_KEY = "5991e00dd369486a830303e824e206f5";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const jsonResponse = await response.json();

    if (jsonResponse.cod !== "200") {
      throw new Error("City not found");
    }

    const firstForecast = jsonResponse.list[0];

    return {
      city: jsonResponse.city.name,
      temp: firstForecast.main.temp,
      temp_min: firstForecast.main.temp_min,
      temp_max: firstForecast.main.temp_max,
      humidity: firstForecast.main.humidity,
      feels_like: firstForecast.main.feels_like,
      weather:
        firstForecast.weather && firstForecast.weather.length > 0
          ? firstForecast.weather[0].description
          : "",
    };
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Search">
      <h2>Search for Weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="Search City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place found.</p>}
      </form>
    </div>
  );
}

export default SearchBoxBtn;
