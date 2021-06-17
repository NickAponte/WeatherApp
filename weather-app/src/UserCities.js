import React from 'react';
import CityCard from './CityCard';

import AddUserCity from './AddUserCity';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const UserCities = (city) => {
    
    
    

    const addCity = (city) => {

    
       let cityArray = localStorage.getObj('city');
        
        
        if(cityArray === null){
            cityArray = []
        }
        
        if(cityArray.length === 0){
            cityArray.push(city);
            
            localStorage.setObj('city', cityArray);
            window.location.reload();

            
        }
        if (!cityArray.includes(city)) {
					cityArray.push(city);
					
					localStorage.setObj('city', cityArray);
					cityArray = localStorage.getObj('city');
					window.location.reload();
				}
        
    }

    
    let cityArray = localStorage.getObj("city")

    

    return (
			<div>
				<AddUserCity addCity={addCity} />
				<div className='cardContainer'>
					{cityArray
						? cityArray.map((city) => {
								return <CityCard key = {city} city={city} />;
						  })
						: null}
				</div>
			</div>
		);
};

export default UserCities;