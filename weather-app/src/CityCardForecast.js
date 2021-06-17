import React, { useState, useEffect } from 'react';
import './App.css';
import Moment from 'moment';

const API_KEY = process.env.REACT_APP_API_KEY;

const CityCardForecast = ({ match }) => {
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		const url = `https://api.openweathermap.org/data/2.5/forecast?q=${match.params.city}&units=imperial&appid=${API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setWeatherData(res);
				
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.city]);

	function displayWeatherData() {
		const parentBoxes = [];

		let i = 0;
		while( i <= 35) {
			let childBoxes = [];
			
			for (let j = i ; j <= i + 7; j++) {

				if((j) % 8 === 0)
				{
					
					childBoxes.push(
						<div className='dateHeader'>
							Date: {Moment(weatherData.list[j].dt_txt).format('MM-DD-YYYY')}
						</div>
					); 
				}
				childBoxes.push(
					<div className="childBox" >
						<ul>
							<h3> {Moment(weatherData.list[j].dt_txt).format('hh:mm A')}</h3>
							<img
								alt = "weather-icon" src={`http://openweathermap.org/img/wn/${weatherData.list[j].weather[0].icon}.png`}
							/>
							<li>Weather: {weatherData.list[j].weather[0].main}</li>
							<li>Temp: {weatherData.list[j].main.temp} &deg;F </li>
						</ul>
					</div>
				);
				
			} 

			parentBoxes.push(<div className='parentBox'>{childBoxes}</div>);
			i = i + 8;
		} 

		return <div className='boxContainer'>{parentBoxes}</div>;
	} 
	
	
	return (
		<>
			{weatherData.list ? (
				<div>
					<div className="city-header">
						<h2>5 Day Forecast For {match.params.city}</h2>
					</div>
					<div>{displayWeatherData()}</div>
				</div>
			) : null}
		</>
	); 
}; 

export default CityCardForecast;