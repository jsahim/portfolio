import IconRotate from "./IconRotate";

const Hero = () => {

  return (
    <section className="bg-black min-h-[100vh] lg:min-h-screen flex flex-col justify-start lg:justify-center items-center">

      <div className="max-w-6xl mx-auto">

        <div className="mt-[30vh] lg:mt-0 text-white tracking-widest font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          <div className='text-[#f22b40] tracking-normal flex flex-col lg:flex-row justify-center items-center' style={{ fontFamily: 'Shrikhand, cursive' }}>
            <IconRotate />
            <h1 className="z-1 pl-0 lg:pl-10">
              <span className="leading-19 text-[6rem] lg:text-[12rem] lg:leading-38">Jeff<br/>Sahim</span>
              <span className="text-[20px] lg:text-[40px] text-white font-semibold tracking-widest" style={{ fontFamily: 'Jost, sans-serif'}}><br/>DIGITAL PRODUCT ENGINEER</span>
            </h1>
          </div>                    
        </div>

      </div>

    </section>
  )
}

export default Hero;