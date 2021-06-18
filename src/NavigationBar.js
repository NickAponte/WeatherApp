import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './images/weather.png';
import Star from "./images/star.png"
import Map from "./images/map.jpeg"
import City from "./images/city.png"



const NavigationBar = () => {
    return (
			<div className='mainNavContainer'>
				<Link to='/'>
					<img
						className='logo'
						src={logo}
						title='Go home'
						alt='Sun and Clouds'
					/>
				</Link>
                <Link to='/map'>
					<img
						className='map'
						src={Map}
						title='View Map'
						alt='Map Link'
					/>
				</Link>
				<div>
					{/* <h2 className='Nav-title'>City Weather</h2> */}

					<Link className='saved-cities' to='/user_cities'>
						<img className = "star" title = "User Cities" src = {City} alt="favorite-star-icon"/>
					</Link>
				</div>
			</div>
		);
};

export default NavigationBar;