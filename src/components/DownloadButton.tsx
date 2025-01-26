import React from 'react';
import TagManager from 'react-gtm-module';
import { useNavigate } from 'react-router-dom';
// import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';
import apple from '../assets/icons/apple(white).png';
import playstore from '../assets/icons/playstore(white).png';

const DownloadButton: React.FC = () => {
  const navigate = useNavigate();

  const handleAndroidDownloadClick = () => {
    const page_path = `${window.location.pathname}${window.location.hash}`;

    TagManager.dataLayer({
      dataLayer: {
        event: 'click_android_download_button',
        page_path,
      },
    });

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
    <div className='flex flex-wrap justify-center gap-4 mx-5'>
      {/* flex: 플렉스 디스플레이, flex-wrap: 플렉스 아이템을 여러 줄로 감싸기, 
      justify-center: 중앙 정렬, 
      gap-4: 간격 1rem, mx-5: x축 마진 1.25rem */}

      <button
        type='button'
        className='flex items-center p-2.5 border-none 
        
        rounded-lg cursor-pointer 
        
        transition-all duration-300 
        
        w-[170px] h-[50px]
        
        bg-black text-white hover:bg-gray-600 
        
        active:bg-gray-900'
        onClick={handleAndroidDownloadClick}
      >
        {/* flex: 플렉스 디스플레이, items-center: 아이템 중앙 정렬, p-2.5: 패딩 0.625rem, border-none: 테두리 없음, 
        
        rounded-lg: 둥근 모서리 large, cursor-pointer: 커서 포인터, 
        
        transition-all: 모든 속성에 트랜지션 적용, duration-300: 트랜지션 지속 시간 300ms, 
        
        w-full: 너비 100%, max-w-xs: 최대 너비 xs, 
        
        bg-green-500: 배경색 초록 500, text-white: 글꼴 색상 흰색, hover:bg-green-600: 호버 시 배경색 초록 600, 
        
        active:bg-green-700: 활성화 시 배경색 초록 700 */}

        <img src={playstore} alt='Download Icon' className='h-7 mr-2' />
        {/* w-8: 너비 2rem, h-8: 높이 2rem, mr-2: 오른쪽 마진 0.5rem */}
        <div className='flex flex-col items-start leading-tight'>
          {/* flex: 플렉스 디스플레이, flex-col: 세로 방향 정렬, items-start: 아이템 시작 정렬 */}
          <span className='text-[12px]'>GET IT ON</span>
          {/* text-[12px]: 글꼴 크기 10px */}
          <span className='text-[20px] font-bold'>Google Play</span>
          {/* text-[20px]: 글꼴 크기 18px, font-bold: 글꼴 두께 bold */}
        </div>
      </button>

      {/* ================================================== */}

      <button
        type='button'
        className='flex items-center p-2.5 border-none rounded-lg cursor-pointer 
        
        transition-all duration-300 
        
        w-[170px] h-[50px]
        
        bg-black text-white hover:bg-gray-600 
        
        active:bg-gray-900'
        onClick={handleIosDownloadClick}
      >
        {/* flex: 플렉스 디스플레이, items-center: 아이템 중앙 정렬, 
        p-2.5: 패딩 0.625rem, border-none: 테두리 없음, rounded-lg: 둥근 모서리 large, 
        
        cursor-pointer: 커서 포인터, 
        
        transition-all: 모든 속성에 트랜지션 적용, 
        duration-300: 트랜지션 지속 시간 300ms, 
        
        w-full: 너비 100%, max-w-xs: 최대 너비 xs, 
        
        bg-black: 배경색 검정, text-white: 글꼴 색상 흰색, hover:bg-gray-800: 호버 시 배경색 회색 800, 
        
        active:bg-gray-900: 활성화 시 배경색 회색 900 */}

        <img src={apple} alt='Download Icon' className='h-8 mr-2' />
        {/* w-8: 너비 2rem, h-8: 높이 2rem, mr-2: 오른쪽 마진 0.5rem */}
        <div className='flex flex-col items-start leading-tight'>
          {/* flex: 플렉스 디스플레이, flex-col: 세로 방향 정렬, items-start: 아이템 시작 정렬 */}
          <span className='text-[12px]'>Download on the</span>
          {/* text-[12px]: 글꼴 크기 10px */}
          <span className='text-[20px] font-bold'>App Store</span>
          {/* text-[20px]: 글꼴 크기 18px, font-bold: 글꼴 두께 bold */}
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;
