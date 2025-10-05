// import { useEffect, useState } from 'react';

const Hero = () => {
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   setAnimate(true);
  // }, []);

  return (
    <section className="bg-black min-h-screen">

      <div className="max-w-6xl pt-35 pl-10">

        <div className="text-white tracking-widest font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          <div className='text-[#f22b40] leading-74 tracking-normal text-[3.5rem] lg:text-[24rem]' style={{ fontFamily: 'Shrikhand, cursive' }}>
            Jeff
          </div>
          <div className='text-[#f22b40] leading-74 tracking-normal text-[3.5rem] lg:text-[24rem] inline-block align-middle' style={{ fontFamily: 'Shrikhand, cursive' }}>
            Sahim
          </div>
                    
        </div>
      </div>

    </section>
  )
}

export default Hero;