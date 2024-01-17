import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiStarShuriken } from "react-icons/gi";
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
  return (
    <main className='h-[480vh] w-auto text-black'>
        <div className='flex h-[100vh] w-auto relative justify-center pt-16 px-28 items-center'>
        <div className='mb-20 mr-32'>
            <motion.h4
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.70}} 
            > 01/04 - Hover <IoArrowForwardOutline className='inline-block' /></motion.h4>
        </div>
         <div className=''>
             <motion.h3
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.10}}  
             className='ml-20 mb-2'><span className='font-semibold'>AQ</span><span className='text-gray-500 font-semibold'>UA_DEV</span></motion.h3>
             <h1 className='text-[130px] line1 font-extrabold tracking-tighter'>
                <motion.span
                initial={{opacity: 0, y: 800}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.2, delay: 0.50}}
                >MULTI -</motion.span> <br />
                <motion.span
                 initial={{opacity: 0, y: 600}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration: 1.2, delay: 0.70}} 
                className='pl-20'>DISCIPLINED</motion.span> <br />
                <motion.span
                  initial={{opacity: 0, y: 600}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 1.2, delay: 0.90}} 
                >DEVELOPER</motion.span>
             </h1>
         </div>
         <div className='mt-72'>
             <motion.h4
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.70}} 
             className='uppercase font-semibold '>Good desigin is honest</motion.h4>
         </div>
         <div className='absolute -rotate-90 flex bottom-10 left-24'>
            <h1 className='uppercase text-base font-extrabold'><span className='text-gray-400'>Scroll</span> on</h1>
         </div>
         </div>
         <div className='bg-white flex justify-center mt-24 flex-col items-center h-[85vh] w-auto '>
               <p className=' line-2 '><span className='ml-16'>TALENTED
FRONTEND
WEB
AND
MOBILE <span className='font-extrabold'> DEVELOPER</span> <br /></span>
CRAFTING
ELEGANT,
<GiStarShuriken className='inline-block ml-4 mr-3 text-3xl' />
MODERN
DESIGNS.
BLENDING <br />
CREATIVITY
WITH
TECH
-
TO
DELIVER
CAPTIVATING <br />
USERUSER<span className='font-extrabold'> EXPERIENCES.</span>
</p>

<p className='line-2 mt-16'> <span className='ml-20'>WEB EXPERIENCES BUILT, <span className='font-extrabold'>GUITER</span> PLAYED, THE</span> <br /> UNIVERSE  RESEARCHED - I CONSTANT WEAVE MY <br />PASSIONS INTO LIFE'S TAPESTRY</p>
         </div>
         <div className='h-[250vh] mt-20 px-32 w-auto'>
             <div className='flex justify-between  items-center'>
                <h2 className='text-lg font-medium'>PORTFOLIO</h2>
                <h2 className='text-lg font-medium'>SELECT ALL PROJECTS <IoIosArrowRoundForward className='inline-block mb-1 text-4xl' /> </h2>
             </div>
             <div className='flex flex-col justify-center items-center'>
             <div className='border-t-2 mt-6 border-black w-[1270px]'>
                 
             </div>
             </div>
             <div className='flex justify-center items-center'>
                <h1 className='text-[130px] mt-24 font-extrabold'>SELECTED WORKS</h1>
             </div>
             <div className='flex items-center justify-center mt-16'>
               <h1 className='text-[244px] line-3'>GAR <br /> ERLY</h1>
               <div className='bg-image flex justify-center items-center h-[80vh] w-[35vw]'>
               <img src="https://aquadev.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fganerly.6b9a94f2.gif&w=828&q=75" alt="" width={415} /> 
               </div>
              <div className='mt-[485px]'>
              <p className='font-semibold text-xl'>THE PREMIER PLATFROM <br /> BASED ON <br /> WEB 3</p>
              </div>
             </div>
             <div className='mt-40 flex items-center justify-center '>
              <p className='font-semibold mt-[500px] text-end text-xl'>CLONE OF THE  CREATIVE  DEISGNER TITAN <br /> WEBSITE</p>
                 <div className='bg-image2 flex justify-center items-center h-[80vh] w-[40vw]'>
                         <img src="https://aquadev.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsebastian.0f9ad21c.gif&w=828&q=75" width={415} alt="" />
                 </div>
                 <div>
                 <h1 className='text-[244px] line-3'>EBA <br /> TIAN</h1>
                 </div>
             </div>
         </div>
         <div className='h-screen w-auto px-32 pt-16'>
                  <div className='flex justify-between   items-center'>
                <h2 className='text-lg font-medium'>SERVICES</h2>
                <h2 className='text-lg font-medium'>MORE ABOUT ME <IoIosArrowRoundForward className='inline-block mb-1 text-4xl' /> </h2>
             </div>
             <div className='flex flex-col justify-center items-center'>
             <div className='border-t-2 mt-6 border-black w-[1270px]'>
                 
             </div>
             </div>
             <div>
                <h1 className='text-[130px] line-3 mt-20 font-extrabold'>FRONTEND DEVELOPMENT</h1>
             </div>
             <div className='ml-[575px]'>
                <h1 className='text-[130px] line-3 mt-20 font-extrabold'> <span className='ml-20'>CREATIVE</span> DISIGNING</h1>
             </div>
             <div>
                <h1 className='text-[130px] line-3 mt-20 font-extrabold'>BACKEND ENGINEERING</h1>
             </div>
             <div className='ml-[530px]'>
                <h1 className='text-[130px] line-3 mt-20 font-extrabold'><span className='ml-56'>MOBILE</span> DEVELOPER</h1>
             </div>
         </div>
    </main>
  )
}

export default Home