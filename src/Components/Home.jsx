import React, {useState} from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiStarShuriken } from "react-icons/gi";
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Home() {


   const Service1 = useAnimation();
   const Service2 = useAnimation();
   const ServiceA = useAnimation();
   const ServiceB = useAnimation();
   const Service8 = useAnimation();

   const [ref1, inView1] = useInView({
      triggerOnce: true,
      rootMargin: '50px -50px',
   });

   useEffect(() => {
      if (inView1) {
         Service1.start({ y: 0, opacity: 1, transition: { duration: 0.80, delay: 0.2 } });
         Service2.start({ y: 0, opacity: 1, transition: { duration: 0.80, delay: 0.4 } });
         ServiceA.start({ y: 0, opacity: 1, transition: { duration: 1.40, delay: 0.1 } });
         ServiceB.start({ y: 0, opacity: 1, transition: { duration: 1.40, delay: 0.1 } });
         Service8.start({ x: 0, opacity: 1, transition: { duration: 1.11, } });
      }
   }, [inView1, Service1, Service2, ServiceA, ServiceB, Service8]);


   const Service3 = useAnimation();
   const Service4 = useAnimation();

   const [ref2, inView2] = useInView({
      triggerOnce: true,
      rootMargin: '50px -50px',
   });

   useEffect(() => {
      if (inView2) {
         Service3.start({ y: 0, opacity: 1, transition: { duration: 0.80, delay: 0.2 } });
         Service4.start({ y: 0, opacity: 1, transition: { duration: 0.80, delay: 0.4 } });
      }
   }, [inView2, Service3, Service4]);



   const Contact1 = useAnimation();
   const Contact2 = useAnimation();
   const Contact3 = useAnimation();
   const Contact4 = useAnimation();
   const Contact5 = useAnimation();

   const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '80px -80px',
   });

   useEffect(() => {
      if (inView) {
         Contact1.start({ x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.2 } });
         Contact2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } });
         Contact3.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } });
         Contact4.start({ x: 0, opacity: 1, transition: { duration: 0.70, delay: 0.3 } });
         Contact5.start({ x: 0, opacity: 1, transition: { duration: 1.11, } });
      }
   }, [inView, Contact1, Contact2, Contact3, Contact4, Contact5]);


   const Portfolio1 = useAnimation();
   const Portfolio2 = useAnimation();
   const Portfolio3 = useAnimation();
   const Portfolio4 = useAnimation();
   const Portfolio5 = useAnimation();

   const [ref3, inView3] = useInView({
      triggerOnce: true,
      rootMargin: '50px -50px',
   });

   useEffect(() => {
      if (inView3) {
         Portfolio1.start({ opacity: 1, transition: { duration: 1.40, delay: 0.2 } });
         Portfolio2.start({ opacity: 1, transition: { duration: 1.40, delay: 0.4 } });
         Portfolio3.start({ x: 0, opacity: 1, transition: { duration: 1.11 } });
         Portfolio4.start({ y: 0, opacity: 1, transition: { duration: 0.75, delay: 0.3 } });
         Portfolio5.start({ y: 0, opacity: 1, transition: { duration: 0.70, delay: 1.80 } });
      }
   }, [inView3, Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5]);



   const Lawra = useAnimation();

   const [ref4, inView4] = useInView({
      triggerOnce: true,
      rootMargin: '50px -50px',
   });

   useEffect(() => {
      if (inView4) {
         Lawra.start({ y: 0, opacity: 1, transition: { duration: 0.70, delay: 1 } });
      }
   }, [inView4, Lawra]);



   ///// Animation 

   const Text1 = useAnimation();
   const Text2 = useAnimation();
   const Text3 = useAnimation();
   const Text4 = useAnimation();
   const Text5 = useAnimation();
   const Text6 = useAnimation();
   const Text7 = useAnimation();

   const [ref5, inView5] = useInView({
      triggerOnce: true,
      rootMargin: '50px -50px',
   });

   useEffect(() => {
      if (inView5) {
         Text1.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 0.2 } });
         Text2.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 0.5 } });
         Text3.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 0.8 } });
         Text4.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 1.1 } });
         Text5.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 1.4 } });
         Text6.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 1.7 } });
         Text7.start({ opacity: 1, y: 0, transition: { duration: 1.40, delay: 2 } });
      }
   }, [inView5, Text1, Text2, Text3, Text4, Text5, Text6, Text7]);


   const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);

 
   const toggleMenuBar = () => {
     setIsMenuBarVisible(!isMenuBarVisible);
   };



   return (
      <main className='h-[777vh] w-auto text-black'>
         <div className='flex h-[100vh] w-auto relative justify-center pt-16 px-28 items-center'>
            <div className='mb-20 mr-32'>
               <motion.h4
                  className='font-semibold'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.70 }}
               > 01/04 - Hover <IoArrowForwardOutline className='inline-block' /></motion.h4>
            </div>
            <div className=''>
               <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.10 }}
                  className='ml-20 mb-2'><span className='font-semibold'>AQ</span><span className='text-gray-500 font-semibold'>UA_DEV</span></motion.h3>
               <h1 className='text-[130px] line1 font-extrabold tracking-tighter'>
                  <motion.span
                     initial={{ opacity: 0, y: 800 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.2, delay: 0.50 }}
                  >MULTI -</motion.span> <br />
                  <motion.span
                     initial={{ opacity: 0, y: 600 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.2, delay: 0.70 }}
                     className='pl-20'>DISCIPLINED</motion.span> <br />
                  <motion.span
                     initial={{ opacity: 0, y: 600 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.2, delay: 0.90 }}
                  >DEVELOPER</motion.span>
               </h1>
            </div>
            <div className='mt-72'>
               <motion.h4
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.70 }}
                  className='uppercase font-semibold '>Good desigin is honest</motion.h4>
            </div>
            <div className='absolute -rotate-90 flex bottom-10 left-24'>
               <h1 className='uppercase text-base font-extrabold'><span className='text-gray-400'>Scroll</span> on</h1>
            </div>
         </div>
         <div className='bg-white flex justify-center mt-24 flex-col items-center h-[85vh] w-auto '>
            <p className=' line-2 '>
               <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={Text1}
                  ref={ref5}
               ><span className='ml-16'>TALENTED FRONTEND WEB AND MOBILE <span className='font-extrabold'> DEVELOPER</span> <br /></span></motion.span>
               <motion.span
               initial={{ opacity: 0, y: 30 }}
               animate={Text2}
               ref={ref5}
               >CRAFTING ELEGANT, <GiStarShuriken className='inline-block ml-4 mr-3 text-3xl' /> MODERN DESIGNS. BLENDING </motion.span>
               <br />
               <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={Text3}
                ref={ref5}
               > CREATIVITY WITH TECH - TO DELIVER CAPTIVATING</motion.span>
               <br />
              <motion.span
               initial={{ opacity: 0, y: 30 }}
               animate={Text4}
               ref={ref5}
              > USERUSER<span className='font-extrabold'> EXPERIENCES.</span></motion.span>
            </p>

            <p className='line-2 mt-16'>
               <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={Text5}
                ref={ref5}
               >
                  <span className='ml-20'>WEB EXPERIENCES BUILT,<span className='font-extrabold'> GUITER</span> PLAYED, THE</span>
                  </motion.span> 
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={Text6}
                  ref={ref5}
                >UNIVERSE  RESEARCHED - I CONSTANT WEAVE MY</motion.span>  
                <br />
                <motion.span
                 initial={{ opacity: 0, y: 30 }}
                 animate={Text7}
                 ref={ref5}
                >PASSIONS INTO LIFE'S TAPESTRY</motion.span>
                </p>
         </div>
         <div className='h-[250vh] mt-20 px-32 w-auto'>
            <div className='flex justify-between  items-center'>
               <motion.h2
                  initial={{ opacity: 0 }}
                  animate={Portfolio1}
                  ref={ref3}
                  className='text-lg font-medium'>PORTFOLIO</motion.h2>
               <motion.h2
                  initial={{ opacity: 0 }}
                  animate={Portfolio2}
                  ref={ref3}
                  className='text-lg font-medium'>SELECT ALL PROJECTS <IoIosArrowRoundForward className='inline-block mb-1 text-4xl' /> </motion.h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
               <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  animate={Portfolio3}
                  ref={ref3}
                  className='border-t-2 mt-6 border-black w-[1270px]'>

               </motion.div>
            </div>
            <div className='flex justify-center items-center'>
               <motion.h1
                  initial={{ y: 88, opacity: 0 }}
                  animate={Portfolio4}
                  ref={ref3}
                  className='text-[130px] mt-24 font-extrabold'>SELECTED WORKS</motion.h1>
            </div>
            <div className='flex items-center justify-center mt-16'>
               <motion.h1
                  initial={{ y: 88, opacity: 0 }}
                  animate={Portfolio4}
                  ref={ref3}
                  className='text-[244px] line-3'>GAR <br /> ERLY</motion.h1>
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
                  <motion.h1
                     initial={{ y: 88, opacity: 0 }}
                     animate={Lawra}
                     ref={ref4}
                     className='text-[244px] line-3'>EBA <br /> TIAN</motion.h1>
               </div>
            </div>
         </div>
         <div className='h-[200vh] w-auto px-32 pt-16'>
            <div className='flex justify-between   items-center'>
               <motion.h2
                  initial={{ opacity: 0 }}
                  animate={ServiceA}
                  ref={ref1}
                  className='text-lg font-medium'>SERVICES</motion.h2>
               <motion.h2
                  initial={{ opacity: 0 }}
                  animate={ServiceB}
                  ref={ref1}
                  className='text-lg font-medium'>MORE ABOUT ME <IoIosArrowRoundForward className='inline-block mb-1 text-4xl' /> </motion.h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
               <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  animate={Service8}
                  ref={ref1}
                  className='border-t-2 mt-6 border-black w-[1270px]'>

               </motion.div>
            </div>
            <div>
               <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={Service1}
                  ref={ref1}
                  className='text-[130px] line-3 mt-20 font-extrabold'>
                  <span>FRONTEND</span> DEVELOPMENT</motion.h1>
            </div>
            <div className='ml-[575px]'>
               <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={Service2}
                  ref={ref1}
                  className='text-[130px] line-3 mt-20 font-extrabold'> <span className='ml-20'>CREATIVE</span> DISIGNING</motion.h1>
            </div>
            <div>
               <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={Service3}
                  ref={ref2}
                  className='text-[130px] line-3 mt-20 font-extrabold'>BACKEND ENGINEERING</motion.h1>
            </div>
            <div className='ml-[520px]'>
               <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={Service4}
                  ref={ref2}
                  className='text-[130px] line-3 mt-20 font-extrabold'><span className='ml-60'>MOBILE</span> DEVELOPER</motion.h1>
            </div>
         </div>
         <div className='h-[120vh] w-auto px-32 pt-40 text-base'>
            <div className='flex justify-between   items-center'>
               <motion.h2
                  initial={{ opacity: 0, }}
                  animate={Contact4}
                  ref={ref}
                  className='text-lg font-medium'>CONTACT</motion.h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
               <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  animate={Contact5}
                  ref={ref}
                  className='border-t-2 mt-6 border-black w-[1270px]'>

               </motion.div>
            </div>
            <div className='flex justify-center mt-36 items-center flex-col'>
               <motion.h3
                  initial={{ opacity: 0, }}
                  animate={Contact1}
                  ref={ref}
                  className='text-sm font-semibold '>WANT TO WORK TOGETHER ?</motion.h3>
               <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={Contact2}
                  ref={ref}
                  className='text-[175px] line-3 mt-12 font-extrabold'>SAY HI!</motion.h1>
               <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={Contact3}
                  ref={ref}
                  className='text-[111px] mt-20 font-bold'>HELLO@AQUADEV.SITE</motion.h1>
            </div>
         </div>
         <motion.button
        className='fixed bottom-16 right-10 bg-black text-white p-4 rounded-full'
        onClick={toggleMenuBar}
        whileHover={{ scale: 1.3}}
      >
        <HiMenuAlt4 />
      </motion.button>

      {isMenuBarVisible && (
        <div className='fixed top-0 right-0 z-50 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-end'>
          <motion.div
           initial={{ x: '100%' }}
           animate={{ x: 0 }}
           exit={{ x: '100%', transition: { ease: 'easeInOut', duration: 4 } }}
           transition={{ duration: 0.5 }} 
          className='bg-black flex justify-center pl-20 flex-col items-start text-white w-[40vw] h-screen rounded-md'>
            <h2 className='text-xs font-normal tracking-widest mb-16 underline opacity-50 uppercase'>Navigation</h2>
             <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }} 
             className='flex gap-10 mb-7 flex-col'>
               <h1 className='text-6xl font-medium'>Home</h1>
               <h1 className='text-6xl font-medium'>About</h1>
               <h1 className='text-6xl font-medium'>Work</h1>
             </motion.div>
             <div className='mt-16'>
                <h1 className='text-xs font-normal tracking-widest underline opacity-50 uppercase mb-4'>Get in touch</h1>
             </div>
             <div className='flex gap-5'>
                <p className='text-sm'>Linkdin</p>
                <p className='text-sm'>GitHub</p>
                <p className='text-sm'>Twitter</p>
             </div>
            <button className='bg-white text-black rounded-full p-4  ml-[440px] mt-10' onClick={toggleMenuBar}>
            <RxCross2 />
            </button>
          </motion.div>
        </div>
      )}
      </main>
   )
}

export default Home