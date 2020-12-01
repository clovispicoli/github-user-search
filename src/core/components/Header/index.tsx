import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const Header = () => {
   return (
      <nav className="navbar">
         <Link to='/'>
            <h1 className='title'>Bootcamp DevSuperior</h1>
         </Link>
      </nav>
   );
}

export default Header;