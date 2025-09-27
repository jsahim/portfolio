const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-10 sm:px-12 bg-black flex items-center min-h-screen">
      <div className="max-w-6xl mx-auto text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl text-white tracking-widest" style={{ fontFamily: 'Jost, sans-serif'}}>
          <span className='text-xl font-semibold tracking-wide'>HELLO, I'M</span><br />
          <span className='text-[#f22b40] tracking-normal text-6xl sm:text-7xl lg:text-9xl' style={{ fontFamily: 'Shrikhand, cursive' }}> Jeff Sahim </span><br />
          <span className='text-gray-400 leading-[80px]'>FRONTEND </span><span className='text-white font-medium underline decoration-2'>ENGINEER</span>.<br />
          <span className='text-gray-400 leading-[80px]'>EXPERIENCE </span><span className='text-white italic font-extralight'>DESIGNER</span>.<br />
          <span className='text-gray-400 leading-[80px]'>CREATIVE </span><span className='text-white font-bold'>INNOVATOR</span>.
        </h1>
      </div>
    </section>
  )
}

export default Hero;