import React, {useState} from 'react';

const AddUserCity = ({addCity}) => {
   const [city, setCity] = useState("")
   const handleSubmit = (e) => {
       e.preventDefault();
       addCity(city)
   }
    return (
        <form className="saved-form" onSubmit={handleSubmit}>
            <label>City Name:</label>
            <input type="text" value={city} required onChange={(e)=> setCity(e.target.value)}/>
            <input className='add-city' type="submit" value="Add City" />
            
        </form>
    );
};

export default AddUserCity;