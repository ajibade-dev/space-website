/* eslint-disable react/no-unescaped-entities */

"use client"
import Image from "next/image";
import { useState } from "react";
import { motion} from "framer-motion";

export default function Home() {

  const images = [
    {
      desktop: '/base/background-home-desktop.jpg',
      tablet: '/base/background-home-tablet.jpg', 
      mobile:'/base/background-home-mobile.jpg'
    }
  ]

  return (
    <main className=" relative flex min-h-screen flex-col items-center">
    {/* the div for the image */}
    <div className="w-full h-screen">
      <div className="lg:block hidden">
        {/* for the big screens */}
      <Image
          src={images[0].desktop}
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>
      {/* for the tablet screen */}
      <div className="md:block lg:hidden ">
      <Image
          src="/base/background-home-tablet.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>  
      {/* for the smallest screen */}
      <div className="sm:block md:hidden ">
      <Image
          src="/base/background-home-mobile.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>  
      {/* the div to hold them all */}
      <div className="absolute lg:top-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white lg:w-full w-3/4 lg:px-10 mt-16 lg:mt-0 max-w-[1440px]">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-col flex lg:items-start items-center justify-start w-full lg:w-1/2 gap-6">
          <h1 className="text-2xl font-extralight font-barlow tracking-wider">SO, YOU WANT TO TRAVEL TO</h1>
          <h2 className="md:text-9xl text-8xl font-bellefair">SPACE</h2>
          <p className="font-extralight max-w-2xl font-barlow lg:text-justify text-center lg:w-3/4 w-full">
            Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
          </div>
          <div className="flex-col flex items-center justify-center lg:w-1/2 w-full py-6 lg:py-0" >
          <button className=" px-12 py-24 bg-white rounded-full text-3xl font-bellefair text-very-dark-navy">
            EXPLORE
          </button>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
