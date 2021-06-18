import { Route } from 'react-router-dom';
import React, {  useEffect } from 'react';
import Home from './HomePage.js';
import './App.css';
import NavigationBar from './NavigationBar';
import CityCardForecast from './CityCardForecast';
import UserCities from './UserCities';
import MapComponent from "./MapView";
function App() {
useEffect(() => {
	document.title = 'WeatherApp';
}, []);
	return (
		<>
			<header>
				<nav className='topNavBar'>
					<NavigationBar />
				</nav>
			</header>
			<main>
				<Route path='/' exact component={Home} />

				<Route
					path='/forecast/:city' 
					render={(routerProps) => <CityCardForecast match={routerProps.match} />}
				/>
				<Route path='/user_cities' component={UserCities} />
        <Route path ="/map" component = {MapComponent}/>
			</main>
			{/* <footer>
				<div className='footer'>
					<br></br>
					<p className='copyright'>Data from OpenWeatherAPI &copy;</p>
				</div>
			</footer> */}
		</>
	);
}

export default App;
