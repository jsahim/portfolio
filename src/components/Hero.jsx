// import { useEffect, useState } from 'react';

const Hero = () => {
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   setAnimate(true);
  // }, []);

  return (
    <section className="bg-black min-h-screen">

      <div className="max-w-6xl">

        <div className="text-white tracking-widest font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          
          <span className='text-[#f22b40] ml-5 mt-30 leading-74 tracking-normal text-[3.5rem] lg:text-[24rem] inline-block align-middle' style={{ fontFamily: 'Shrikhand, cursive' }}>Jeff<br/> Sahim</span>
          
        </div>
      </div>

    </section>
  )
}

export default Hero;