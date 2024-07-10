"use client"


import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full lg:pt-10 md:pt-0 lg:pl-10 md:pl-4 flex justify-between items-center z-10">
      <div className="logo">
        <Link href="/">
            <img src="/normal/logo.svg" alt="Logo" className="w-8 h-8" />
        </Link>
      </div>
      <ul className="flex space-x-6 text-white h-[96px] items-center px-16 gap-12 
       bg-white bg-opacity-10 backdrop-blur-md shadow-md font-barlow">
        <li className='h-full items-center flex hover:border-b-2 hover:border-b-white'>
          <Link href="/">
            <p><span className='font-bold'>00 </span> HOME</p>
          </Link>
        </li>
        <li className='h-full items-center flex hover:border-b-2 hover:border-b-white'>
          <Link href="/Destination">
            <p className='font-extralight tracking-widest'><span className='font-bold'>01 </span>DESTINATION</p>
          </Link>
        </li>
        <li>
          <Link href="/Crew">
            <p><span className='font-bold'>02 </span> CREW</p>
          </Link>
        </li>
        <li>
          <Link href="/Technology">
            <p><span className='font-bold'>03 </span> TECHNOLOGY</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
