import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const API_KEY = process.env.REACT_APP_API_KEY;
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const CityCard = ({  city, displayDeleteLink }) => {
	const [weatherData, setWeatherData] = useState([]);
    console.log("city passed here=" + city)
	useEffect(() => {
      
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setWeatherData(res);
				
			})
			.catch((err) => {
				console.error(err);
			});
		
	}, [city]);



    
function deleteCity (cityName){
    console.log("Deleted " + city.toUpperCase());
    let cityArray = localStorage.getObj('city');
    cityArray.splice(cityArray.indexOf(cityName),1)
    console.log(cityArray);
    localStorage.setObj('city', cityArray);
    window.location.reload();
}
	return (
		<>
			{weatherData.weather ? (
				<div className='card' key={city}>
                    
					<Link className='link' to={`/forecast/${city}`}>
						
						<h3>
							{weatherData.name}, {weatherData.sys.country}
						</h3>
						<p>{weatherData.main.temp}&deg;F</p>

						<p>{weatherData.weather[0].description}</p>
						
						<img
							src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt = "weather-icon"
						/>
					</Link>
                    {displayDeleteLink ? (<button className = "deleteBttn" onClick={() => deleteCity(city)}>Delete city</button>): null }
				</div>
			) : null}
		</>
	);
};

export default CityCard;