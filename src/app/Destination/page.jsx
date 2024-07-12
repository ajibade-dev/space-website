"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DestinationPage() {
  const [destinations, setDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setDestinations(data.destinations);
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/destination/background-destination-desktop.jpg)' }}>
      <div className="absolute inset-0 w-full h-full">
        <div className="hidden lg:block">
          <Image
            src="/destination/background-destination-desktop.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            src="/destination/background-destination-tablet.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/destination/background-destination-mobile.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
      </div>

      <div className="relative w-full max-w-6xl px-6 py-16 pt-40 lg:pt-48 flex flex-col ">
      <div className="lg:text-left mb-10">
          <h1 className="text-xl text-white font-barlow tracking-wider"><span className='text-slate-700 font-extrabold mr-6'>01</span>PICK YOUR DESTINATION</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full pt-20">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col justify-center lg:justify-end">
          
            {destinations.length > 0 && (
              <div className="relative w-full max-w-md lg:max-w-none">
                <img
                  src={destinations[activeTab].images.png.replace('./', '/')}
                  alt={destinations[activeTab].name}
                  className=""
                />
              </div>
            )}
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="flex space-x-4 lg:space-x-6 mb-6 justify-center lg:justify-start font-barlow">
              {destinations.map((destination, index) => (
                <button
                  key={destination.name}
                  className={`tab px-4 py-2 ${activeTab === index ? 'active text-white border-b-2 border-white' : 'text-gray-400'}`}
                  onClick={() => handleTabClick(index)}
                >
                  {destination.name}
                </button>
              ))}
            </div>
            <div className="text-center lg:text-left text-white">
              <h2 className="text-8xl font-bellefair py-6 uppercase">{destinations[activeTab].name}</h2>
              <p className="mt-4 font-barlow font-extralight w-full lg:w-3/4 text-justify leading-8">{destinations[activeTab].description}</p>
              <div className="flex flex-row mt-16 items-center">
                <div className='flex flex-col gap-4'><p><strong>Distance:</strong></p>
                <p> {destinations[activeTab].distance}</p></div>
                <div className='flex flex-col gap-4'>
                  <p className=""><strong>Travel Time:</strong></p> 
                  <p> {destinations[activeTab].travel}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
