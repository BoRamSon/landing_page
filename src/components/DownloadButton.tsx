import React from 'react';
import ReactGA from 'react-ga4';
import '../styles/component/DownloadButton.css';
import { useNavigate } from 'react-router-dom';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

const DownloadButton: React.FC = () => {
  const navigate = useNavigate();

  // 1. 클릭 이벤트 핸들러
  const handleCombinedClick = () => {
    // Google Analytics 이벤트 전송
    ReactGA.event({
      category: 'download',
      action: 'click',
      label: '다운로드 페이지로 이동',
      value: 1,
    });

    // 2. 기존 navigate 호출을 여기에서 한번에 처리하도록 만들었습니다.
    navigate('/notice');
  };

  return (
    <div className='buttons ml-5 mr-5'>
      <button
        type='button'
        className='btn btn-android'
        // onClick={() => navigate('/notice')}
        onClick={handleCombinedClick} // 3. 여기 버튼 클릭 시 동작할 수 있도록 만들어주었습니다.
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
        // onClick={() => navigate('/notice')}
        onClick={handleCombinedClick} // 3. 여기 버튼 클릭 시 동작할 수 있도록 만들어주었습니다.
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
