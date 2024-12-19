import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import '../styles/LandingPage.css';
import mainmap from '../assets/images/MainMap.png';
import urlogLogo from '../assets/images/URLog_Logo.png';
import telescope from '../assets/images/image_Telescope.png';

const LandingPage: React.FC = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-10 lg:overflow-visible lg:px-0'>
      {/* =================================================================================================================================== 
          Background 
      =================================================================================================================================== */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          aria-hidden='true'
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
        >
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
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
            width='100%' // 화면 전체를 채우도록 설정
            height='100%' // 화면 전체를 채우도록 설정
            strokeWidth={0}
          />
        </svg>
      </div>

      {/* =================================================================================================================================== 
          Body start  |||   grid setting - grid grid-cols-1 grid-row-1  /  lg:grid-cols-2 lg:grid-row-40
      =================================================================================================================================== */}
      <div className='mx-auto grid max-w-2xl grid-cols-1 grid-row-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid-row-40 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base/7 font-semibold text-indigo-600'>
                발자국을 따라가며 당신의 여행을 기록해드리겠습니다.
              </p>
              {/* <h1 className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                URLog
              </h1> */}
              <div className='flex justify-center items-center lg:flex-1'>
                <a href='#' className='-m-0.5'>
                  <span className='sr-only'>Your Company</span>
                  <img alt='' src={urlogLogo} className='h-20 w-auto' />
                </a>
              </div>
              <p className='mt-2 font-[500] text-xl/8 text-gray-700'>
                안녕하세요! <br />
                'URLog'는 여행중 경로를 자동으로 기록하고 사진과 영상을 쉽게 정리하여 디지털앨범으로
                출력할 수 있는 앱서비스입니다.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================================================================================== 
          image 1 (Main)  |||   grid prossess - lg:row-span-1 lg:row-start-1 lg:col-span-1 lg:col-start-2 
        =================================================================================================================================== */}
        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-1 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          {/* <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'> */}
          <img
            alt='MainMap'
            src={mainmap}
            className='w-[15rem] max-w-none rounded-xl sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]' // 실직적인 이미지 크기 수정
            // className='w-[38rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
          />
        </div>

        {/* =================================================================================================================================== 
          image 1-2 |||   grid prossess - lg:row-span-1 lg:row-start-1 lg:col-span-1 lg:col-start-2 
        =================================================================================================================================== */}
        <div className='mt-6 p-6  lg:top-4 lg:row-span-1 lg:row-start-2 lg:col-span-1 lg:col-start-1 lg:overflow-hidden flex justify-center items-center'>
          {/* <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'> */}
          <img
            alt=''
            src={telescope}
            className='w-[8rem] max-w-none rounded-xl sm:w-[10rem] md:w-[13rem] lg:w-[17rem] xl:w-[21rem]'
            // className='w-[38rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
          />
        </div>

        {/* =================================================================================================================================== 
          ************************** Explanation for my product *******************************
          explanation 1  |||   grid prossess - lg:row-span-1 lg:row-start-2 lg:col-span-1 lg:col-start-1 
        =================================================================================================================================== */}
        <div className='lg:row-span-1 lg:row-start-3 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-center items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <CloudArrowUpIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  1. 자동 GPS 위치 기록
                </span>
              </div>
              <p className='mt-3'>
                내용을 적어주세요. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
                commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================================================================================== 
          image 2  |||   grid prossess - lg:row-span-1 lg:row-start-2 lg:col-span-1 lg:col-start-2 
        =================================================================================================================================== */}
        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-3 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          <img
            alt='Photo'
            src={mainmap}
            className='w-[15rem] max-w-none rounded-xl sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]'
          />
        </div>

        {/* =================================================================================================================================== 
          explanation 2  |||   grid prossess - lg:row-span-1 lg:row-start-4 lg:col-span-1 lg:col-start-1 
        =================================================================================================================================== */}
        <div className='lg:row-span-1 lg:row-start-4 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-center items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <CloudArrowUpIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  1. 자동 GPS 위치 기록
                </span>
              </div>
              <p className='mt-3'>
                내용을 적어주세요. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
                commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================================================================================== 
          image 3  |||   grid prossess - lg:row-span-1 lg:row-start-5 lg:col-span-1 lg:col-start-2 
        =================================================================================================================================== */}
        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-5 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          <img
            alt='Photo'
            src={mainmap}
            className='w-[15rem] max-w-none rounded-xl sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]'
          />
        </div>

        {/* =================================================================================================================================== 
          explanation 3  |||   grid prossess - lg:row-span-1 lg:row-start-5 lg:col-span-1 lg:col-start-1 
        =================================================================================================================================== */}
        <div className='lg:row-span-1 lg:row-start-5 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-center items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <CloudArrowUpIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  1. 자동 GPS 위치 기록
                </span>
              </div>
              <p className='mt-3'>
                내용을 적어주세요. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
                commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================================================================================== 
          explanation 3  |||   grid prossess - lg:row-span-1 lg:row-start-6 lg:col-span-1 lg:col-start-1 
        =================================================================================================================================== */}
        <div className='lg:row-span-1 lg:row-start-6 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-center items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <CloudArrowUpIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  1. 자동 GPS 위치 기록
                </span>
              </div>
              <p className='mt-3'>
                내용을 적어주세요. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
                commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================================================================================== 
          explanation 4  |||   grid prossess - lg:row-span-1 lg:row-start-7 lg:col-span-1 lg:col-start-1 
        =================================================================================================================================== */}
        <div className='lg:row-span-1 lg:row-start-7 lg:col-span-1 lg:col-start-1  lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-center items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base/7 text-gray-700 lg:max-w-lg'>
              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                No server? No problem.
              </h2>
              <p className='mt-6'>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
                arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
                vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>

        {/*
        =================================================================================================================================== 
          마지막 핵심기능  |||   grid prossess - lg:row-span-1 lg:row-start-10 lg:col-span-1 lg:col-start-1 
        =================================================================================================================================== */}
        <div className='lg:row-span-1 lg:row-start-10 lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-center items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <CloudArrowUpIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  핵심기능 <br />
                </span>
              </div>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    aria-hidden='true'
                    className='mt-1 size-5 flex-none text-indigo-600'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900 flex justify-start items-center'>
                      Push to deploy
                    </strong>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                    perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <LockClosedIcon
                    aria-hidden='true'
                    className='mt-1 size-5 flex-none text-indigo-600'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900 flex justify-start items-center'>
                      SSL certificates
                    </strong>{' '}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                    commodo.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <ServerIcon
                    aria-hidden='true'
                    className='mt-1 size-5 flex-none text-indigo-600'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900 flex justify-start items-center'>
                      Database backups
                    </strong>{' '}
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
                    morbi lobortis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
