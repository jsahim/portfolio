const Navigation = ({currentSection, setCurrentSection, scrollToTargetDiv, workSection, aboutSection, contactSection, topSection}) => {
  
  return (
    <nav className="tracking-widest fixed flex md:pt-5 md:pb-auto pt-auto pb-5 justify-center md:justify-end items-center md:top-0 md:bottom-auto top-auto bottom-0 left-0 right-0 z-50 bg-none transition-transform duration-300" style={{ fontFamily: 'Jost, sans-serif' }}>

      <div className="max-w-6xl mr-0 bg-white/90 rounded-full md:rounded-r-none backdrop-blur-md border-1 border-gray-200 md:w-[50vw] w-[90vw] shadow-md transition-transform duration-300">
        <div className="flex justify-center items-center h-14">
          <div className="flex w-full justify-evenly items-center">

            <button className='flex justify-center items-center' onClick={() => scrollToTargetDiv(topSection)}>
              <img src="/jeff-icon.png" className='h-[45px] cursor-pointer' alt="Jeff Logo" />
            </button>

            <button onClick={() => { setCurrentSection('work'); scrollToTargetDiv(workSection)}}
              className={`font-semibold transition-colors text-base sm:text-lg cursor-pointer ${
                currentSection === 'work' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
              WORK
            </button>

            <button onClick={() => { setCurrentSection('about'); scrollToTargetDiv(aboutSection) }}
              className={`font-semibold transition-colors text-base sm:text-lg cursor-pointer ${
                currentSection === 'about' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
              ABOUT
            </button>

            <button onClick={() => { setCurrentSection('contact'); scrollToTargetDiv(contactSection)}}
              className={`font-semibold transition-colors text-base sm:text-lg cursor-pointer ${
                currentSection === 'contact' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
              CONTACT
            </button>
            
            <a target='_blank' 
              href='https://drive.google.com/file/d/1JPlJfU8D1ZaMBcKKfk_yxdlKA4SktTuW/view?usp=drive_link' 
              className="font-semibold transition-colors text-white text-base sm:text-lg bg-black px-2 py-1 hover:bg-[#f22b40] hidden lg:block">
              RESUME
            </a>

          </div>
        </div>
      </div>
  
    </nav>
  )
}

export default Navigation;