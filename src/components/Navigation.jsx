const Navigation = ({currentSection, setCurrentSection, scrollToTargetDiv, workSection, aboutSection, contactSection, topSection}) => {
  return (
    <nav className="fixed flex sm:pt-5 sm:pb-auto pt-auto pb-5 justify-center sm:justify-end items-center sm:top-0 sm:bottom-auto top-auto bottom-0 left-0 right-0 z-50 bg-none transition-transform duration-300" 
      style={{ fontFamily: 'Jost, sans-serif', letterSpacing: '0.10em' }}
    >

      <div className="max-w-6xl mr-0 sm:mr-15 rounded-full bg-white/90 backdrop-blur-md border-b border-gray-100 sm:w-[40vw] w-[90vw] shadow-md transition-transform duration-300">
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
              className="font-semibold transition-colors text-white text-base sm:text-lg bg-black px-2 py-1 hover:bg-[#f22b40] hidden sm:block">
              RESUME
            </a>

          </div>
        </div>
      </div>
  
    </nav>
  )
}

export default Navigation;