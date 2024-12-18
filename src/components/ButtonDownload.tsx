import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/component/DownloadButton.css';

const DownloadButton: React.FC = () => {
  return (
    <div className='buttons'>
      {/* <button type='button' className='btn btn-android'>
        Android GoogleStroe
      </button>
      <button type='button' className='btn btn-iOS'>
        iOS AppStore
      </button> */}

      <a className='btn btn-android' href='#' role='button'>
        Android GoogleStroe
      </a>
      <a className='btn btn-iOS' href='#' role='button'>
        iOS AppStore
      </a>
    </div>
  );
};

export default DownloadButton;
