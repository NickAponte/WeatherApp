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
            cityArray = [];
        }
        
        
        if (!cityArray.includes(city.toUpperCase())) {
					cityArray.push(city.toUpperCase());
					
					localStorage.setObj('city', cityArray);
					window.location.reload();
				}
        
    }//addCity

    
    let cityArray = localStorage.getObj("city")

    

    return (
			<div>
				<AddUserCity addCity={addCity} />
				<div className='cardContainer'>
					{cityArray
						? cityArray.map((city) => {
								return <CityCard key = {city} city={city} displayDeleteLink={true} />;
						  })
						: null}
                    
				</div>
                
			</div>
		);
};

export default UserCities;