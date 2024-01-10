import React, { useState } from 'react';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "KFC", rating: 4 },
    { id: 2, name: "Dominos", rating: 3 },
    { id: 3, name: "Subway", rating: 5 }
  ]);

  const filterTopRatedRestaurants = () => {
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.rating >= 4);
    setRestaurants(filteredRestaurants);
  };

  const resetRestaurants = () => {
    setRestaurants([
      { id: 1, name: "KFC", rating: 4 },
      { id: 2, name: "Dominos", rating: 3 },
      { id: 3, name: "Subway", rating: 5 }
    ]);
  };

  return (
    <div className="mx-auto">
      <h1 className="text-4xl text-center py-5">Restaurants Nearby</h1>

      <button className="py-2 px-4 bg-blue-500 text-white rounded-md mr-2" onClick={filterTopRatedRestaurants}>
        Top Rated
      </button>
      <button className="py-2 px-4 bg-gray-500 text-white rounded-md" onClick={resetRestaurants}>
        View All
      </button>

      <table className="table-auto mx-auto mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
         { restaurants.map( res => (
            <tr key={res.id}>
             <td> {res.name}</td>
             <td> {res.rating}</td>
            </tr>
          
         ))}



         
        </tbody>
      </table>

      {/* <div className='mx-auto grid lg:*:grid-cols-4 gap-5 px-20'>
      <div>
          <img src=''></img>
          <h3> Rating: </h3>
          <p>  Product: </p>
        </div>

        <div>
          <img src=''></img>
          <h3> Rating: </h3>
          <p>  Product: </p>
        </div>

        <div>
          <img src=''></img>
          <h3> Rating: </h3>
          <p>  Product: </p>
        </div>

        <div>
          <img src=''></img>
          <h3> Rating: </h3>
          <p>  Product: </p>
        </div>
      
      
      </div> */}
      {/* <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id} className="py-2">
            {restaurant.name} - Rating: {restaurant.rating}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Restaurants;
