import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './images/weather.png';
import Star from "./images/star.png"



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
				<div>
					<h2 className='Nav-title'>Urban Weather At A Glance</h2>

					<Link className='saved-cities' to='/user_cities'>
						<img className = "star" title = "User Cities" src = {Star} alt="favorite-star-icon"/>
					</Link>
				</div>
			</div>
		);
};

export default NavigationBar;