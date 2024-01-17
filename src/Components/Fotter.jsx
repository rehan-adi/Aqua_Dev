import React from 'react'
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Fotter() {

  const Contact1 = useAnimation();
   const Contact2 = useAnimation();
   const Contact3 = useAnimation();
   const Contact4 = useAnimation();
   const Contact5 = useAnimation();
 
   const [ref, inView] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView) {
      Contact1.start({ x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.2 } });
      Contact2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4} });
      Contact3.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.6} });
      Contact4.start({ x: 0, opacity: 1, transition: { duration: 0.70, delay: 0.3} });
      Contact5.start({ x: 0, opacity: 1, transition: { duration: 0.40, delay: 0.1} });
     }
   }, [inView, Contact1, Contact2, Contact3, Contact4, Contact5]);

  return (
    <div className='w-auto flex justify-between px-32 items-center h-[10vh]'>
        <h1 
        className='font-semibold text-lg'>Design and Developed by Rehan</h1>
        <div className='border-b border-black pl-80 pr-4 rounded-lg border-r border-l'>
             <ul className='flex mb-2 gap-14'>
                <li className='font-semibold'>Linkdin</li>
                <li className='font-semibold'>GitHub</li>
                <li className='font-semibold'>Twitter</li>
                <li className='font-semibold'>Aquadev Portfolio @2024</li>
             </ul>
        </div>
    </div>
  )
}

export default Fotter