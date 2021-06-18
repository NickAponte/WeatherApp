import React from 'react';
import CityCard from './CityCard';
import './App.css';
let cityNames = [
	'Hong Kong',
	'Cairo',
	'Edinburgh',
	'London',
	'New York',
	'Boston',
	'Moscow',
	'Juneau',
	'Montevideo',
	'Tel Aviv',
	'Brussels',
	'Cape Town',
	'Rome',
	'Tokyo',
	'Manila',
	'Istanbul',
	

]; 
const HomePage = () => {
	return (
		<div className='cardContainer' >
			{cityNames.map((city) => {
				return <CityCard city={city} key = {city} />;
			})}
		</div>
	);
};

export default HomePage;