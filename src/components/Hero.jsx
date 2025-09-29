const Hero = () => {
  return (
    <section className="pt-0 sm:pt-20 pb-16 px-8 sm:px-10 bg-black flex items-center min-h-screen">
      <div className="max-w-6xl mx-auto text-left">
        <div className="flex flex-col justify-center items-start text-2xl sm:text-4xl lg:text-6xl leading-[35px] sm:leading-[40px] lg:leading-[80px] text-white tracking-widest font-light" style={{ fontFamily: 'Jost, sans-serif'}}>
          <span className='text-xl font-semibold tracking-wide bg-white text-black py-1 px-2 rounded-sm mb-5'>HEY THERE! I'M...</span>
          <span className='text-[#f22b40] tracking-normal text-5xl sm:text-7xl lg:text-9xl' style={{ fontFamily: 'Shrikhand, cursive' }}>Jeff Sahim</span>
          <span className='text-gray-400'>FRONTEND <span className='text-white font-medium underline decoration-2'>ENGINEER</span></span>
          <span className='text-gray-400'>EXPERIENCE <span className='text-white italic font-medium'>DESIGNER</span></span>
          <span className='text-gray-400'>CREATIVE <span className='text-white font-bold'>INNOVATOR</span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero;