import React from 'react';

const Row1: React.FC<{ cover: string; telescope: string }> = ({ cover, telescope }) => {
  return (
    <>
      <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
        <div className='lg:pr-4'>
          <div className='lg:max-w-lg'>
            <p className='text-base/7 font-semibold text-indigo-600'>
              발자국을 따라가며 당신의 여행을 기록해드리겠습니다.
            </p>
            <div className='flex justify-center items-center lg:flex-1'>
              <a href='#' className=''>
                <span className='sr-only'>Your Company</span>
                <img src='URLogLOGO.svg' alt='logo' className='h-[150px] w-auto' />
              </a>
            </div>
            <p className='mt-1 font-[500] text-2xl text-gray-700'>
              안녕하세요! <br />
              'URLog'는 여행 중 찍은 사진을 경로와 함께 지도에서 보여주고 다량으로 찍은 사진을
              빠르게 정리하여 디지털 앨범으로 출력할 수 있는 앱서비스입니다.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-1 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
        <img
          alt='cover'
          src={cover}
          className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
        />
      </div>

      <div className='mt-6 p-6 lg:top-4 lg:row-span-1 lg:row-start-2 lg:col-span-1 lg:col-start-1 lg:overflow-hidden flex justify-center items-center'>
        <img
          alt=''
          src={telescope}
          className='w-[5rem] max-w-none rounded-xl sm:w-[8rem] md:w-[10rem] lg:w-[13rem] xl:w-[15rem]'
        />
      </div>
    </>
  );
};

export default Row1;
