import React from 'react';
import { BookOpenIcon, DocumentIcon } from '@heroicons/react/20/solid';

const Row5: React.FC<{ digitalalbum: string }> = ({ digitalalbum }) => {
  return (
    <>
      <div
        className='lg:row-span-1 lg:row-start-9 lg:col-span-1 lg:col-start-1
      
      lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex 
      
      justify-start xl:justify-end items-center'
      >
        <div className='lg:pr-4'>
          <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
            <div className='flex justify-start items-center'>
              <BookOpenIcon aria-hidden='true' className='mt-16 size-8 flex-none text-indigo-600' />
              <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                4. 여행이 끝나면 '디지털 앨범!'
              </span>
            </div>
            <div className='flex justify-start items-center'>
              <DocumentIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
              <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                여행 후 특정 기간을 지정하여 디지털 앨범을 만들어보세요!
              </span>
            </div>
            <p className='mt-5 text-left text-xl font-[500]'>
              - 찍었던 사진들이 순서대로 나오게 됩니다.
              <br />
              - 필 요없는 사진은 삭제할 수 있어요.
              <br />
              - 자유롭게 사진을 배치하고, 기록을 남겨보세요.
              <br />
              - 다이어리 꾸미기를 하듯이 다른 사진이나 스티커를 붙일 수도 있어요.
              <br />- 마지막으로 Export하게 되면 PDF나 이미지 파일로 만들 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* =============================================================== */}

      <div className='mt-0 mb-10 p-0 lg:mt-6 lg:p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-9 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
        <img
          alt='DigitalAlbum'
          src={digitalalbum}
          className='w-[19rem] max-w-none rounded-xl  lg:w-[21rem] xl:w-[22rem]'
        />
      </div>
    </>
  );
};

export default Row5;
