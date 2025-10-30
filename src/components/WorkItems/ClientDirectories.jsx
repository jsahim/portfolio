import { FaHandPointer } from "react-icons/fa6";
import { useRef, useEffect } from 'react';


const ClientDirectories = () => {

  const projectTop = useRef(null)

  useEffect(() => {
    document.title = "Digital Directory | Jeff Sahim";
  }, []);

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <section className='min-h-[100vh] lg:min-h-screen fixed inset-0 overflow-y-auto transition-all duration-300 text-black bg-white' style={{ fontFamily: 'Jost, sans-serif'}}>
      <div ref={projectTop} className='relative md:p-10 p-5 max-w-6xl mx-auto my-auto'>

        <div className="flex justify-between items-start md:items-center">
          <h3 className="font-bold text-[#f22b40] text-xl">
            DIGITAL DIRECTORY<span className='text-gray-600 font-medium'> | CLIENT DIRECTORIES</span>
          </h3>
        </div>
        <hr className='border border-gray-600 mb-10 mt-5'/>

          <div>  
        
            <div className="gap-15 md:gap-8">
              <div>
                <p className='py-2'><strong>PRODUCT DESCRIPTION</strong></p>
                <p>The Digital Directory lets guests access property communications, amenities, campaigns, and services via QR code on their mobile devices. Hotel admins use a customizable editor to create branded digital experiences for guests.</p><br/>
                <p><strong>Clients:</strong> Hyatt Hotels Corporation, Hilton Worldwide, Sonesta International Hotels, Sparrow Hotels</p>
                <p><strong>My Role:</strong> Product Design, Software Development, Project Management</p>

              </div>
              <div className='w-full flex justify-center flex-wrap mt-10'>
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/inn.webp" alt="Inn" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/alila.webp" alt="Alila" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/essuites.webp" alt="Sonesta ES Suites" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/hyatt.webp" alt="Hyatt Regency" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/caption.webp" alt="Caption" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/hampton.webp" alt="Hampton" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/embassy.webp" alt="Embassy Suites" />
                <img className="w-1/4 min-w-[260px] p-2" src="/client_directories/royal.webp" alt="The Royal Sonesta" />

              </div>
            
          </div>

            <div className='w-full flex justify-center'>
              <button className="relative cursor-pointer group z-5 w-20 h-20 my-20 flex items-center justify-center font-bold" 
                onClick={()=> scrollToTargetDiv(projectTop)}>
                  <div className="absolute rounded-full h-20 w-20 bg-[#f22b40]"></div>
                  <FaHandPointer className='absolute move-icon stroke-2 w-10 h-10 text-white'/> 
              </button>
            </div>

        </div>
      </div>
      
    </section>
  );
}

export default ClientDirectories;