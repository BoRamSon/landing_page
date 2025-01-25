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
          <Row1 cover={cover} telescope={telescope} />
          <Row2 camera={camera} />
          <Row3 mainmap={mainmap} />
          <Row4 bestshot={bestshot} />
          <Row5 album={album} digitalalbum={digitalalbum} />
        </div>
      </div>
      <DownloadButton />
    </>
  );
};

export default LandingPage;
