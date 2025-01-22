import React from 'react';
// import ReactGA from 'react-ga4'; // 1. GA 관련 import 추가
// import TagManager from 'react-gtm-module'; // 3. GTM 관련 import 추가
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
import '../styles/navigation/RootNav.css';

const RootNavigator: React.FC = () => {
  // useEffect(() => {
  //   const page_path = `${window.location.pathname}${window.location.hash}`;
  //   const page_title = document.title;

  //   // ReactGA.send({
  //   //   hitType: 'pageviewInCode',
  //   //   page: page_path,
  //   //   title: page_title,
  //   // });

  //   TagManager.dataLayer({
  //     dataLayer: {
  //       event: 'home_page_view',
  //       page_path,
  //       page_title,
  //     },
  //   });
  // }, []);

  return (
    <Router>
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
