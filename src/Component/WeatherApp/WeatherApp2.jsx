import React, { useState } from "react";
import "./WeatherApp.css"; // ต้องการไฟล์ CSS ที่มีสไตล์ของคุณ
import { MdOutlineSearch } from "react-icons/md";
import {
  WiDayCloudy,
  WiRainMix,
  WiStrongWind,
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiSnowflakeCold,
  WiRaindrop,
} from "react-icons/wi";

function WeatherApp2() {
  const api_key = "e611bf0e66e7326f482ea23412b7aac3";

  const [wicon, setWicon] = useState(<WiDayCloudy />);

  const search = async () => {
    const cityInput = document.querySelector(".cityInput");

    if (!cityInput.value) {
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${api_key}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const humanity = document.querySelector(".humanity-percent");
      const wind = document.querySelector(".wind-rate");
      const temp = document.querySelector(".weather-temp");
      const location = document.querySelector(".weather-location");

      humanity.textContent = data.main.humidity + " %";
      wind.textContent = data.wind.speed + " km/h";
      temp.textContent = data.main.temp + "°c";
      location.textContent = data.name;

      switch (data.weather[0].icon) {
        case "01d":
        case "01n":
          setWicon(<WiDaySunny />);
          break;
        case "02d":
        case "02n":
          setWicon(<WiCloudy />);
          break;
        case "03d":
        case "03n":
        case "04d":
        case "04n":
          setWicon(<WiRainMix />);
          break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          setWicon(<WiRain />);
          break;
        case "13d":
        case "13n":
          setWicon(<WiSnowflakeCold />);
          break;
        default:
          setWicon(<WiDaySunny />);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={search}>
          <MdOutlineSearch />
        </div>
      </div>
      <div className="weather-icon">{wicon}</div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Chonburi</div>
      <div className="data-container">
        <div className="element">
          <div className="data">
            <WiRaindrop className="icon" />
            <div className="humanity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <WiStrongWind className="icon" />
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp2;
