import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SwiggyRestaurantList = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [responseList, setResponseList] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    const fetchSwiggyData = async () => {
      try {
        const swiggyUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&is-seo-homepage-enabled=true`;
        const response = await axios.get(swiggyUrl);
        setResponseList(response.data);
      } catch (error) {
        console.error('Error fetching Swiggy data:', error.message);
      }
    };

    getLocation();

    if (location.lat !== null && location.lng !== null) {
      fetchSwiggyData();
    }
  }, [location.lat, location.lng]);

  return (
    <div>
      <h1>Swiggy Restaurant List</h1>
      {location.lat !== null && location.lng !== null ? (
        <div>
          <p>
            Your current location: {location.lat}, {location.lng}
            <br />
            Swiggy URL with location: {`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&is-seo-homepage-enabled=true`}
          </p>
          {responseList ? (
            <div>
              <h2>Swiggy Response</h2>
              <pre>{JSON.stringify(responseList, null, 2)}</pre>
            </div>
          ) : (
            <p>Fetching Swiggy data...</p>
          )}
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default SwiggyRestaurantList;
