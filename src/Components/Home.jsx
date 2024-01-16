import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiStarShuriken } from "react-icons/gi";

function Home() {
  return (
    <main className='h-[200vh] w-auto text-black'>
        <div className='flex h-[100vh] w-auto relative justify-center pt-16 px-28 items-center'>
        <div className='mb-20 mr-32'>
            <h4> 01/04 - Hover <IoArrowForwardOutline className='inline-block' /></h4>
        </div>
         <div className=''>
             <h3 className='ml-20 mb-2'><span className='font-semibold'>AQ</span><span className='text-gray-500 font-semibold'>UA_DEV</span></h3>
             <h1 className='text-[130px] line1 font-extrabold tracking-tighter'>
                <span>MULTI -</span> <br />
                <span className='pl-20'>DISCIPLINED</span> <br />
                <span>DEVELOPER</span>
             </h1>
         </div>
         <div className='mt-72'>
             <h4 className='uppercase font-semibold '>Good desigin is honest</h4>
         </div>
         <div className='absolute -rotate-90 flex bottom-10 left-24'>
            <h1 className='uppercase text-base font-extrabold'><span className='text-gray-400'>Scroll</span> on</h1>
         </div>
         </div>
         <div className='bg-white flex justify-center mt-16 flex-col items-center h-[85vh] w-auto '>
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
    </main>
  )
}

export default Home