import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../screens/LandingPage.tsx';
// import HomePage from '../screens/HomePage.tsx';
// import DetailPage from '../screens/DetailPage.tsx';
// import Sidebar from '../components/Sidebar.tsx';
import Header from '../components/Header.tsx';
import '../styles/navigation/RootNav.css';

const RootNavigator: React.FC = () => {
  return (
    <Router>
      <div className='MainBox'>
        <Header />
        {/* <Sidebar /> */}

        <div className='MainNavigation'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            {/* <Route path='/home' element={<HomePage />} /> */}
            {/* <Route path='/detail' element={<DetailPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default RootNavigator;
