"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        <motion.div
        
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.5}}
        transition={{ duration:0.3 }}
        variants={{
          hidden: { opacity: 0, x:-50 },
          visible: { opacity: 1, x: 0 }
        }}className="lg:text-left mb-10">
          <h1 className="text-xl text-white font-barlow tracking-wider"><span className='text-slate-700 font-extrabold mr-6'>01</span>PICK YOUR DESTINATION</h1>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full pt-20">
          {/* for the image that shows on the side */}
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once:true, amount:0.5}}
           transition={{ delay:0.2, duration:0.5 }}
           variants={{
             hidden: { opacity: 0, x:-50 },
             visible: { opacity: 1, x: 0 }
           }}
          className="flex-shrink-0 lg:w-1/2 flex flex-col justify-center lg:justify-end">
            {destinations.length > 0 && (
              <div className="relative w-full max-w-md lg:max-w-none">
                <img
                  src={destinations[activeTab]?.images.png.replace('./', '/')}
                  alt={destinations[activeTab]?.name}
                  className="planet images"
                />
              </div>
            )}
          </motion.div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex flex-col items-center lg:items-start">
          {/* for the sideshows (buttonlike) */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once:true, amount:0.5}}
             transition={{ duration:0.3 }}
             variants={{
               hidden: { opacity: 0, x:50 },
               visible: { opacity: 1, x: 0 }
             }}
            className="flex space-x-4 lg:space-x-6 mb-6 justify-center lg:justify-start font-barlow">
              {destinations.map((destination, index) => (
                <button
                  key={destination.name}
                  className={`tab px-4 py-2 ${activeTab === index ? 'active text-white border-b-2 border-white' : 'text-gray-400'}`}
                  onClick={() => handleTabClick(index)}
                >
                  {destination.name}
                </button>
              ))}
            </motion.div>
            {destinations.length > 0 && (
              <div className="text-center lg:text-left text-white">
                {/* for the name on top */}
                <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once:true, amount:0.5}}
                 transition={{delay:0.2, duration:0.3 }}
                 variants={{
                   hidden: { opacity: 0, x:50 },
                   visible: { opacity: 1, x: 0 }
                 }}
                className="text-8xl font-bellefair py-6 uppercase">{destinations[activeTab]?.name}</motion.h2>
                <div className='flex items-center justify-center lg:justify-start'>
                  {/* for the description */}
                <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount:0.5}}
                transition={{delay:0.3, duration:0.3 }}
                variants={{
                  hidden: { opacity: 0, x:50 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="mt-4 font-barlow font-extralight w-full md:w-3/4 lg:text-justify leading-8">{destinations[activeTab]?.description}</motion.p>
                </div>
                <div className='flex items-center justify-center lg:justify-start'>
                <div className="flex flex-col md:flex-row mt-10 lg:mt-16 gap-7 md:gap-0 items-center md:justify-between md:w-3/4 w-full uppercase justify-center">
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once:true, amount:0.5}}
                  transition={{delay:0.4, duration:0.3 }}
                  variants={{
                    hidden: { opacity: 0, x:50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className='flex flex-col gap-4'>
                    <p className='font-barlow tracking-wider font-extralight'>Avg. distance:</p>
                    <p className='font-bellefair text-4xl'>{destinations[activeTab]?.distance}</p>
                  </motion.div>
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once:true, amount:0.5}}
                  transition={{delay:0.5, duration:0.3 }}
                  variants={{
                    hidden: { opacity: 0, x:50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className='flex flex-col gap-4'>
                    <p className='font-barlow tracking-wider font-extralight'>Est Travel Time:</p>
                    <p className='font-bellefair text-4xl'>{destinations[activeTab]?.travel}</p>
                  </motion.div>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
