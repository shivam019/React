import React from 'react'
import "./css/Header.css"

const Header = () => {
  return (
    <>
     <div className='navbar'>


     <img className='logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png' alt='SwiggyLogo'></img>

     <ul className='nav-links'>
      <li>Home</li>
      <li>Resturents</li>
      <li>Contact</li>
      <li>Login / Signup</li>
  </ul>
</div>
   </>
  )
}

export default Header