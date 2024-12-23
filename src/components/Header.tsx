import urlogLogo from '../assets/images/URLog_Logo.png';
import DownloadButton from './ButtonDownload.tsx';

const Header = () => {
  return (
    <header className='bg-white'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-0'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img alt='logo' src={urlogLogo} className='h-20 w-auto' />
          </a>
        </div>

        <DownloadButton />
      </nav>
    </header>
  );
};

export default Header;
