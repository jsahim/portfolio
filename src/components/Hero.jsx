// import { useEffect, useState } from 'react';
import IconRotate from "./IconRotate";

const Hero = () => {
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   setAnimate(true);
  // }, []);

  return (
    <section className="bg-black min-h-[75vh] lg:min-h-screen flex flex-col justify-center items-center">

      <div className="max-w-6xl mx-auto">

        <div className="text-white tracking-widest font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          <div className='text-[#f22b40] leading-15 lg:leading-38 tracking-normal text-[4rem] lg:text-[12rem] flex flex-col lg:flex-row justify-center items-center' style={{ fontFamily: 'Shrikhand, cursive' }}>
            <IconRotate />
            <span className="z-1 pl-0 lg:pl-10">Jeff<br/>Sahim</span>
          </div>                    
        </div>

      </div>

    </section>
  )
}

export default Hero;