import React, { useEffect } from 'react';
import ReactGA from 'react-ga4'; // 1. GA 관련 import 추가
import TagManager from 'react-gtm-module'; // 4. GTM 관련 import 추가
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

// 3. 페이지뷰 전송
// const TrackPageView = () => {
//   const location = useLocation();

//   useEffect(() => {
//     // 해시 URL 변경 시 페이지뷰 전송
//     const fullPath = location.pathname + location.search + location.hash;
//     console.log('Sending pageview for:', fullPath); // 디버깅용 로그
//     ReactGA.send({
//       hitType: 'pageview',
//       page: fullPath,
//     });
//   }, [location]);

//   return null;
// };

const RootNavigator: React.FC = () => {
  // 2. GA 초기화
  // useEffect(() => {
  //   // ReactGA.initialize(`${import.meta.env.VITE_GA_MEASUREMENT_ID}`);
  //   ReactGA.initialize('G-PBBSSNTG9M');
  //   console.log('GA4 Initialized'); // 디버깅용 로그
  // }, []);

  // 5. GTM 초기화
  // useEffect(() => {
  //   TagManager.initialize({
  //     // gtmId: `${import.meta.env.VITE_GTM_ID}`,
  //     gtmId: 'GTM-NTWJC77J',
  //   });
  //   console.log('GTM Initialized'); // 디버깅용 로그
  // }, []);

  // useEffect(() => {
  //   // GTM 설정 (GTM 컨테이너 ID는 GTM에서 생성한 것)
  //   const tagManagerArgs = {
  //     gtmId: 'GTM-NTWJC77J', // GTM 컨테이너 ID로 교체하세요
  //   };
  //   TagManager.initialize(tagManagerArgs);
  //   console.log('GTM Initialized'); // 디버깅용 로그
  // }, []);

  // ==========================================================================

  useEffect(() => {
    // GA4 초기화 (해시 모드 활성화)
    // ReactGA.initialize(`${import.meta.env.VITE_GA_MEASUREMENT_ID}`, {
    ReactGA.initialize('G-PBBSSNTG9M', {
      gtagOptions: {
        send_page_view: false, // 수동으로 페이지뷰를 전송하기 위해 자동 전송 비활성화
      },
    });

    // GTM 초기화
    TagManager.initialize({
      gtmId: 'GTM-NTWJC77J',
      events: {
        sendPageView: false, // 수동으로 페이지뷰를 전송하기 위해 자동 전송 비활성화
      },
    });

    // 해시 변경 이벤트 리스너
    const handleLocationChange = () => {
      const page_path = window.location.pathname + window.location.hash;
      const page_title = document.title;

      // GA4에 페이지뷰 전송
      ReactGA.send({
        hitType: 'pageview',
        page: page_path,
        title: page_title,
      });

      // GTM에 페이지뷰 전송
      TagManager.dataLayer({
        dataLayer: {
          event: 'pageview',
          page_path: page_path,
          page_title: page_title,
        },
      });
    };

    // 초기 로드와 해시 변경시 이벤트 발생
    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // ===============================================================================

  return (
    <Router>
      <div className='MainBox'>
        <Header />
        {/* <Button /> */}
        {/* <Sidebar /> */}

        <div className='MainNavigation'>
          {/* <TrackPageView /> */}
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
