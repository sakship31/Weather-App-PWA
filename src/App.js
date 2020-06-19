import React, { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            console.log(data)
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input type="text"className="search"placeholder="Enter the city name..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                  <Flippy
                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                //   ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                //   style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                >
                    <FrontSide>
                <div className="city">
                    <div className="flip">
                        Flip for more details
                    </div>
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
                </FrontSide>
                <BackSide>
                <div className="city">
                    <h3 className="city-name1">
                        <span>Pressure: {weather.main.pressure} hPa</span>
                        {/* <sup>{weather.sys.country}</sup> */}
                    </h3>
                    <h3 className="city-name1">
                        <span>Humidity: {weather.main.humidity} %</span>
                        {/* <sup>{weather.sys.country}</sup> */}
                    </h3>
                    <h3 className="city-name1">
                        <span>Wind Speed: {weather.wind.speed} meter/sec</span>
                        {/* <sup>{weather.sys.country}</sup> */}
                    </h3>
                    <h3 className="city-name1">
                        <span>Wind Direction: {weather.wind.deg} &deg;</span>
                        {/* <sup>{weather.sys.country}</sup> */}
                    </h3>
                    <h3 className="city-name1">
                        <span>Clouds: {weather.clouds.all} %</span>
                        {/* <sup>{weather.sys.country}</sup> */}
                    </h3>
                </div>
                </BackSide>
                </Flippy>
            )}
            {!weather.main &&(
                <div className="city2">
                    <span className="p1">Please enter a valid city name!</span>
                </div>
            )}
        </div>
    );
}

export default App;