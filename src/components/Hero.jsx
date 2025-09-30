import { useEffect, useState } from 'react';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="pt-0 sm:pt-20 pb-16 px-8 sm:px-10 bg-black flex items-center min-h-screen">

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-start text-white tracking-widest font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          
          <span className='text-[#f22b40] leading-15 lg:leading-40 tracking-normal text-[3.5rem] lg:text-[12.5rem]' style={{ fontFamily: 'Shrikhand, cursive' }}>Jeff Sahim</span>

          <span className='w-full flex justify-evenly items-center text-white font-normal text-base lg:text-5xl border-y-1 lg:border-y-3 border-white py-2 my-2 lg:py-5 lg:my-5 tracking-widest'>
            
            <span className='transition-opacity duration-700 ease-in-out' style={{ opacity: animate ? 1 : 0, transitionDelay: '0ms' }}>
              DESIGN
            </span>
            <span className='text-gray-700 transition-opacity duration-700 ease-in-out font-extralight' style={{ opacity: animate ? 1 : 0, transitionDelay: '900ms' }}>
              ●
            </span>
            <span className='transition-opacity duration-700 ease-in-out' style={{ opacity: animate ? 1 : 0, transitionDelay: '300ms' }}>
              ENGINEER
            </span>
            <span className='text-gray-700 transition-opacity duration-700 ease-in-out font-extralight' style={{ opacity: animate ? 1 : 0, transitionDelay: '900ms' }}>
              ●
            </span>
            <span className='transition-opacity duration-700 ease-in-out' style={{ opacity: animate ? 1 : 0, transitionDelay: '600ms' }}>
              INNOVATE
            
            </span>
          </span>
          
        </div>
      </div>

    </section>
  )
}

export default Hero;