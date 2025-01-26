import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header.tsx';
// import Sidebar from '../components/Sidebar.tsx';
// import Button from '../components/ButtonBasic.tsx';
// import DownloadButton from '../components/ButtonDownload.tsx';
import LandingPage from '../screens/LandingPage.tsx';
import NoticePage from '../screens/NoticePage.tsx';
// import HomePage from '../screens/HomePage.tsx';
// import DetailPage from '../screens/DetailPage.tsx';
import Footer from '../components/Footer.tsx';

const RootNavigator: React.FC = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {/* <Button /> */}
        {/* <Sidebar /> */}

        <div className='flex-1 w-full'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/notice' element={<NoticePage />} />
            {/* <Route path='/home' element={<HomePage />} /> */}
            {/* <Route path='/detail' element={<DetailPage />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default RootNavigator;
