import React from 'react'
import "./Navbar.css"
import Search from '../Search'
import { BrowserRouter ,Link,Route,Routes} from 'react-router-dom'



function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        
          <img className='logo-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png' alt='Logo'/>

        

      </div>
     
     <ul className='nav_links'>
      <li className='nav_link'>Home</li>
      <li className='nav_link' >Tv shows</li>
      <li className='nav_link'>Movies</li>
      <li className='nav_link'>Latest</li>

      <li className='nav_link'>My list</li>
     </ul> 
      
     

   
    
     <Search/>
    
      
    </div>
  )
}

export default Navbar
