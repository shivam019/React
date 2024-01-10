import React from 'react';


const Header = () => {
  return (
    <div className='bg-pink-100 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <img className='h-20 w-30' src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png' alt='Swiggy Logo' />

        <ul className='flex space-x-6'>
          <li className='text-gray-800 hover:text-red-600 transition duration-300'>Home</li>
          <li className='text-gray-800 hover:text-red-600 transition duration-300'>Restaurants</li>
          <li className='text-gray-800 hover:text-red-600 transition duration-300'>Contact</li>
          <li className='text-gray-800 hover:text-red-600 transition duration-300'>Login / Signup</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
