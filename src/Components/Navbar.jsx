import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Navbar() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  const formattedIST = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
  }).format(currentTime);

  return (
    <nav className='w-full flex justify-between  z-50 fixed items-center px-32 h-[12vh] text-black'>
         <motion.h1
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 0.25}} 
         className='font-[600] text-xl'>AD</motion.h1>
         <motion.h3
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.25}}  
         className='uppercase font-medium text-sm'>Available For Full Time</motion.h3>
         <motion.button
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.25}}  
         className='bg-black px-7 py-3 text-opacity-85 text-xs text-white'>{formattedIST}</motion.button>
    </nav>
  )
}

export default Navbar