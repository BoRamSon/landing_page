import React from 'react';
import { CameraIcon } from '@heroicons/react/20/solid';

const Row2: React.FC<{ camera: string }> = ({ camera }) => {
  return (
    <>
      <div
        className='lg:row-span-1 lg:row-start-3 lg:col-span-1 lg:col-start-1 
        
        lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 
      
        justify-start lg:justify-center xl:justify-end items-center'
      >
        {/* className='lg:row-span-1 lg:row-start-3 lg:col-span-1 lg:col-start-1 
        
        lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 
      
        justify-start lg:justify-center xl:justify-end items-center' */}

        <div className='lg:pr-4'>
          {/* lg:pr-4: 큰 화면에서 오른쪽 패딩 1rem */}

          <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
            {/* <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>*/}
            {/* lg:max-w-lg: 큰 화면에서 최대 너비 large */}

            <div className='flex ml-10 justify-start items-center lg:flex-1'>
              <CameraIcon aria-hidden='true' className='mt-16 size-8 flex-none text-indigo-600' />
              <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                1. 앱 내 사진촬영
              </span>
            </div>
            <p className='mt-3 text-left text-2xl font-[500]'>
              앱 내에서 원하는대로 사진을 찍어보세요! 📸 📸 📸
            </p>
            <p className='mt-5 text-left'></p>
          </div>
        </div>
      </div>

      <div
        className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-3 lg:col-span-1 lg:col-start-2 
      
      lg:overflow-hidden flex 
      
      justify-center items-center'
      >
        <img
          alt='camera'
          src={camera}
          className='w-[17rem] max-w-none rounded-xl lg:w-[20rem] xl:w-[21rem]'
        />
      </div>
    </>
  );
};

export default Row2;
