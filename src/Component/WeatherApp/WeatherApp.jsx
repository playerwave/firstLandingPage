import "./WeatherApp.css";
import { MdOutlineSearch } from "react-icons/md";
import {
  WiDayCloudy,
  WiRainMix,
  WiWindy,
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiSnowflakeCold,
} from "react-icons/wi";
import { useState } from "react";

function WeatherApp() {
  let api_key = "e611bf0e66e7326f482ea23412b7aac3";

  const [wicon, setWicon] = useState(<WiDayCloudy />);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humanity = document.getElementsByClassName("humanity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humanity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temp[0].innerHTML = data.main.temp + "°c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(<WiDaySunny />);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(<WiCloudy />);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(<WiRainMix />);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(<WiRainMix />);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(<WiRain />);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(<WiRain />);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(<WiSnowflakeCold />);
    } else {
      setWicon(<WiDaySunny />);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <MdOutlineSearch />
        </div>
      </div>
      <div className="weather-icon">{wicon}</div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Chonburi</div>
      <div className="data-container">
        <div className="element">
          <div className="data">
            <div className="humanity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
