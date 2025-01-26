import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='mt-12 bg-gray-700 text-white py-5 text-center'>
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-2'>
        <img src='URLogLOGO.svg' alt='logo' className='w-28' />
        <p>&copy; 2025 URLog Website. All rights reserved.</p>
        <div className='flex gap-4'>
          {/* <a href='/privacy-policy' className='text-yellow-500 hover:text-white'>Privacy Policy</a> */}
          {/* <a href='/terms-of-service' className='text-yellow-500 hover:text-white'>Terms of Service</a> */}
        </div>
        <div className='flex gap-4'>
          {/* <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-yellow-500 hover:text-white'>Facebook</a> */}
          {/* <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-yellow-500 hover:text-white'>Instagram</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
