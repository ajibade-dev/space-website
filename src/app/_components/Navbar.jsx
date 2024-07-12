"use client"

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full lg:pt-10 lg:pl-10 md:pl-6 flex flex-row justify-between items-center z-10">
      <div className="md:flex hidden">
        <Link href="/">
          <img src="/normal/logo.svg" alt="Logo" className="w-8 h-8" />
        </Link>
      </div>
      <ul className="md:flex hidden space-x-6 text-white h-[96px] items-center justify-items-end px-16 gap-12 bg-white bg-opacity-10 backdrop-blur-lg shadow-md font-barlow">
        <li className="h-full items-center flex hover:border-b-2 hover:border-b-white">
          <Link href="/">
            <p className="font-extralight tracking-widest"><span className="font-bold">00 </span> HOME</p>
          </Link>
        </li>
        <li className="h-full items-center flex hover:border-b-2 hover:border-b-white">
          <Link href="/Destination">
            <p className="font-extralight tracking-widest"><span className="font-bold">01 </span>DESTINATION</p>
          </Link>
        </li>
        <li className="h-full items-center flex hover:border-b-2 hover:border-b-white">
          <Link href="/Crew">
            <p className="font-extralight tracking-widest"><span className="font-bold">02 </span> CREW</p>
          </Link>
        </li>
        <li className="h-full items-center flex hover:border-b-2 hover:border-b-white">
          <Link href="/Technology">
            <p className="font-extralight tracking-widest"><span className="font-bold">03 </span> TECHNOLOGY</p>
          </Link>
        </li>
      </ul>
      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center w-full p-4 mt-4">
        <div className="md:hidden flex">
          <Link href="/">
            <img src="/normal/logo.svg" alt="Logo" className="w-8 h-8" />
          </Link>
        </div>
        {/* Hamburger */}
        <div className="flex md:hidden" onClick={toggleMenu}>
          <img src="/normal/icon-hamburger.svg" alt="hamburger" className="w-8 h-8" />
        </div>
        {isOpen && (
          <nav className="md:hidden flex flex-col bg-white text-white fixed top-0 right-0 h-full w-[70%] pt-10 z-40  items-center bg-opacity-10 backdrop-blur-md font-barlow">
            <div className="flex ml-auto p-6">
              <button onClick={toggleMenu}>
                <Image src="/normal/icon-close.svg" alt="Menu" width={30} height={30} />
              </button>
            </div>
            <ul className="flex flex-col gap-10 mr-auto mt-20 w-full pl-6">
              <li className="hover:border-r-2 hover:border-r-white">
                <Link href="/">
                  <p className="font-extralight tracking-widest"><span className="font-bold">00 </span>HOME</p>
                </Link>
              </li>
              <li className="hover:border-r-2 hover:border-r-white">
                <Link href="/Destination">
                  <p className="font-extralight tracking-widest"><span className="font-bold">01 </span>DESTINATION</p>
                </Link>
              </li>
              <li className="hover:border-r-2 hover:border-r-white">
                <Link href="/Crew">
                  <p className="font-extralight tracking-widest"><span className="font-bold">02 </span>CREW</p>
                </Link>
              </li>
              <li className="hover:border-r-2 hover:border-r-white">
                <Link href="/Technology">
                  <p className="font-extralight tracking-widest"><span className="font-bold">03 </span>TECHNOLOGY</p>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
