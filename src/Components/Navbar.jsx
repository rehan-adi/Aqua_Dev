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
         <h1 className='font-[600] text-xl'>AD</h1>
         <h3 className='uppercase font-medium text-sm'>Available For Full Time</h3>
         <button className='bg-black px-7 py-3 text-opacity-85 text-xs text-white'>{formattedIST}</button>
    </nav>
  )
}

export default Navbar