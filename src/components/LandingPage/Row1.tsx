import React from 'react';

const Row1: React.FC<{ cover: string; telescope: string }> = ({ cover, telescope }) => {
  return (
    <>
      <div
        className='lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 
      
      lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'
      >
        {/* lg:col-span-2: 큰 화면에서 2열 차지, lg:col-start-1: 큰 화면에서 1열 시작, lg:row-span-2: 큰 화면에서 2행 차지, lg:row-start-1: 큰 화면에서 1행 시작, 
        lg:mx-auto: 큰 화면에서 x축 마진 자동, lg:grid: 큰 화면에서 그리드 디스플레이, 
        lg:w-full: 큰 화면에서 너비 100%, lg:max-w-7xl: 큰 화면에서 최대 너비 7xl, lg:grid-cols-2: 큰 화면에서 2열, lg:gap-x-8: 큰 화면에서 x축 간격 2rem, lg:px-8: 큰 화면에서 x축 패딩 2rem */}

        <div className='lg:pr-4'>
          {/* lg:pr-4: 큰 화면에서 오른쪽 패딩 1rem */}

          <div className='lg:max-w-lg'>
            {/* lg:max-w-lg: 큰 화면에서 최대 너비 large */}

            <p className='text-base/7 font-semibold text-indigo-600'>
              {/* text-base/7: 기본 글꼴 크기와 줄 높이 7, font-semibold: 글꼴 두께 semi-bold, text-indigo-600: 글꼴 색상 인디고 600 */}
              발자국을 따라가며 여행을 기록해요!
            </p>

            <div className='flex justify-center items-center lg:flex-1'>
              {/* flex: 플렉스 디스플레이, 
              justify-center: 중앙 정렬, items-center: 아이템 중앙 정렬, lg:flex-1: 
              큰 화면에서 flex-grow 1 */}

              <a href='#' className=''>
                <span className='sr-only'>Your Company</span>
                <img src='URLogLOGO.svg' alt='logo' className='h-[150px] w-auto' />
                {/* h-[150px]: 높이 150px, w-auto: 너비 자동 */}
              </a>
            </div>

            <p className='mt-1 font-[500] text-2xl text-gray-700'>
              {/* mt-1: 위쪽 마진 0.25rem, font-[500]: 글꼴 두께 500, text-2xl: 글꼴 크기 2xl, text-gray-700: 글꼴 색상 회색 700 */}
              안녕하세요! <br />
              'URLog'는 여행 중 찍은 사진을 경로와 함께 지도에서 보여주고 다량으로 찍은 사진을
              빠르게 정리하여 디지털 앨범으로 출력할 수 있는 앱서비스입니다.
            </p>
          </div>
        </div>
      </div>

      {/*
      ============================================================================================================================================================================================================================================================ */}

      <div
        className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-1 lg:col-span-1 lg:col-start-2 
      
      lg:overflow-hidden flex 
      
      justify-center items-center'
      >
        {/* mt-6: 위쪽 마진 1.5rem, p-6: 패딩 1.5rem, lg:sticky: 큰 화면에서 position sticky, lg:top-4: 큰 화면에서 위쪽 1rem, lg:row-span-2: 큰 화면에서 2행 차지, lg:row-start-1: 큰 화면에서 1행 시작, lg:col-span-1: 큰 화면에서 1열 차지, lg:col-start-2: 큰 화면에서 2열 시작, lg:overflow-hidden: 큰 화면에서 오버플로우 숨기기, flex: 플렉스 디스플레이, justify-center: 중앙 정렬, items-center: 아이템 중앙 정렬 */}
        <img
          alt='cover'
          src={cover}
          className='w-[17rem] max-w-none rounded-xl lg:w-[20rem] xl:w-[21rem]'
        />
        {/* w-[13rem]: 너비 13rem, max-w-none: 최대 너비 없음, rounded-xl: 둥근 모서리 extra large, sm:w-[15rem]: 작은 화면에서 너비 15rem, md:w-[17rem]: 중간 화면에서 너비 17rem, lg:w-[20rem]: 큰 화면에서 너비 20rem, xl:w-[20rem]: 매우 큰 화면에서 너비 20rem */}
      </div>

      {/*
      ============================================================================================================================================================================================================================================================ */}

      <div
        className='mt-6 p-6 lg:top-4 
      
      lg:row-span-1 lg:row-start-2 lg:col-span-1 lg:col-start-1 
      
      lg:overflow-hidden flex
      
      justify-center 2xl:justify-end items-center'
      >
        {/* mt-6: 위쪽 마진 1.5rem, p-6: 패딩 1.5rem, lg:top-4: 큰 화면에서 위쪽 1rem, 
        
        lg:row-span-1: 큰 화면에서 1행 차지, lg:row-start-2: 큰 화면에서 2행 시작, lg:col-span-1: 큰 화면에서 1열 차지, lg:col-start-1: 큰 화면에서 1열 시작, 
        
        lg:overflow-hidden: 큰 화면에서 오버플로우 숨기기, flex: 플렉스 디스플레이, 
        
        justify-center: 중앙 정렬, items-center: 아이템 중앙 정렬 */}

        <img
          alt=''
          src={telescope}
          className='w-[10rem] max-w-none rounded-xl lg:w-[13rem] xl:w-[15rem]'
        />
        {/* w-[5rem]: 너비 5rem, max-w-none: 최대 너비 없음, rounded-xl: 둥근 모서리 extra large, sm:w-[8rem]: 작은 화면에서 너비 8rem, md:w-[10rem]: 중간 화면에서 너비 10rem, lg:w-[13rem]: 큰 화면에서 너비 13rem, xl:w-[15rem]: 매우 큰 화면에서 너비 15rem */}
      </div>
    </>
  );
};

export default Row1;
