"use client"
import Image from "next/image";
import { useState } from "react";

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
    <div className="w-full h-screen relative">
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
      </div>
    </main>
  );
}
