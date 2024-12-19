import React from 'react';
import '../styles/component/Footer.css';
// import urlogLogo from '../assets/images/URLog_Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        {/* <img alt='' src={urlogLogo} className='w-[120px]' /> */}
        <img src='URLogLOGO.svg' alt='logo' className='w-[120px]' />
        <p>&copy; 2024 URLog Website. All rights reserved.</p>
        <div className='footer-links'>
          {/* <a href='/privacy-policy'>Privacy Policy</a> */}
          {/* <a href='/terms-of-service'>Terms of Service</a> */}
        </div>
        <div className='social-icons'>
          {/* <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            Facebook
          </a> */}
          {/* <span>SNS :</span>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            Instagram
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
