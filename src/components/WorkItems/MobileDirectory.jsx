import { useState, useRef } from 'react';
import { FaHandPointer } from "react-icons/fa6";


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
    <section className='min-h-[100vh] lg:min-h-screen bg-white fixed w-full' style={{ fontFamily: 'Jost, sans-serif'}}>
      <div className="max-w-6xl mx-auto my-auto outline-offset-0 outline-0 text-black bg-white p-10">
        
        <div className="flex justify-between items-start sm:items-center">
          <h3 className="font-bold text-black text-xl">
            HYATT REGENCY<span className='text-gray-600 font-semibold'> | DIGITAL COMPENDIUM</span>
          </h3>
        </div>
        
        <hr className='border border-gray-600 my-3'/>

        <div className="space-y-4 grid grid-cols-2 md:grid-cols-3 gap-15 mt-7">
          <div className='hidden md:flex flex-col justify-center items-center h-fit'>
            <div className='pb-3'>
              <label for="lang-select" className='text-sm font-semibold'>Language: </label>
              <select className='text-sm font-medium border-2 border-[#f22b40] rounded-sm' name="languages" id="lang-select" value={currLang} onChange={handleChange}>
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
              <img className='w-[280px] absolute z-10 pointer-events-none' src="/mobile_directory/frameiphone.webp" alt="phone frame" />
              <div className='w-[252px] absolute mt-19 max-h-[432px] overflow-y-scroll'>
                <img src={`/mobile_directory/${currLang}-screen.webp`} alt="Hyatt Regency Mobile Directory" />
              </div>
            </div>
          </div>
          
          <div className='relative h-[600px] col-span-2 px-2 md:px-10 snap-start overflow-scroll scroll-mt-5 sm:scroll-mt-25'>
            <div className="sticky top-0 left-0 right-0 h-3 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
            
            <div className="relative z-0">
              <p className='font-bold py-2' ref={projectTop}>PRODUCT DESCRIPTION</p>
              <p className='pb-2'>The Digital Compendium mobile directory lets guests access property communications, amenities, campaigns, and services via QR code on their mobile devices. Hotel admins use a customizable editor to create branded digital experiences for guests.</p>
              <p className='pb-2'>Enterprise brands maintain control through centrally managed templates, ensuring consistent guest-facing content across properties. Brands can set viewing and editing permissions to enforce brand guidelines. Dynamic workflows automatically push template updates to all properties, eliminating manual content updates.</p>
              
              <hr className='border border-gray-300 my-5'/>
              
              <p className='font-bold py-2'>PROJECT OVERVIEW</p>
              <p><strong className='text-gray-600'>CLIENT:</strong> Hyatt Hotels Corporation</p>
              <p><strong className='text-gray-600'>DURATION:</strong> 2 months</p>
              <p className='pb-2'><strong className='text-gray-600'>MY ROLE:</strong> Product Design, Software Development, Project Management</p>
              <p className='pb-2'>Led the transformation of a digital compendium from a domestic-only product to a globally compliant platform serving enterprise hospitality brands across 9 languages and multiple regions.</p>
              
              <hr className='border border-gray-300 my-5'/>

              <div>
                <p className='py-2'><strong>THE CHALLENGE: <span className="text-gray-600">DOMESTIC LIMITATIONS</span></strong></p>
                <p>The initial product served only domestic US properties. To unlock enterprise value, the platform needed to scale globally while maintaining brand consistency and meeting complex regional compliance requirements across different markets.</p>
              </div>
            
              <hr className='border border-gray-300 my-5'/>

              <div>
                <p className='py-2'><strong>THE SOLUTION: <span className="text-gray-600">DYNAMIC REGIONAL ARCHITECTURE</span></strong></p>
                <p className='py-2'><strong>Technical Implementation</strong></p>
                <ul className="list-none list-inside ">
                  <p>Developed an intelligent regional adaptation system that automatically configures the directory based on a single location selection:</p>
                  <li className='before:content-["‣_"] pl-2'><strong className='text-gray-600'>Dynamic Asset Management:</strong> Automatically displays region-specific trademarked logos by dynamically rendering the appropriate SVG path.</li>
                  <li className='before:content-["‣_"] pl-2'><strong className='text-gray-600'>Compliance Automation:</strong>  Implements required legal disclosures per jurisdiction based on the region selected.</li>
                  <li className='before:content-["‣_"] pl-2'><strong className='text-gray-600'>Multi-language Support:</strong> Delivers content in 9 languages (with dynamic text direction) based on guest preference.</li>
                </ul>
                <p className='py-2'><strong>Design & Project Management</strong></p>
                <ul className="list-none list-inside ">
                  <li className='before:content-["‣_"] pl-2'>Created high-fidelity prototypes leveraging brand guidelines for Hyatt corporate design approval.</li>
                  <li className='before:content-["‣_"] pl-2'>Partnered with Hyatt legal teams to ensure regulatory compliance across regions.</li>
                  <li className='before:content-["‣_"] pl-2'>Collaborated with Hyatt's localization teams to implement accurate multi-language delivery.</li>
                </ul>
              </div>

              <hr className='border border-gray-300 my-5'/>

              <div>
                <p className='py-2'><strong>IMPACT</strong></p>
                <p className='py-2'><strong>From Local to Global</strong></p>
                <ul className="list-none list-inside">
                  <li className='before:content-["‣_"] pl-2'>Expanded from domestic-only to full international deployment in 40 countries.</li>
                  <li className='before:content-["‣_"] pl-2'>Enabled consistent brand experience across all Hyatt properties worldwide.</li>
                </ul>
                <p className='py-2'><strong>Operational Efficiency</strong></p>
                <ul className="list-none list-inside">
                  <li className='before:content-["‣_"] pl-2'>Eliminated manual configuration for regional requirements.</li>
                  <li className='before:content-["‣_"] pl-2'>One-click regional adaptation replaced complex setup processes.</li>
                </ul>
                <p className='py-2'><strong>Enterprise Scalability</strong></p>
                <ul className="list-none list-inside ">
                  <li className='before:content-["‣_"] pl-2'>Established framework for rapid deployment in new markets.</li>
                  <li className='before:content-["‣_"] pl-2'>Created centralized template system with local flexibility.</li>
                </ul>
              </div>

              <hr className='border border-gray-300 my-5'/>

              <div>
                <p className='py-2'><strong>CONCLUSION</strong></p>
                <p>Successfully scaling a product globally requires equal attention to technical architecture, legal compliance, and cross-functional collaboration. Building intelligent automation into the core platform (rather than treating regional variations as exceptions) was critical to sustainable growth and product sales.</p>
              </div>

              <div className=' rounded-2xl bg-gray-200 p-4 mt-10'>
                <p className='text-gray-600 pt-2 pb-5 text-center'><strong>OTHER DIRECTORIES</strong></p>
                <div className='flex justify-evenly items-center'>
                  <img className='w-1/3 p-1' src="/mobile_directory/inn.webp" alt="Inn Mobile Directory" />
                  <img className='w-1/3 p-1' src="/mobile_directory/caption.webp" alt="Caption Mobile Directory" />
                  <img className='w-1/3 p-1' src="/mobile_directory/alila.webp" alt="Alila Mobile Directory" />
                </div>
              </div>
              
              <div className='w-full flex justify-center'>
                <button className="relative cursor-pointer group z-5 w-15 h-15 my-20 flex items-center justify-center font-bold" 
                  onClick={()=> scrollToTargetDiv(projectTop)}>
                    <div className="absolute rounded-full h-15 w-15 bg-[#f22b40]"></div>
                    <FaHandPointer className='absolute move-icon stroke-2 w-10 h-10 text-white'/> 
                </button>
              </div>
            </div>
            
            <div className="sticky bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileDirectory;