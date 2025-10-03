const Navigation = ({currentSection, setCurrentSection, scrollToTargetDiv, workSection, aboutSection, contactSection, topSection}) => {
  
  return (
    <nav className="tracking-widest fixed flex lg:pt-2 lg:pb-auto pt-auto pb-2 justify-center items-center lg:top-0 lg:bottom-auto top-auto bottom-0 left-0 right-0 z-50 bg-none transition-transform duration-300">

      <div className="max-w-6xl mr-0 bg-white/90 rounded-full backdrop-blur-md border-1 border-gray-200 lg:w-150 w-[90vw] shadow-md transition-transform duration-300">
        <div className="flex justify-center items-center h-14">
          <div className="flex w-full justify-evenly items-center">

            <button className='flex justify-center items-center' onClick={() => scrollToTargetDiv(topSection)}>
              <img src="/jeff-icon.png" className='h-[45px] cursor-pointer' alt="Jeff Logo" />
            </button>

            <button onClick={() => { setCurrentSection('work'); scrollToTargetDiv(workSection)}}
              className={`font-semibold transition-colors text-base sm:text-lg cursor-pointer ${
                currentSection === 'work' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-black'
              }`}>
              WORK
            </button>

            <button onClick={() => { setCurrentSection('about'); scrollToTargetDiv(aboutSection) }}
              className={`font-semibold transition-colors text-base sm:text-lg cursor-pointer ${
                currentSection === 'about' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-black'
              }`}>
              ABOUT
            </button>

            <button onClick={() => { setCurrentSection('contact'); scrollToTargetDiv(contactSection)}}
              className={`font-semibold transition-colors text-base sm:text-lg cursor-pointer ${
                currentSection === 'contact' 
                  ? 'text-[#f22b40]' 
                  : 'text-gray-600 hover:text-black'
              }`}>
              CONTACT
            </button>

          </div>
        </div>
      </div>
  
    </nav>
  )
}

export default Navigation;