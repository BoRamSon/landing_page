import React from 'react';
// import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import '../styles/component/DownloadButton.css';
import { useNavigate } from 'react-router-dom';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

const DownloadButton: React.FC = () => {
  const navigate = useNavigate();

  const handleAndroidDownloadClick = () => {
    const page_path = `${window.location.pathname}${window.location.hash}`;

    // ReactGA.event({
    //   category: 'user_engagementInCode',
    //   action: 'download_click_to_GA',
    //   label: platform,
    // });

    TagManager.dataLayer({
      dataLayer: {
        event: 'click_android_download_button',
        // platform,
        page_path,
      },
    });

    // 페이지 이동
    navigate('/notice');
  };

  const handleIosDownloadClick = () => {
    const page_path = `${window.location.pathname}${window.location.hash}`;

    TagManager.dataLayer({
      dataLayer: {
        event: 'click_iOS_download_button',
        page_path,
      },
    });

    navigate('/notice');
  };

  return (
    <div className='buttons ml-5 mr-5'>
      <button
        type='button'
        className='btn btn-android'
        onClick={() => handleAndroidDownloadClick()}
      >
        <ArrowDownCircleIcon className='store-icon' />
        <div className='btn-text'>
          <span className='btn-subtitle'>GET IT ON</span>
          <span className='btn-title'>Google Play</span>
        </div>
      </button>
      <button type='button' className='btn btn-iOS' onClick={() => handleIosDownloadClick()}>
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
