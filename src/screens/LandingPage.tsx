import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/LandingPage.css';
import cover from '../assets/images/URLog_Cover_1x.png';
import mainmap from '../assets/images/URLog_MainMap_1x.png';
import album from '../assets/images/URLog_Gallary_1x.png';
import digitalalbum from '../assets/images/URLog_DigitalAlbum_1x.png';
import camera from '../assets/images/URLog_Camera.png';
import telescope from '../assets/images/image_Telescope.png';
import bestshot from '../assets/images/URLog_DigitalAlbum_BestShot.png';
import DownloadButton from '../components/DownloadButton';
import Row1 from '../components/LandingPage/Row1';
import Row2 from '../components/LandingPage/Row2';
import Row3 from '../components/LandingPage/Row3';
import Row4 from '../components/LandingPage/Row4';
import Row5 from '../components/LandingPage/Row5';

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
        {/* relative: position relative, isolate: 새로운 스태킹 컨텍스트 생성, overflow-hidden: 오버플로우 숨기기, bg-white: 배경색 흰색, px-6: x축 패딩 1.5rem, py-10: y축 패딩 2.5rem, 
        lg:overflow-visible: 큰 화면에서 오버플로우 보이기, lg:px-0: 큰 화면에서 x축 패딩 0, mt-16: 위쪽 마진 4rem */}

        <div className='absolute inset-0 -z-10 overflow-hidden'>
          {/* absolute: position absolute, inset-0: 상하좌우 0, -z-10: z-index -10, overflow-hidden: 오버플로우 숨기기 */}
          <svg
            aria-hidden='true'
            className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          >
            {/* absolute: position absolute, left-[max(50%,25rem)]: 왼쪽 최대값 50% 또는 25rem, top-0: 위쪽 0, h-[64rem]: 높이 64rem, w-[128rem]: 너비 128rem, -translate-x-1/2: x축 -50% 이동, stroke-gray-200: 선 색상 회색 200, mask-image: 방사형 그라디언트 */}
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
              {/* overflow-visible: 오버플로우 보이기, fill-gray-50: 채우기 색상 회색 50 */}
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
          {/* mx-auto: x축 마진 자동, grid: 그리드 디스플레이, max-w-2xl: 최대 너비 2xl, grid-cols-1: 1열, grid-row-1: 1행, gap-x-8: x축 간격 2rem, gap-y-16: y축 간격 4rem, lg:mx-0: 큰 화면에서 x축 마진 0, lg:max-w-none: 큰 화면에서 최대 너비 없음, lg:grid-cols-2: 큰 화면에서 2열, lg:grid-row-40: 큰 화면에서 40행, lg:items-start: 큰 화면에서 아이템 정렬 시작, lg:gap-y-10: 큰 화면에서 y축 간격 2.5rem */}
          <Row1 cover={cover} telescope={telescope} />
          <Row2 camera={camera} />
          <Row3 mainmap={mainmap} />
          <Row4 bestshot={bestshot} album={album} />
          <Row5 digitalalbum={digitalalbum} />
        </div>
      </div>
      <DownloadButton />
    </>
  );
};

export default LandingPage;
