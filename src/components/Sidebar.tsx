import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar'>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/detail'>Detail</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
