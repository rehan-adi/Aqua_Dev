import React from 'react'
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Fotter() {

  const Footer1 = useAnimation();
   const Footer2 = useAnimation();
   const Footer3 = useAnimation();
   const Footer4 = useAnimation();
   const Footer5 = useAnimation();
 
   const [ref, inView] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView) {
      Footer1.start({ y: 0, opacity: 1, transition: { duration: 0.90, delay: 0.2 } });
      Footer2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4} });
      Footer3.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.6} });
      Footer4.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.8} });
      Footer5.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 1} });
     }
   }, [inView, Footer1, Footer2, Footer3, Footer4, Footer5]);

  return (
    <div className='w-auto flex justify-between px-32 items-center h-[10vh]'>
        <motion.h1
        initial={{opacity: 0, y: 20}}
        animate={Footer1}
        ref={ref} 
        className='font-semibold text-lg'>Design and Developed by Rehan</motion.h1>
        <div className='border-b border-black pl-80 pr-4 rounded-lg border-r border-l'>
             <ul className='flex mb-2 gap-14'>
                <motion.li
                initial={{opacity: 0, y: 20}}
                animate={Footer2}
                ref={ref} 
                 className='font-semibold'>Linkdin</motion.li>
                <motion.li
                initial={{opacity: 0, y: 20}}
                animate={Footer3}
                ref={ref}  
                className='font-semibold'>GitHub</motion.li>
                <motion.li
                initial={{opacity: 0, y: 20}}
                animate={Footer4}
                ref={ref}  
                className='font-semibold'>Twitter</motion.li>
                <motion.li
                initial={{opacity: 0, y: 20}}
                animate={Footer5}
                ref={ref}  
                className='font-semibold'>Aquadev Portfolio @2024</motion.li>
             </ul>
        </div>
    </div>
  )
}

export default Fotter