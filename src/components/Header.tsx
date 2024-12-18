import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/component/Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>URLog</Link>
      </div>
      <nav className='nav-links'>
        {/* <Link to='/home'>Home</Link> */}
        {/* <Link to='/detail'>Detail</Link> */}
      </nav>
    </header>
  );
};

export default Header;
