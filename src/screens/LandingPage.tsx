import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import {
  PhotoIcon,
  BookOpenIcon,
  CameraIcon,
  CheckBadgeIcon,
  BoltIcon,
  MapIcon,
  MapPinIcon,
  DocumentIcon,
} from '@heroicons/react/20/solid';
import '../styles/LandingPage.css';
import cover from '../assets/images/URLog_Cover_1x.png';
import mainmap from '../assets/images/URLog_MainMap_1x.png';
import album from '../assets/images/URLog_Gallary_1x.png';
import digitalalbum from '../assets/images/URLog_DigitalAlbum_1x.png';
import camera from '../assets/images/URLog_Camera.png';
import telescope from '../assets/images/image_Telescope.png';
import bestshot from '../assets/images/URLog_DigitalAlbum_BestShot.png';
import DownloadButton from '../components/DownloadButton.tsx';

const LandingPage: React.FC = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'on_main_page',
      },
    });
  }, []);

  return (
    <>
      <div className='relative isolate overflow-hidden bg-white px-6 py-10 lg:overflow-visible lg:px-0 mt-16'>
        {/* relative: position relative, isolate: create a new stacking context, overflow-hidden: hide overflow, bg-white: background color white, px-6: padding x-axis 1.5rem, py-10: padding y-axis 2.5rem, lg:overflow-visible: overflow visible on large screens, lg:px-0: padding x-axis 0 on large screens, mt-16: margin top 4rem */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          {/* absolute: position absolute, inset-0: top, right, bottom, left 0, -z-10: z-index -10, overflow-hidden: hide overflow */}
          <svg
            aria-hidden='true'
            className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          >
            {/* absolute: position absolute, left-[max(50%,25rem)]: left max of 50% or 25rem, top-0: top 0, h-[64rem]: height 64rem, w-[128rem]: width 128rem, -translate-x-1/2: translate x-axis -50%, stroke-gray-200: stroke color gray 200, mask-image: radial gradient */}
            <defs>
              <pattern
                x='50%'
                y={-1}
                id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                width={200}
                height={200}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              {/* overflow-visible: overflow visible, fill-gray-50: fill color gray 50 */}
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
              width='100%'
              height='100%'
              strokeWidth={0}
            />
          </svg>
        </div>

        <div className='mx-auto grid max-w-2xl grid-cols-1 grid-row-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid-row-40 lg:items-start lg:gap-y-10'>
          {/* mx-auto: margin x-axis auto, grid: display grid, max-w-2xl: max width 2xl, grid-cols-1: 1 column, grid-row-1: 1 row, gap-x-8: gap x-axis 2rem, gap-y-16: gap y-axis 4rem, lg:mx-0: margin x-axis 0 on large screens, lg:max-w-none: max width none on large screens, lg:grid-cols-2: 2 columns on large screens, lg:grid-row-40: 40 rows on large screens, lg:items-start: align items start on large screens, lg:gap-y-10: gap y-axis 2.5rem on large screens */}
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            {/* lg:col-span-2: span 2 columns on large screens, lg:col-start-1: start at column 1 on large screens, lg:row-start-1: start at row 1 on large screens, lg:mx-auto: margin x-axis auto on large screens, lg:grid: display grid on large screens, lg:w-full: width full on large screens, lg:max-w-7xl: max width 7xl on large screens, lg:grid-cols-2: 2 columns on large screens, lg:gap-x-8: gap x-axis 2rem on large screens, lg:px-8: padding x-axis 2rem on large screens */}
            <div className='lg:pr-4'>
              {/* lg:pr-4: padding right 1rem on large screens */}
              <div className='lg:max-w-lg'>
                {/* lg:max-w-lg: max width large on large screens */}
                <p className='text-base/7 font-semibold text-indigo-600'>
                  {/* text-base/7: text size base with line height 7, font-semibold: font weight semi-bold, text-indigo-600: text color indigo 600 */}
                  발자국을 따라가며 당신의 여행을 기록해드리겠습니다.
                </p>
                <div className='flex justify-center items-center lg:flex-1'>
                  {/* flex: display flex, justify-center: justify content center, items-center: align items center, lg:flex-1: flex 1 on large screens */}
                  <a href='#' className=''>
                    <span className='sr-only'>Your Company</span>
                    <img src='URLogLOGO.svg' alt='logo' className='h-[150px] w-auto' />
                    {/* h-[150px]: height 150px, w-auto: width auto */}
                  </a>
                </div>
                <p className='mt-1 font-[500] text-2xl text-gray-700'>
                  {/* mt-1: margin top 0.25rem, font-[500]: font weight 500, text-2xl: text size 2xl, text-gray-700: text color gray 700 */}
                  안녕하세요! <br />
                  'URLog'는 여행 중 찍은 사진을 경로와 함께 지도에서 보여주고 다량으로 찍은 사진을
                  빠르게 정리하여 디지털 앨범으로 출력할 수 있는 앱서비스입니다.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-1 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
            {/* mt-6: margin top 1.5rem, p-6: padding 1.5rem, lg:sticky: position sticky on large screens, lg:top-4: top 1rem on large screens, lg:row-span-2: span 2 rows on large screens, lg:row-start-1: start at row 1 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-2: start at column 2 on large screens, lg:overflow-hidden: hide overflow on large screens, flex: display flex, justify-center: justify content center, items-center: align items center */}
            <img
              alt='cover'
              src={cover}
              className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
            />
            {/* w-[13rem]: width 13rem, max-w-none: max width none, rounded-xl: border radius extra large, sm:w-[15rem]: width 15rem on small screens, md:w-[17rem]: width 17rem on medium screens, lg:w-[20rem]: width 20rem on large screens, xl:w-[20rem]: width 20rem on extra large screens */}
          </div>

          <div className='mt-6 p-6 lg:top-4 lg:row-span-1 lg:row-start-2 lg:col-span-1 lg:col-start-1 lg:overflow-hidden flex justify-center items-center'>
            {/* mt-6: margin top 1.5rem, p-6: padding 1.5rem, lg:top-4: top 1rem on large screens, lg:row-span-1: span 1 row on large screens, lg:row-start-2: start at row 2 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-1: start at column 1 on large screens, lg:overflow-hidden: hide overflow on large screens, flex: display flex, justify-center: justify content center, items-center: align items center */}
            <img
              alt=''
              src={telescope}
              className='w-[5rem] max-w-none rounded-xl sm:w-[8rem] md:w-[10rem] lg:w-[13rem] xl:w-[15rem]'
            />
            {/* w-[5rem]: width 5rem, max-w-none: max width none, rounded-xl: border radius extra large, sm:w-[8rem]: width 8rem on small screens, md:w-[10rem]: width 10rem on medium screens, lg:w-[13rem]: width 13rem on large screens, xl:w-[15rem]: width 15rem on extra large screens */}
          </div>

          <div className='lg:row-span-1 lg:row-start-3 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-center xl:justify-end items-center'>
            {/* lg:row-span-1: span 1 row on large screens, lg:row-start-3: start at row 3 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-1: start at column 1 on large screens, lg:mx-auto: margin x-axis auto on large screens, lg:grid: display grid on large screens, lg:w-full: width full on large screens, lg:max-w-7xl: max width 7xl on large screens, lg:gap-x-8: gap x-axis 2rem on large screens, lg:px-8: padding x-axis 2rem on large screens, flex: display flex, justify-start: justify content start, xl:justify-center: justify content center on extra large screens, xl:justify-end: justify content end on extra large screens, items-center: align items center */}
            <div className='lg:pr-4'>
              {/* lg:pr-4: padding right 1rem on large screens */}
              <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
                {/* max-w-full: max width full, text-base/7: text size base with line height 7, text-gray-700: text color gray 700, lg:max-w-lg: max width large on large screens */}
                <div className='flex ml-10 justify-start items-center'>
                  {/* flex: display flex, ml-10: margin left 2.5rem, justify-start: justify content start, items-center: align items center */}
                  <CameraIcon
                    aria-hidden='true'
                    className='mt-16 size-8 flex-none text-indigo-600'
                  />
                  {/* mt-16: margin top 4rem, size-8: size 8, flex-none: flex none, text-indigo-600: text color indigo 600 */}
                  <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                    {/* mt-16: margin top 4rem, ml-2: margin left 0.5rem, text-3xl: text size 3xl, text-left: text align left, font-bold: font weight bold, tracking-tight: letter spacing tight, text-gray-1000: text color gray 1000 */}
                    1. 앱 내 사진촬영
                  </span>
                </div>
                <p className='mt-3 text-left text-2xl font-[500]'>
                  {/* mt-3: margin top 0.75rem, text-left: text align left, text-2xl: text size 2xl, font-[500]: font weight 500 */}
                  앱 내에서 원하는대로 사진을 찍어보세요! <br />
                </p>
                <p className='mt-5 text-left'></p>
              </div>
            </div>
          </div>

          <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-3 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
            {/* mt-6: margin top 1.5rem, p-6: padding 1.5rem, lg:sticky: position sticky on large screens, lg:top-4: top 1rem on large screens, lg:row-span-2: span 2 rows on large screens, lg:row-start-3: start at row 3 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-2: start at column 2 on large screens, lg:overflow-hidden: hide overflow on large screens, flex: display flex, justify-center: justify content center, items-center: align items center */}
            <img
              alt='camera'
              src={camera}
              className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
            />
            {/* w-[13rem]: width 13rem, max-w-none: max width none, rounded-xl: border radius extra large, sm:w-[15rem]: width 15rem on small screens, md:w-[17rem]: width 17rem on medium screens, lg:w-[20rem]: width 20rem on large screens, xl:w-[20rem]: width 20rem on extra large screens */}
          </div>

          <div className='lg:row-span-1 lg:row-start-5 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
            {/* lg:row-span-1: span 1 row on large screens, lg:row-start-5: start at row 5 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-1: start at column 1 on large screens, lg:mx-auto: margin x-axis auto on large screens, lg:grid: display grid on large screens, lg:w-full: width full on large screens, lg:max-w-7xl: max width 7xl on large screens, lg:gap-x-8: gap x-axis 2rem on large screens, lg:px-8: padding x-axis 2rem on large screens, flex: display flex, justify-start: justify content start, xl:justify-end: justify content end on extra large screens, items-center: align items center */}
            <div className='lg:pr-4'>
              {/* lg:pr-4: padding right 1rem on large screens */}
              <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
                {/* max-w-full: max width full, text-base/7: text size base with line height 7, text-gray-700: text color gray 700, lg:max-w-lg: max width large on large screens */}
                <div className='flex ml-10 justify-start items-center'>
                  {/* flex: display flex, ml-10: margin left 2.5rem, justify-start: justify content start, items-center: align items center */}
                  <MapIcon aria-hidden='true' className='mt-16 size-8 flex-none text-indigo-600' />
                  {/* mt-16: margin top 4rem, size-8: size 8, flex-none: flex none, text-indigo-600: text color indigo 600 */}
                  <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                    {/* mt-16: margin top 4rem, ml-2: margin left 0.5rem, text-3xl: text size 3xl, text-left: text align left, font-bold: font weight bold, tracking-tight: letter spacing tight, text-gray-1000: text color gray 1000 */}
                    2. 지도에서 한눈에 사진 및 경로 확인
                  </span>
                </div>

                <div className='flex justify-start items-center'>
                  {/* flex: display flex, justify-start: justify content start, items-center: align items center */}
                  <MapPinIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
                  {/* mt-3: margin top 0.75rem, size-6: size 6, flex-none: flex none, text-black: text color black */}
                  <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                    {/* mt-3: margin top 0.75rem, ml-5: margin left 1.25rem, text-left: text align left, text-2xl: text size 2xl, font-[500]: font weight 500 */}
                    Map 화면에서 위치와 함께 찍은 사진을 볼 수 있습니다.
                  </span>
                </div>

                <p className='mt-5 text-left text-xl font-[500]'>
                  {/* mt-5: margin top 1.25rem, text-left: text align left, text-xl: text size xl, font-[500]: font weight 500 */}
                  찍은 사진과 함께 순서별로 경로가 표시되요!
                </p>
              </div>
            </div>
          </div>

          <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-5 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
            {/* mt-6: margin top 1.5rem, p-6: padding 1.5rem, lg:sticky: position sticky on large screens, lg:top-4: top 1rem on large screens, lg:row-span-2: span 2 rows on large screens, lg:row-start-5: start at row 5 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-2: start at column 2 on large screens, lg:overflow-hidden: hide overflow on large screens, flex: display flex, justify-center: justify content center, items-center: align items center */}
            <img
              alt='mainmap'
              src={mainmap}
              className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
            />
            {/* w-[13rem]: width 13rem, max-w-none: max width none, rounded-xl: border radius extra large, sm:w-[15rem]: width 15rem on small screens, md:w-[17rem]: width 17rem on medium screens, lg:w-[20rem]: width 20rem on large screens, xl:w-[20rem]: width 20rem on extra large screens */}
          </div>

          <div className='lg:row-span-1 lg:row-start-7 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
            {/* lg:row-span-1: span 1 row on large screens, lg:row-start-7: start at row 7 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-1: start at column 1 on large screens, lg:mx-auto: margin x-axis auto on large screens, lg:grid: display grid on large screens, lg:w-full: width full on large screens, lg:max-w-7xl: max width 7xl on large screens, lg:gap-x-8: gap x-axis 2rem on large screens, lg:px-8: padding x-axis 2rem on large screens, flex: display flex, justify-start: justify content start, xl:justify-end: justify content end on extra large screens, items-center: align items center */}
            <div className='lg:pr-4'>
              {/* lg:pr-4: padding right 1rem on large screens */}
              <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
                {/* max-w-full: max width full, text-base/7: text size base with line height 7, text-gray-700: text color gray 700, lg:max-w-lg: max width large on large screens */}
                <div className='flex ml-10 justify-start items-center'>
                  {/* flex: display flex, ml-10: margin left 2.5rem, justify-start: justify content start, items-center: align items center */}
                  <PhotoIcon
                    aria-hidden='true'
                    className='mt-16 size-8 flex-none text-indigo-600'
                  />
                  {/* mt-16: margin top 4rem, size-8: size 8, flex-none: flex none, text-indigo-600: text color indigo 600 */}
                  <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                    {/* mt-16: margin top 4rem, ml-2: margin left 0.5rem, text-3xl: text size 3xl, text-left: text align left, font-bold: font weight bold, tracking-tight: letter spacing tight, text-gray-1000: text color gray 1000 */}
                    3. 갤러리에서 사진 확인 및 정리
                  </span>
                </div>

                <div className='flex justify-start items-center'>
                  {/* flex: display flex, justify-start: justify content start, items-center: align items center */}
                  <CheckBadgeIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
                  {/* mt-3: margin top 0.75rem, size-6: size 6, flex-none: flex none, text-black: text color black */}
                  <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                    {/* mt-3: margin top 0.75rem, ml-5: margin left 1.25rem, text-left: text align left, text-2xl: text size 2xl, font-[500]: font weight 500 */}
                    찍은 사진들은 Gallary에서 확인할 수 있습니다!
                  </span>
                </div>

                <div className='flex justify-start items-center'>
                  {/* flex: display flex, justify-start: justify content start, items-center: align items center */}
                  <BoltIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
                  {/* mt-3: margin top 0.75rem, size-6: size 6, flex-none: flex none, text-black: text color black */}
                  <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                    {/* mt-3: margin top 0.75rem, ml-5: margin left 1.25rem, text-left: text align left, text-2xl: text size 2xl, font-[500]: font weight 500 */}
                    해외여행 중 많은 사진들을 촬영하셨죠??
                  </span>
                </div>

                <p className='mt-5 text-left text-xl font-[500]'>
                  {/* mt-5: margin top 1.25rem, text-left: text align left, text-xl: text size xl, font-[500]: font weight 500 */}
                  - 이제 위치별, 날짜별, 인물별 빠르게 나눠보세요!
                  <br />
                  <br />- 중복사진이 있다면 바로 삭제하실 수 있어요.
                  <br />
                  <br />- 한번에 여러장 찍힌 사진들을 자동으로 묶어주고 베스트샷을 선정하면 나머지
                  사진을 한번에 삭제해줍니다.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-0 p-6  lg:top-4 lg:row-span-1 lg:row-start-8 lg:col-span-1 lg:col-start-1 lg:overflow-hidden grid place-items-center max-h-25 mb-200'>
            {/* mt-0: margin top 0, p-6: padding 1.5rem, lg:top-4: top 1rem on large screens, lg:row-span-1: span 1 row on large screens, lg:row-start-8: start at row 8 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-1: start at column 1 on large screens, lg:overflow-hidden: hide overflow on large screens, grid: display grid, place-items-center: place items center, max-h-25: max height 25, mb-200: margin bottom 200 */}
            <img
              alt='bestshot'
              src={bestshot}
              className='w-[8rem] sm:w-[10rem] md:w-[13rem] lg:w-[17rem] xl:w-[21rem]'
            />
            {/* w-[8rem]: width 8rem, sm:w-[10rem]: width 10rem on small screens, md:w-[13rem]: width 13rem on medium screens, lg:w-[17rem]: width 17rem on large screens, xl:w-[21rem]: width 21rem on extra large screens */}
          </div>

          <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-7 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
            {/* mt-6: margin top 1.5rem, p-6: padding 1.5rem, lg:sticky: position sticky on large screens, lg:top-4: top 1rem on large screens, lg:row-span-2: span 2 rows on large screens, lg:row-start-7: start at row 7 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-2: start at column 2 on large screens, lg:overflow-hidden: hide overflow on large screens, flex: display flex, justify-center: justify content center, items-center: align items center */}
            <img
              alt='album'
              src={album}
              className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
            />
            {/* w-[13rem]: width 13rem, max-w-none: max width none, rounded-xl: border radius extra large, sm:w-[15rem]: width 15rem on small screens, md:w-[17rem]: width 17rem on medium screens, lg:w-[20rem]: width 20rem on large screens, xl:w-[20rem]: width 20rem on extra large screens */}
          </div>

          <div className='lg:row-span-1 lg:row-start-9 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
            {/* lg:row-span-1: span 1 row on large screens, lg:row-start-9: start at row 9 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-1: start at column 1 on large screens, lg:mx-auto: margin x-axis auto on large screens, lg:grid: display grid on large screens, lg:w-full: width full on large screens, lg:max-w-7xl: max width 7xl on large screens, lg:gap-x-8: gap x-axis 2rem on large screens, lg:px-8: padding x-axis 2rem on large screens, flex: display flex, justify-start: justify content start, xl:justify-end: justify content end on extra large screens, items-center: align items center */}
            <div className='lg:pr-4'>
              {/* lg:pr-4: padding right 1rem on large screens */}
              <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
                {/* max-w-full: max width full, text-base/7: text size base with line height 7, text-gray-700: text color gray 700, lg:max-w-lg: max width large on large screens */}
                <div className='flex ml-10 justify-start items-center'>
                  {/* flex: display flex, ml-10: margin left 2.5rem, justify-start: justify content start, items-center: align items center */}
                  <BookOpenIcon
                    aria-hidden='true'
                    className='mt-16 size-8 flex-none text-indigo-600'
                  />
                  {/* mt-16: margin top 4rem, size-8: size 8, flex-none: flex none, text-indigo-600: text color indigo 600 */}
                  <span className='mt-16 ml-2 text-3xl text-left font-bold tracking-tight text-gray-1000'>
                    {/* mt-16: margin top 4rem, ml-2: margin left 0.5rem, text-3xl: text size 3xl, text-left: text align left, font-bold: font weight bold, tracking-tight: letter spacing tight, text-gray-1000: text color gray 1000 */}
                    4. 여행이 끝나면 '디지털 앨범!'
                  </span>
                </div>

                <div className='flex justify-start items-center'>
                  {/* flex: display flex, justify-start: justify content start, items-center: align items center */}
                  <DocumentIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
                  {/* mt-3: margin top 0.75rem, size-6: size 6, flex-none: flex none, text-black: text color black */}
                  <span className='mt-3 ml-5 text-left text-2xl font-[500]'>
                    {/* mt-3: margin top 0.75rem, ml-5: margin left 1.25rem, text-left: text align left, text-2xl: text size 2xl, font-[500]: font weight 500 */}
                    여행 후 특정 기간을 지정하여 디지털 앨범을 만들어보세요!
                  </span>
                </div>

                <p className='mt-5 text-left text-xl font-[500]'>
                  {/* mt-5: margin top 1.25rem, text-left: text align left, text-xl: text size xl, font-[500]: font weight 500 */}
                  - 찍었던 사진들이 순서대로 나오게 됩니다.
                  <br />
                  <br />
                  - 필 요없는 사진은 삭제할 수 있어요.
                  <br />
                  <br />
                  - 자유롭게 사진을 배치하고, 기록을 남겨보세요.
                  <br />
                  <br />
                  - 다이어리 꾸미기를 하듯이 다른 사진이나 스티커를 붙일 수도 있어요.
                  <br />
                  <br />- 마지막으로 Export하게 되면 PDF나 이미지 파일로 만들 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-9 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
            {/* mt-6: margin top 1.5rem, p-6: padding 1.5rem, lg:sticky: position sticky on large screens, lg:top-4: top 1rem on large screens, lg:row-span-2: span 2 rows on large screens, lg:row-start-9: start at row 9 on large screens, lg:col-span-1: span 1 column on large screens, lg:col-start-2: start at column 2 on large screens, lg:overflow-hidden: hide overflow on large screens, flex: display flex, justify-center: justify content center, items-center: align items center */}
            <img
              alt='DigitalAlbum'
              src={digitalalbum}
              className='w-[12rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[22rem] xl:w-[27rem]'
            />
            {/* w-[12rem]: width 12rem, max-w-none: max width none, rounded-xl: border radius extra large, sm:w-[15rem]: width 15rem on small screens, md:w-[17rem]: width 17rem on medium screens, lg:w-[22rem]: width 22rem on large screens, xl:w-[27rem]: width 27rem on extra large screens */}
          </div>
        </div>
      </div>
      <DownloadButton />
    </>
  );
};

export default LandingPage;
