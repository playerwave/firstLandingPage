import "./WeatherApp.css";
import { MdOutlineSearch } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";

function WeatherApp() {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <MdOutlineSearch />
        </div>
      </div>
      <div className="weather-icon">
        <WiDayCloudy />
      </div>
      <div className="weather-temp">24 celsius</div>
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
                <div className="humanity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
