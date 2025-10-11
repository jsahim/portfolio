import IconRotate from "./IconRotate";
import { useEffect, useState } from "react";

const Hero = () => {
  
  const [digitalReady, setDigital] = useState(false)
  const [productReady, setProduct] = useState(false)
  const [engineerReady, setEngineer] = useState(false)

  useEffect(() => {
    setTimeout(() => setDigital(true), 300)
    setTimeout(() => setProduct(true), 600)
    setTimeout(() => setEngineer(true), 900)
  }, []);

  return (
    <section className="bg-black min-h-[100vh] lg:min-h-screen flex flex-col justify-start lg:justify-center items-center">

      <div className="max-w-6xl mx-auto">

        <div className="mt-[30vh] lg:mt-0 text-white font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          <div className='text-[#f22b40] flex flex-col lg:flex-row justify-center items-center' style={{ fontFamily: 'Shrikhand, cursive' }}>
            <IconRotate />
            <h1 className="z-1 pl-0 lg:pl-10">
              <span className="leading-19 text-[6rem] lg:text-[12rem] lg:leading-38">Jeff<br/>Sahim</span><br/>
              <span className="text-[19px] lg:text-[39px] text-white font-bold tracking-widest" style={{ fontFamily: 'Jost, sans-serif'}}>
                <span className="transition-opacity duration-1000 ease-in" style={{opacity: digitalReady ? 1 : 0}}>DIGITAL </span>                
                <span className="transition-opacity duration-1000 ease-in" style={{opacity: productReady ? 1 : 0}}>PRODUCT </span>
                <span className="transition-opacity duration-1000 ease-in" style={{opacity: engineerReady ? 1 : 0}}>ENGINEER </span>
              </span>
            </h1>
          </div>                    
        </div>

      </div>

    </section>
  )
}

export default Hero;