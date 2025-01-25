import React from 'react';
import { MapIcon, MapPinIcon } from '@heroicons/react/20/solid';

const Row3: React.FC<{ mainmap: string }> = ({ mainmap }) => {
  return (
    <>
      <div
        className='lg:row-span-1 lg:row-start-5 lg:col-span-1 lg:col-start-1 
      
      lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 
       
      lg:px-8 flex 
      
      justify-start xl:justify-end items-center'
      >
        <div className='lg:pr-4'>
          <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
            <div className='flex ml-10 justify-start items-center'>
              <MapIcon aria-hidden='true' className='mt-16 size-8 flex-none text-indigo-600' />
              <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                2. 지도에서 한눈에 사진 및 경로 확인
              </span>
            </div>
            <div className='flex justify-start items-center'>
              <MapPinIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
              <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                Map 화면에서 위치와 함께 찍은 사진을 볼 수 있습니다.
              </span>
            </div>
            <p className='mt-5 text-left text-xl font-[500]'>
              찍은 사진과 함께 순서별로 경로가 표시되요!
            </p>
          </div>
        </div>
      </div>

      <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-5 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
        <img
          alt='mainmap'
          src={mainmap}
          className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
        />
      </div>
    </>
  );
};

export default Row3;
