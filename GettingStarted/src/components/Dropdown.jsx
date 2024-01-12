import React, { useState, useEffect } from 'react';

const Dropdown = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [searchres, setSearchres] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const states = ['Maharashtra', 'Goa', 'UP'];
  const cities = {
    'Maharashtra': ['NGP', 'Mumbai', 'Pune'],
    'Goa': ['Panji', 'Margao', 'Vasco'],
    'UP': ['Lucknow', 'Kanpur', 'Agra'],
  };

  const towns = {
    'NGP': ['Town 1-1-1', 'Town 1-1-2', 'Town 1-1-3'],
    'Panji': ['Town 2-1-1', 'Town 2-1-2', 'Town 2-1-3'],
    'Lucknow': ['Town 3-1-1', 'Town 3-1-2', 'Town 3-1-3'],
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      const dummyData = [
        { id: 1, name: "KFC", rating: 4, State: "Maharashtra", City: "NGP", towns: "Town 1-1-1" },
        { id: 2, name: "Dominos", rating: 3, State: "Goa", City: "Panji", towns: "Town 2-1-1" },
        { id: 3, name: "Subway", rating: 5, State: "UP", City: "Lucknow", towns: "Town 3-1-1" }
      ];
      setRestaurants(dummyData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedCity('');
    setSelectedTown('');
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    setSelectedTown('');
  };

  const handleTownChange = (e) => {
    const newTown = e.target.value;
    setSelectedTown(newTown);
  };

  const handleResSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchres(searchTerm);
  };

  const filteredRestaurants = restaurants.filter((res) =>
    (selectedState === '' || res.State === selectedState) &&
    (selectedCity === '' || res.City === selectedCity) &&
    (selectedTown === '' || res.towns === selectedTown) &&
    res.name.toLowerCase().includes(searchres.toLowerCase())
  );

  return (
    <div>
      <label className='mx-4 py-2 select-all'> Search:</label>
      <input
        type='search'
        className=" py-2 border-solid border-2 border-indigo-600"
        placeholder='search restaurant'
        onChange={handleResSearch}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td className="border px-4 py-2">{restaurant.id}</td>
                <td className="border px-4 py-2">{restaurant.name}</td>
                <td className="border px-4 py-2">{restaurant.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}


      <label>State:</label>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <>
          <label>City:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {cities[selectedState].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedCity && (
        <>
          <label>Town:</label>
          <select value={selectedTown} onChange={handleTownChange}>
            <option value="">Select Town</option>
            {towns[selectedCity].map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default Dropdown;
