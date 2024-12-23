import React from 'react';
import '../styles/component/ButtonDownload.css';
import { useNavigate } from 'react-router-dom';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

const DownloadButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='buttons ml-5 mr-5'>
      <button type='button' className='btn btn-android' onClick={() => navigate('/notice')}>
        <ArrowDownCircleIcon className='store-icon' />
        <div className='btn-text'>
          <span className='btn-subtitle'>GET IT ON</span>
          <span className='btn-title'>Google Play</span>
        </div>
      </button>
      <button type='button' className='btn btn-iOS' onClick={() => navigate('/notice')}>
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
