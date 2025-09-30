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
          
          <span className='text-[#f22b40] tracking-normal text-7xl lg:text-[12.5rem]' style={{ fontFamily: 'Shrikhand, cursive' }}>Jeff Sahim</span>

          <span className='w-full flex justify-evenly items-center text-white font-normal text-xl lg:text-5xl border-y-2 lg:border-y-5 border-white py-2 my-2 lg:py-5 lg:my-5 tracking-widest'>
            <span>ENGINEER</span><span className='text-gray-600'>●</span><span>DESIGNER</span><span className='text-gray-600'>●</span><span>INNOVATOR</span>
          </span>
          
        </div>
      </div>

    </section>
  )
}

export default Hero;