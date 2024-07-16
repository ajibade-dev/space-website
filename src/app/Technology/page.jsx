"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TechnologyPage() {
  const [technology, setTechnology] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setTechnology(data.technology);
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/technology/background-technology-desktop.jpg)' }}>
      <div className="absolute inset-0 w-full h-full">
        <div className="hidden lg:block">
          <Image
            src="/technology/background-technology-desktop.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            src="/technology/background-technology-tablet.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/technology/background-technology-mobile.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
      </div>

      <div className="relative w-full lg:pl-20 px-6 py-16 pt-40 lg:pt-48 flex flex-col ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className="lg:text-left mb-10"
        >
          <h1 className="text-xl text-white font-barlow tracking-wider"><span className='text-slate-700 font-extrabold mr-6'>03</span>SPACE LAUNCH 101</h1>
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full pt-20">
          <div className='flex flex-col lg:flex-row gap-4 mt-5 lg:mt-0'>
            {/* for the sideshows (buttonlike) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-10 font-bellefair justify-center items-center pt-0"
            >
              {technology.map((tech, index) => (
                <button
                  key={tech.id}
                  className={`tab px-4 py-2 ${activeTab === index ? 'active px-4 py-2 rounded-full bg-white text-black' :'px-4 py-2 rounded-full bg-transparent border-2 border-white text-white'}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tech.id}
                </button>
              ))}
            </motion.div>
        
          {/* for the div holding the names, details and other things */}
          <div className="mt-10 lg:mt-0 w-full flex flex-col gap-6 items-center lg:items-start">
            {technology.length > 0 && (
              <div className="text-center lg:text-left text-white">
                {/* for the name on top */}
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="lg:text-3xl text-xl font-extralight font-bellefair py-2 uppercase">THE TERMINOLOGY...</motion.h2>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="lg:text-5xl text-3xl  font-bellefair py-2 uppercase">{technology[activeTab]?.name}</motion.h3>
                <div className='flex items-center justify-center lg:justify-start'>
                  {/* for the description */}
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="mt-4 font-barlow font-extralight w-full md:w-3/4 lg:w-full lg:text-justify leading-8">{technology[activeTab]?.description}</motion.p>
                </div>
              </div>
            )}
          
          </div>
          </div>
            {/* for the image that shows on the side */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex-shrink-0 lg:w-1/2 w-full mt-8 lg:mt-0 flex flex-col items-center justify-center"
          >
            {technology.length > 0 && (
              <div className="">
                <img
                  src={technology[activeTab]?.images.portrait.replace('./', '/')}
                  alt={technology[activeTab]?.name}
                  layout="fill"
                  objectFit="cover"
                  className="technology images"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
