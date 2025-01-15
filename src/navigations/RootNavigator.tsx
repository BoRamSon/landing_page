import React, { useEffect } from 'react';
import ReactGA from 'react-ga4'; // 1. GA 관련 import 추가
import TagManager from 'react-gtm-module'; // 4. GTM 관련 import 추가
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header.tsx';
// import Sidebar from '../components/Sidebar.tsx';
// import Button from '../components/ButtonBasic.tsx';
// import DownloadButton from '../components/ButtonDownload.tsx';
import LandingPage from '../screens/LandingPage.tsx';
import NoticePage from '../screens/NoticePage.tsx';
// import HomePage from '../screens/HomePage.tsx';
// import DetailPage from '../screens/DetailPage.tsx';
import Footer from '../components/Footer.tsx';
import '../styles/navigation/RootNav.css';

// 3. 페이지뷰 전송
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // 해시 URL 변경 시 페이지뷰 전송
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search + location.hash,
    });
  }, [location]);

  return null;
};

const RootNavigator: React.FC = () => {
  // 2. GA 초기화
  useEffect(() => {
    ReactGA.initialize(`${import.meta.env.VITE_GA_MEASUREMENT_ID}`);
  }, []);

  // 5. GTM 초기화
  useEffect(() => {
    TagManager.initialize({
      gtmId: 'GTM-NTWJC77J',
    });
  }, []);

  return (
    <Router>
      <TrackPageView />
      <div className='MainBox'>
        <Header />
        {/* <Button /> */}
        {/* <Sidebar /> */}

        <div className='MainNavigation'>
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
