import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const API_KEY = process.env.REACT_APP_API_KEY;
const CityCard = ({  city }) => {
	const [weatherData, setWeatherData] = useState([]);
	useEffect(() => {
        console.log(API_KEY)
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

	return (
		<>
			{weatherData.weather ? (
				<div className='card' key={city}>
					<Link className='link' to={`/details/${city}`}>
						
						<h3>
							{weatherData.name}, {weatherData.sys.country}
						</h3>
						<p>{weatherData.main.temp}&deg;F</p>

						<p>{weatherData.weather[0].description}</p>
						
						<img
							src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt = "weather-icon"
						/>
					</Link>
				</div>
			) : null}
		</>
	);
};

export default CityCard;