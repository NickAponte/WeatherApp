import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
const MapView = () => {
  const defaultPosition  = [44.967243, -103.771556]; 

  return (
    <div className="map__container">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
      <MapContainer center={defaultPosition} zoom={3} style={{ height: '100vh', width: '100%' }} onClick={(e) => console.log('click')}
        
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapView