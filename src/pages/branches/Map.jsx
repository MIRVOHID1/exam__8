import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 41.2995, // Tashkent latitude
  lng: 69.2401  // Tashkent longitude
};

const locations = [
  { lat: 41.311151, lng: 69.279737, name: 'MAX WAY BERUNIY' },
  { lat: 41.327546, lng: 69.281708, name: 'MAX WAY ATLAS' },
  { lat: 41.298495, lng: 69.248273, name: 'MAX WAY -DRUJBA' },
  { lat: 41.291706, lng: 69.217529, name: 'MAX WAY MEGA PLANET' },
  { lat: 41.302580, lng: 69.257622, name: 'MAX WAY AVIASOZLAR' },
  { lat: 41.307204, lng: 69.255912, name: 'MAX WAY RISOVIY' },
  { lat: 41.2995, lng: 69.2401, name: 'MAX WAY BERUNIY' }
];

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY" // o'zingizning Google Maps API kalitingizni bu yerga yozing
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} label={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
