import urlogLogo from '../assets/images/URLog_Logo.png';
import DownloadButton from './DownloadButton.tsx';

const Header = () => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full bg-white z-10 shadow h-18'>
        <nav
          aria-label='Global'
          className='mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-0'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img alt='logo' src={urlogLogo} className='h-16 w-auto' />
            </a>
          </div>

          <DownloadButton />
        </nav>
      </header>
    </>
  );
};

export default Header;
