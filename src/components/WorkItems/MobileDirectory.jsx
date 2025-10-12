
import { useState, useRef } from 'react';
import { ChevronsDownUp } from 'lucide-react';


const MobileDirectory = () => {

  const projectTop = useRef(null)
  const [currLang, setLang] = useState("english")

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (event) => {
    setLang(event.target.value); 
  };

  return (
    <section className='min-h-[100vh] lg:min-h-screen bg-white'>
      <div className="max-w-6xl mx-auto my-auto outline-offset-0 outline-0 text-black bg-white p-10">
        
        <div className="flex justify-between items-start sm:items-center">
          <h3 className="font-bold text-black text-xl">
            HYATT REGENCY<span className='text-gray-600 font-semibold'> | DIGITAL COMPENDIUM</span>
          </h3>
        </div>
        
        <hr className='border border-gray-600 my-5'/>

        <div className="space-y-4 grid grid-cols-3 gap-15 mt-7 ">
          <div className='flex flex-col justify-center items-center h-fit'>
            <div>
              <label for="lang-select">Select a language:</label>
              <select name="languages" id="lang-select" value={currLang} onChange={handleChange}>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
                <option value="french">French</option>
                <option value="chinese-s">Chinese (Simplified)</option>
                <option value="chinese-t">Chinese (Traditional)</option>
                <option value="japanese">Japanese</option>
                <option value="korean">Korean</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div className='relative w-[280px] flex flex-col items-center justify-start'>
              <img className='w-[280px] absolute z-10 pointer-events-none' src="/mobile_directory/frameiphone.webp" alt="Snack Shack Mobile" />
              <div className='w-[252px] absolute mt-19 max-h-[432px] overflow-y-scroll'>
                <img src={`/mobile_directory/${currLang}-screen.webp`} alt="Snack Shack Mobile" />
              </div>
            </div>
          </div>
          <div className='col-span-2 border-l-2 border-black snap-start scroll-mt-5 sm:scroll-mt-25' ref={projectTop}>
            <p className='font-bold py-2'>PROJECT OVERVIEW</p>
            <p className='pb-2'>This three-week project focused on improving the customer experience and operational efficiency of a local park's concession stand, which suffered from severe queue backups during peak hours, particularly at game halftimes and intermissions.</p>
            <p><strong>Client:</strong> Hyatt Corporate</p>
            <p><strong>Duration:</strong> 2 months</p>
            <p><strong>My Role:</strong> Research, Wireframing & User Flows, Data Architecture, Software Development</p>
            <p><strong>Summary:</strong> Developed a mobile-first web application that allows patrons to browse the concession menu and place orders remotely. The application's menu data is dynamically managed by an administrator using a simple Google Sheet, which is converted into a REST API to populate the app.</p>
            <button className="cursor-pointer z-5 w-12 h-12 group rounded-full bg-[#f22b40] group-hover:bg-[#db2739] transition-all duration-300 flex justify-center items-center text-white font-bold" 
              onClick={()=> scrollToTargetDiv(projectTop)}>
              <ChevronsDownUp className='w-8 h-8'/> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileDirectory;