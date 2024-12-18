// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/component/Header.css';

// const Header: React.FC = () => {
//   return (
//     <header className='header'>
//       <div className='logo'>
//         <Link to='/'>URLog</Link>
//       </div>
//       <nav className='nav-links'>
//         {/* <Link to='/home'>Home</Link> */}
//         {/* <Link to='/detail'>Detail</Link> */}
//       </nav>
//     </header>
//   );
// };

// export default Header;

'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Popover,
  // PopoverButton,
  // PopoverGroup,
  // PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  // Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import urlogLogo from '../assets/images/URLog_Logo.png';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      {/* =================================================================================================================================== 
        이 버튼은 lg 이하로 내려갔을 때, 좁혀지면서 'drawer navigator' Button을 나타나게 하는 것입니다.
      =================================================================================================================================== */}
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-0'
      >
        {/* =================================================================================================================================== 
          이 버튼은 lg 이하로 내려갔을 때, 좁혀지면서 'drawer navigator' Button을 나타나게 하는 것입니다.
        =================================================================================================================================== */}
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img alt='logo' src={urlogLogo} className='h-20 w-auto' />
          </a>
        </div>

        {/* =================================================================================================================================== 
          이 버튼은 lg 이하로 내려갔을 때, 좁혀지면서 'drawer navigator' Button을 나타나게 하는 것입니다.
        =================================================================================================================================== */}
        {/* <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div> */}

        {/* =================================================================================================================================== 
          lg 이상일 때, 상단에 웹사이트처럼 버튼이 나타나게 됩니다.
         =================================================================================================================================== */}
        {/* <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <PopoverButton className='flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900'>
              Product
              <ChevronDownIcon aria-hidden='true' className='size-5 flex-none text-gray-400' />
            </PopoverButton>

            <PopoverPanel
              transition
              className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
            >
              <div className='p-4'>
                {products.map((item) => (
                  <div
                    key={item.name}
                    className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50'
                  >
                    <div className='flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                      <item.icon
                        aria-hidden='true'
                        className='size-6 text-gray-600 group-hover:text-indigo-600'
                      />
                    </div>
                    <div className='flex-auto'>
                      <a href={item.href} className='block font-semibold text-gray-900'>
                        {item.name}
                        <span className='absolute inset-0' />
                      </a>
                      <p className='mt-1 text-gray-600'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100'
                  >
                    <item.icon aria-hidden='true' className='size-5 flex-none text-gray-400' />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href='#' className='text-sm/6 font-semibold text-gray-900'>
            Features
          </a>
          <a href='#' className='text-sm/6 font-semibold text-gray-900'>
            Marketplace
          </a>
          <a href='#' className='text-sm/6 font-semibold text-gray-900'>
            Company
          </a>
        </PopoverGroup> */}

        {/* =================================================================================================================================== 
          평소에 hidden이다가 lg일 때 flex로 나타나게 해주고 있습니다. 저는 drawer navigator를 사용하지 않고, 이것을 그대로 사용하려고 합니다.
         =================================================================================================================================== */}
        <div className='lg:flex lg:flex-1 lg:justify-end'>
          {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'> */}
          <a href='#' className='text-sm/20 font-bold text-gray-900'>
            Download App <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>

      {/* =================================================================================================================================== 
        이 버튼은 lg 이하로 내려갔을 때, 좁혀지면서 'drawer navigator' 내부 구성 입니다.
      =================================================================================================================================== */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img alt='' src={urlogLogo} className='h-14 w-auto' />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
                    Product
                    <ChevronDownIcon
                      aria-hidden='true'
                      className='size-5 flex-none group-data-[open]:rotate-180'
                    />
                  </DisclosureButton>
                  <DisclosurePanel className='mt-2 space-y-2'>
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as='a'
                        href={item.href}
                        className='block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Marketplace
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
