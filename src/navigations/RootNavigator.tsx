import React, { useEffect } from 'react';
import ReactGA from 'react-ga4'; // 1. GA 관련 import 추가
import TagManager from 'react-gtm-module'; // 3. GTM 관련 import 추가
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
  useEffect(() => {
    // 2. GA 초기화
    // ReactGA.initialize(`${import.meta.env.VITE_GA_MEASUREMENT_ID}`, {
    //   gtagOptions: {
    //     send_page_view: false, // 수동 페이지뷰 전송 설정
    //   },
    // });

    // 4. GTM 초기화
    // TagManager.initialize({ gtmId: `${import.meta.env.VITE_GTM_ID}` });

    // 5. 페이지뷰를 해시 라우팅에 맞게 전송
    const sendPageView = () => {
      const page_path = `${window.location.pathname}${window.location.hash}`;
      const page_title = document.title;

      // 5-1. GA에 페이지뷰 전송
      ReactGA.send({
        hitType: 'pageviewInCode',
        page: page_path,
        title: page_title,
      });

      // 5-2. GTM에 데이터 레이어 전송
      TagManager.dataLayer({
        dataLayer: {
          event: 'pageviewInCode',
          page_path,
          page_title,
        },
      });
    };

    // 6. 초기 로드 시 및 해시 변경 시 페이지뷰 전송 (이거 여전히 안됩니다.)
    sendPageView();
    window.addEventListener('hashchange', sendPageView);

    return () => {
      window.removeEventListener('hashchange', sendPageView);
    };
  }, []);

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
