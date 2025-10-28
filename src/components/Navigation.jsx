const Navigation = ({currentSection, setCurrentSection, scrollToTargetDiv, workSection, aboutSection, contactSection, topSection, isAtTop}) => {
  
  return (
    <nav className={`tracking-widest fixed flex pb-3 lg:pb-auto justify-center items-center lg:top-0 lg:bottom-auto top-auto bottom-0 left-0 right-0 z-50 bg-none transform-all duration-150 pointer-events-none ${isAtTop ? 'pt-auto lg:pt-1' : 'pt-auto lg:pt-3'}`}>

      <div className={`max-w-6xl mr-0 bg-white/90 rounded-xl backdrop-blur-md border-1 border-gray-200 shadow-md transform-all duration-150 pointer-events-auto ${isAtTop ? 'lg:w-[65vw]' : 'lg:w-150'} w-[90vw]`}>
        <div className="flex justify-center items-center h-14 px-2 sm:px-5">
          <div className="flex w-full justify-between items-center">

            <button className='flex justify-center  items-center w-[45px]' onClick={() => { setCurrentSection('top'); scrollToTargetDiv(topSection)}}>
              <img src="/jeff-icon-r.webp" className={`absolute transition-all duration-300 w-[45px] ${currentSection === 'top' ? "opacity-100" : "opacity-0"} cursor-pointer`} alt="Jeff Logo" />
              <img src="/jeff-icon.webp" className={`absolute transition-all duration-300 w-[45px] ${currentSection !== 'top' ? "opacity-100" : "opacity-0"} cursor-pointer`} alt="Jeff Logo" />
            </button>

            <button onClick={() => { setCurrentSection('work'); scrollToTargetDiv(workSection)}}
              className={`font-semibold transition-colors text-lg cursor-pointer ${
                currentSection === 'work' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-black'
              }`}>
              WORK
            </button>

            <button onClick={() => { setCurrentSection('about'); scrollToTargetDiv(aboutSection) }}
              className={`font-semibold transition-colors text-lg cursor-pointer ${
                currentSection === 'about' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-black'
              }`}>
              ABOUT
            </button>

            <button onClick={() => { setCurrentSection('contact'); scrollToTargetDiv(contactSection)}}
              className={`font-semibold transition-colors text-lg cursor-pointer ${
                currentSection === 'contact' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-black'
              }`}>
              CONTACT
            </button>
              
            <a href="https://drive.google.com/file/d/1JPlJfU8D1ZaMBcKKfk_yxdlKA4SktTuW/view?usp=drive_link" target="_blank" 
              className="hidden sm:block hover:bg-gray-600 bg-black py-1 px-2 text-white rounded-sm font-semibold transition-colors duration-300 text-lg cursor-pointer">
              RESUME
            </a>

          </div>
        </div>
      </div>
  
    </nav>
  )
}

export default Navigation;