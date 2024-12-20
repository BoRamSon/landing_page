import {
  MagnifyingGlassPlusIcon,
  PhotoIcon,
  CpuChipIcon,
  BookOpenIcon,
  Square3Stack3DIcon,
  ViewColumnsIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';
import '../styles/LandingPage.css';
import cover from '../assets/images/URLog_Cover_1x.png';
import mainmap from '../assets/images/URLog_MainMap_1x.png';
import album from '../assets/images/URLog_Gallary_1x.png';
import digitalalbum from '../assets/images/URLog_DigitalAlbum_1x.png';
import camera from '../assets/images/URLog_Camera.png';
import telescope from '../assets/images/image_Telescope.png';

const LandingPage: React.FC = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-10 lg:overflow-visible lg:px-0'>
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
            width='100%'
            height='100%'
            strokeWidth={0}
          />
        </svg>
      </div>

      <div className='mx-auto grid max-w-2xl grid-cols-1 grid-row-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid-row-40 lg:items-start lg:gap-y-10'>
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
                'URLog'는 여행중 경로를 자동으로 기록하고 사진과 영상을 쉽게 정리하여 디지털앨범으로
                출력할 수 있는 앱서비스입니다.
              </p>
            </div>
          </div>
        </div>

        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-1 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
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

        <div className='lg:row-span-1 lg:row-start-3 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <MagnifyingGlassPlusIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-3xl font-bold tracking-tight text-gray-1000'>
                  1. 이게 진짜 1번입니다. 여기는 사진찍는 것을 보여줄 것입니다.
                </span>
              </div>
              <p className='mt-3 text-left text-2xl font-[500]'>앱 내에서 사진을 촬영해주세요!</p>
              <p className='mt-5 text-left'>정말 재미있죠?</p>
            </div>
          </div>
        </div>

        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-3 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          <img
            alt='camera'
            src={camera}
            className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
          />
        </div>

        <div className='lg:row-span-1 lg:row-start-5 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <MagnifyingGlassPlusIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-3xl font-bold tracking-tight text-gray-1000'>
                  1. 자동 GPS 위치 기록
                </span>
              </div>
              <p className='mt-3 text-left text-2xl font-[500]'>
                여행 직전 GPS를 켜주세요! 자동으로 경로를 기록하고 보여줍니다!
              </p>
              <p className='mt-5 text-left'>
                사용자의 위치 정보를 기반으로 기록된 위치는 언제 어디서나 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-5 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          <img
            alt='mainmap'
            src={mainmap}
            className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
          />
        </div>

        <div className='lg:row-span-1 lg:row-start-7 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <PhotoIcon aria-hidden='true' className='mt-16 size-8 flex-none text-indigo-600' />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  2. 앨범 확인 및 분류 정리
                </span>
              </div>

              <div className='flex justify-start items-center'>
                <Square3Stack3DIcon
                  aria-hidden='true'
                  className='mt-3 size-6 flex-none text-black'
                />
                <span className='mt-3 ml-5 text-left text-xl font-[500]'>
                  "여행중 촬영한 다량의 사진과 영상들.. 정리하기 귀찮아.."
                </span>
              </div>
              <div className='flex justify-start items-center'>
                <ViewColumnsIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
                <span className='mt-3 ml-5 text-left text-xl font-[500]'>
                  "이 많은 사진들 중 베스트사진을 선택하고 나머지를 일일이 삭제하는게 힘들어."
                </span>
              </div>
              <div className='flex justify-start items-center'>
                <TrashIcon aria-hidden='true' className='mt-3 size-6 flex-none text-black' />
                <span className='mt-3 ml-5 text-left text-xl font-[500]'>
                  "용량이 가득 찼네? 뭘 삭제해야 하는 거야.."
                </span>
              </div>

              <div className='ml-10 max-w-xl text-base/7 text-gray-700 lg:max-w-4xl'>
                <div className='flex ml-10 justify-start items-center'>
                  <CpuChipIcon
                    aria-hidden='true'
                    className='mt-16 size-8 flex-none text-indigo-600'
                  />
                  <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                    핵심기능 소개 <br />
                  </span>
                </div>
                <p className='mt-3 text-left text-lg font-[500]'>
                  - 날짜별, 시간대별, 위치별 정렬 / 폴더그룹화 만들기 <br />
                  - 배경사진, 사물사진, 인물사진(얼굴, 상반신, 전신 등)을 구분 및 정렬 / 폴더그룹화
                  만들기 <br />
                  - 중복되거나 비슷한 사진들을 인식하고 베스트컷와 B컷 분류하여 그룹화 <br />
                  - 베스트컷 선정 후 빠르게 B컷을 모두 삭제하는 기능 제공
                  <br />- 주기적으로 사진 및 동영상 삭제 프로세스를 제공하여 정리가 되지 않았거나 더
                  이상 필요없 는 사진 및 영상을 정리하는 서비스 제공
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-7 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          <img
            alt='album'
            src={album}
            className='w-[13rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[20rem] xl:w-[20rem]'
          />
        </div>

        <div className='lg:row-span-1 lg:row-start-9 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <BookOpenIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  3. 여행후 디지털앨범(PDF) 출력
                </span>
              </div>
              <p className='mt-3 text-left'>
                내용을 적어주세요. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
                commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>

        <div className='lg:row-span-1 lg:row-start-10 lg:col-span-1 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center'>
          <div className='lg:pr-4'>
            <div className='max-w-full text-base/7 text-gray-700 lg:max-w-lg'>
              <div className='flex ml-10 justify-start items-center'>
                <BookOpenIcon
                  aria-hidden='true'
                  className='mt-16 size-8 flex-none text-indigo-600'
                />
                <span className='mt-16 ml-2 text-2xl font-bold tracking-tight text-gray-1000'>
                  (설명이나 사진 첨부)
                </span>
              </div>
              <p className='mt-3 text-left'>
                내용을 적어주세요. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
                commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>

        <div className='-mt-6 p-6 lg:sticky lg:top-4 lg:row-span-2 lg:row-start-9 lg:col-span-1 lg:col-start-2 lg:overflow-hidden flex justify-center items-center'>
          <img
            alt='DigitalAlbum'
            src={digitalalbum}
            className='w-[12rem] max-w-none rounded-xl sm:w-[15rem] md:w-[17rem] lg:w-[22rem] xl:w-[27rem]'
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
