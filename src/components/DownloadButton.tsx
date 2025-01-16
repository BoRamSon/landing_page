// import React from 'react';
// import ReactGA from 'react-ga4';
// import '../styles/component/DownloadButton.css';
// import { useNavigate } from 'react-router-dom';
// import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

// const DownloadButton: React.FC = () => {
//   const navigate = useNavigate();

//   // 1. 클릭 이벤트 핸들러
//   const handleCombinedClick = () => {
//     // Google Analytics 이벤트 전송
//     ReactGA.event({
//       category: 'user_engagement', // GA4는 category 대신 주로 이벤트 이름을 사용
//       action: 'download_click', // GA4에서는 action이 아닌 event_name으로 처리됨
//       label: '다운로드 페이지로 이동', // GA4에서는 label 대신 event_label로 처리됨
//       // value: 1, // GA4에서는 value 대신 event_value로 처리됨
//     });

//     // 2. 기존 navigate 호출을 여기에서 한번에 처리하도록 만들었습니다.
//     // 잠시 대기 후 페이지 이동
//     setTimeout(() => {
//       navigate('/notice');
//     }, 300); // 300ms 후에 페이지 이동

//     console.log('클릭되어 다운로드 페이지로 이동하였습니다.');
//   };

//   return (
//     <div className='buttons ml-5 mr-5'>
//       <button
//         type='button'
//         className='btn btn-android'
//         // onClick={() => navigate('/notice')}
//         onClick={handleCombinedClick} // 3. 여기 버튼 클릭 시 동작할 수 있도록 만들어주었습니다.
//       >
//         <ArrowDownCircleIcon className='store-icon' />
//         <div className='btn-text'>
//           <span className='btn-subtitle'>GET IT ON</span>
//           <span className='btn-title'>Google Play</span>
//         </div>
//       </button>
//       <button
//         type='button'
//         className='btn btn-iOS'
//         // onClick={() => navigate('/notice')}
//         onClick={handleCombinedClick} // 3. 여기 버튼 클릭 시 동작할 수 있도록 만들어주었습니다.
//       >
//         <ArrowDownCircleIcon className='store-icon' />
//         <div className='btn-text'>
//           <span className='btn-subtitle'>Download on the</span>
//           <span className='btn-title'>App Store</span>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default DownloadButton;

import React from 'react';
import ReactGA from 'react-ga4';
import '../styles/component/DownloadButton.css';
import { useNavigate } from 'react-router-dom';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

// 데이터 계층의 타입 정의
interface DataLayerEvent {
  event: string;
  platform: string;
  url: string;
}

// window 객체에 dataLayer를 추가로 정의
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

const DownloadButton: React.FC = () => {
  const navigate = useNavigate();

  // 1. 클릭 이벤트 핸들러
  const handleCombinedClick = (platform: 'android' | 'ios') => {
    const urlWithHash = `${window.location.origin}/notice#${platform}`;

    // Google Analytics 이벤트 전송
    ReactGA.event({
      category: 'user_engagement',
      action: 'download_click',
      label: `다운로드 페이지로 이동 (${platform})`,
    });

    // 2. GTM 데이터 계층에 이벤트 푸시
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'download_button_click',
      platform, // 플랫폼 정보 (android, ios)
      url: urlWithHash, // 해시태그가 포함된 URL
    });

    // 3. 잠시 대기 후 페이지 이동
    setTimeout(() => {
      navigate(`/notice#${platform}`); // 해시태그 포함 URL로 이동
    }, 300);

    console.log(`클릭되어 ${platform} 다운로드 페이지로 이동하였습니다.`);
  };

  return (
    <div className='buttons ml-5 mr-5'>
      <button
        type='button'
        className='btn btn-android'
        onClick={() => handleCombinedClick('android')} // Android 클릭 시 동작
      >
        <ArrowDownCircleIcon className='store-icon' />
        <div className='btn-text'>
          <span className='btn-subtitle'>GET IT ON</span>
          <span className='btn-title'>Google Play</span>
        </div>
      </button>
      <button
        type='button'
        className='btn btn-iOS'
        onClick={() => handleCombinedClick('ios')} // iOS 클릭 시 동작
      >
        <ArrowDownCircleIcon className='store-icon' />
        <div className='btn-text'>
          <span className='btn-subtitle'>Download on the</span>
          <span className='btn-title'>App Store</span>
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;
