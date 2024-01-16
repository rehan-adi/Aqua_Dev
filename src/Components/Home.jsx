import React from 'react'

function Home() {
  return (
    <main className='h-[100vh]  w-auto text-black'>
        <div className='flex h-[95vh] w-auto relative justify-center pt-16 px-28 items-center'>
        <div className='mb-20 mr-32'>
            <h4> 01/04 - Hover </h4>
        </div>
         <div className=''>
             <h3 className='ml-20 mb-2'><span className='font-semibold'>AQ</span><span className='text-white font-semibold'>UA_DEV</span></h3>
             <h1 className='text-[130px] line1 font-extrabold tracking-tighter'>
                <span>MULTI -</span> <br />
                <span className='pl-20'>DISCIPLINED</span> <br />
                <span>DEVELOPER</span>
             </h1>
         </div>
         <div className='mt-72'>
             <h4 className='uppercase font-semibold '>Good desigin is honest</h4>
         </div>
         <div className='absolute -rotate-90 flex bottom-6 left-24'>
            <h1 className='uppercase text-base font-bold'><span className='text-gray-400'>Scroll</span> On</h1>
         </div>
         </div>
    </main>
  )
}

export default Home