import Image from 'next/image'
import { useState } from 'react';

const Dropdown = ({ children }) => {
  return (
    <nav className='flex items-center space-x-6 xl:space-x-8'>
      {children}
    </nav>
  )
}

export const DropdownItem = ({ section }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      onMouseOver={() => setOpenDropdown(true)}
      onMouseLeave={() => {
        setOpenDropdown(false);
      }}
    >
      <a className="hover:text-rust transition-all flex items-center text-xs font-normal tracking-[2px] leading-6 uppercase">
        <span>{section}</span>
        <svg
          className="ml-2"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6L0.669873 -8.15666e-07L9.33013 -5.85621e-08L5 6Z"
            fill=" black "
          ></path>
        </svg>
      </a>
      {openDropdown ?
        <div className="dropdown absolute translate-x-0 pt-8">
          <div className="wild bg-white">hey, it ain&apos;t that bad right?</div>
        </div> : ''}
    </div>
  )
}

const Navbar = () => {
  return (
    <header className='w-full bg-emerald px-6'>
      <div className="container px-[15px] py-[14px]">
        <div className='flex justify-between relative'>
          <Image
            className='max-w-[75px] lg:max-w-none lg:block hidden'
            src="https://www.linklogistics.com/images/link-logo-black.svg"
            alt="Link Logistics Logo"
            width={100}
            height={26}
          />
          <Dropdown>
            <DropdownItem section='portfolio' />
            <DropdownItem section='capabilities' />
            <DropdownItem section='about' />
            <DropdownItem section='careers' />
          </Dropdown>
        </div>
      </div>
    </header>
  )
}

export default Navbar