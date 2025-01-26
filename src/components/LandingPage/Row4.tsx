import React from 'react';
import { PhotoIcon, CheckBadgeIcon, BoltIcon } from '@heroicons/react/20/solid';

const Row4: React.FC<{ bestshot: string; album: string }> = ({ bestshot, album }) => {
  return (
    <>
      <div
        className='lg:row-span-1 lg:row-start-7 lg:col-span-1 lg:col-start-1 
      
      lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex 
      
      justify-start xl:justify-end items-center'
      >
        <div className='lg:pr-4'>
          <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
            <div className='flex justify-start items-center'>
              <PhotoIcon aria-hidden='true' className='mt-16 size-8 flex-none text-indigo-600' />
              <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                3. 갤러리에서 사진 확인 및 정리
              </span>
            </div>
            <div className='flex justify-start items-center'>
              <CheckBadgeIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
              <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                찍은 사진들은 Gallary에서 확인할 수 있습니다!
              </span>
            </div>
            <div className='flex justify-start items-center'>
              <BoltIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
              <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                해외여행 중 많은 사진들을 촬영하셨죠??
              </span>
            </div>
            <p className='mt-5 text-left text-xl font-[500]'>
              - 이제 위치별, 날짜별, 인물별 빠르게 나눠보세요!
              <br />- 중복사진이 있다면 바로 삭제하실 수 있어요.
              <br />- 한번에 여러장 찍힌 사진들을 자동으로 묶어주고 '베스트샷'을 선정하면 나머지
              사진을 한번에 삭제해줍니다.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================================= */}

      <div
        className='mt-6 lg:p-6 lg:top-4 lg:row-span-1 lg:row-start-8 lg:col-span-1 lg:col-start-1 
        
        lg:overflow-hidden grid max-h-25 mb-100

        place-items-center
      
        flex - self-center justify-center items-center'
      >
        <img alt='bestshot' src={bestshot} className='w-[20rem] lg:w-[21rem] xl:w-[24rem]' />
      </div>

      {/* ============================================================================= */}

      <div
        className='mt-5 p-0 lg:mt-6 lg:p-6 lg:row-span-2 lg:row-start-7 lg:col-span-1 lg:col-start-2 
      
        lg:sticky 
        
        top-0 lg:top-4

        lg:overflow-hidden 
      
        flex flex-col justify-center items-center'
      >
        <span className='text-center text-[14px] font-bold'>Gallary</span>
        <img
          alt='album'
          src={album}
          className='w-[19rem] max-w-none rounded-xl lg:w-[20rem] xl:w-[21rem]'
        />
      </div>
    </>
  );
};

export default Row4;
