"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CrewPage() {
  const [crew, setCrew] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setCrew(data.crew);
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/crew/background-crew-desktop.jpg)' }}>
      <div className="absolute inset-0 w-full h-full">
        <div className="hidden lg:block">
          <Image
            src="/crew/background-crew-desktop.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            src="/crew/background-crew-tablet.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/crew/background-crew-mobile.jpg"
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className="lg:text-left mb-10"
        >
          <h1 className="text-xl text-white font-barlow tracking-wider"><span className='text-slate-700 font-extrabold mr-6'>02</span>MEET YOUR CREW</h1>
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center w-full pt-20">
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
            className="flex-shrink-0 lg:w-1/2 w-full mt-8 lg:mt-0 flex flex-col justify-center items-center lg:justify-end"
          >
            {crew.length > 0 && (
              <div className="relative w-full max-w-md">
                <img
                  src={crew[activeTab]?.images.png.replace('./', '/')}
                  alt={crew[activeTab]?.name}
                  className="crew images"
                />
              </div>
            )}
          </motion.div>
            {/* for the div holding the names, details and other things */}
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex flex-col gap-6 items-center  lg:items-start">
            {crew.length > 0 && (
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
                  className="lg:text-4xl text-2xl font-bellefair py-2 uppercase">{crew[activeTab]?.role}</motion.h2>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="lg:text-6xl text-3xl font-bellefair py-2 uppercase">{crew[activeTab]?.name}</motion.h3>
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
                    className="mt-4 font-barlow font-extralight w-full md:w-3/4 lg:text-justify leading-8">{crew[activeTab]?.bio}</motion.p>
                </div>
              </div>
            )}
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
              className="flex space-x-4 lg:space-x-10 justify-center lg:pt-32 lg:justify-start  pt-0 h-2 w-2"
            >
              {crew.map((member, index) => (
                <button
                  key={member.name}
                  className={`tab px-1 py-1 ${activeTab === index ? 'active px-1 py-1 rounded-full bg-white h-2 w-2' : 'px-1 py-1  rounded-full bg-slate-500 h-2 w-2'}`}
                  onClick={() => handleTabClick(index)}
                > 
                </button>
              ))}
            </motion.div>
          </div>

          
        </div>
      </div>
    </main>
  );
}
