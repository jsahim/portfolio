import { useState, useRef, useEffect } from 'react';
import { FaHandPointer } from "react-icons/fa6";


const MobileDirectory = () => {

  const projectTopInner = useRef(null)
  const projectTopOuter = useRef(null)

  const [currLang, setLang] = useState("english")

  useEffect(() => {
    document.title = "Mobile Directory | Jeff Sahim";
  }, []);

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (event) => {
    setLang(event.target.value); 
  };

  return (
    <section className='min-h-[100vh] lg:min-h-screen fixed inset-0 overflow-y-auto transition-all duration-300 text-black bg-white' style={{ fontFamily: 'Jost, sans-serif'}}>      
      <div ref={projectTopOuter} className="max-w-6xl mx-auto my-auto outline-offset-0 outline-0 text-black md:p-10 p-5">
        
        <div className="flex justify-between items-start sm:items-center">
          <h3 className="font-bold text-[#f22b40] text-xl">
            AZURO HOTELS<span className='text-gray-600 font-medium'> | MOBILE GUEST DIRECTORY</span>
          </h3>
        </div>
        
        <hr className='border border-gray-600 mb-10 mt-5'/>

        <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <div className="lg:hidden flex items-start h-[400px] lg:h-auto justify-center group relative overflow-hidden">
            <img src="/mobile_directory/azuro-home.webp" alt="Snack Shack App" className="absolute w-[300px] ml-0 lg:ml-5 transition-transform duration-800 translate-y-2 group-hover:-translate-y-75"/>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className='hidden lg:flex flex-col justify-center items-center h-fit relative'>
            
            <div className='pb-2 flex justify-start'>


              <div className='relative w-[270px] flex flex-col items-center justify-start'>
                <img className='w-[270px] absolute z-10 pointer-events-none' src="/mobile_directory/frameiphone.webp" alt="phone frame" />
                <div className='w-[243px] absolute mt-18 max-h-[418px] overflow-y-scroll'>
                  <img className='pointer-events-none' src={`/mobile_directory/${currLang}-screen.webp`} alt="Mobile Directory" />
                </div>
              </div>
              
              <fieldset className='flex flex-col justify-center items-start ml-7 mt-15 gap-2 text-sm'>

                <legend className='mb-3 font-bold text-[#f22b40]'>Select Language:</legend>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup" 
                    value="english"
                    checked={currLang === 'english'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  English
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="french"
                    checked={currLang === 'french'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  French
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="spanish"
                    checked={currLang === 'spanish'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  Spanish
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="german"
                    checked={currLang === 'german'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  German
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="japanese"
                    checked={currLang === 'japanese'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  Japanese
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="chinese-s"
                    checked={currLang === 'chinese-s'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  Chinese (Simplified)
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="chinese-t"
                    checked={currLang === 'chinese-t'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  Chinese (Traditional)
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="korean"
                    checked={currLang === 'korean'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  Korean
                </label>

                <label className='flex justify-center items-center ml-1 cursor-pointer'>
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value="arabic"
                    checked={currLang === 'arabic'}
                    onChange={handleChange}
                    className='mr-1'
                  />
                  Arabic
                </label>

              </fieldset>

            </div>


          </div>
          
          <div className='relative lg:h-[575px] h-full px-0 md:px-5 snap-start overflow-scroll scroll-mt-5 sm:scroll-mt-25'>
            <div className="sticky top-0 left-0 right-0 h-3 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
            <div ref={projectTopInner} className="relative z-0">
              <p className='font-bold py-2'>PRODUCT DESCRIPTION</p>
              <p className='pb-2'>The Azuro Hotels mobile directory lets guests access property communications, amenities, campaigns, and services via QR code on their mobile devices. Hotel admins use a customizable editor to create branded digital experiences for guests.</p>
              <p className='pb-2'>Enterprise brands maintain control through centrally managed templates, ensuring consistent guest-facing content across properties. Brands can set viewing and editing permissions to enforce brand guidelines. Dynamic workflows automatically push template updates to all properties, eliminating manual content updates.</p>
              
              <hr className='border border-gray-300 my-5'/>
              
              <p className='font-bold py-2'>PROJECT OVERVIEW</p>
              <p><strong>Client:</strong> Major Hotel Corporation</p>
              <p><strong>Duration:</strong> 2 months</p>
              <p className='pb-2'><strong>My Role:</strong> Product Design, Software Development, Project Management</p>
              <p className='pb-2'>Led the transformation of a mobile directory from a domestic-only product to a globally compliant platform serving enterprise hospitality brands across 9 languages and multiple regions.</p>
              
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
                  <li className='before:content-["‣_"] pl-2'>Created high-fidelity prototypes leveraging brand guidelines for corporate design approval.</li>
                  <li className='before:content-["‣_"] pl-2'>Partnered with brand legal teams to ensure regulatory compliance across regions.</li>
                  <li className='before:content-["‣_"] pl-2'>Collaborated with brand localization teams to implement accurate multi-language delivery.</li>
                </ul>
              </div>

              <hr className='border border-gray-300 my-5'/>

              <div>
                <p className='py-2'><strong>IMPACT</strong></p>
                <p className='py-2'><strong>From Local to Global</strong></p>
                <ul className="list-none list-inside">
                  <li className='before:content-["‣_"] pl-2'>Expanded from domestic-only to full international deployment in 40 countries.</li>
                  <li className='before:content-["‣_"] pl-2'>Enabled consistent brand experience across all hotel properties worldwide.</li>
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

              <div className='w-full flex justify-center'>
                <button className="relative cursor-pointer group z-5 w-20 h-20 my-20 lg:flex hidden items-center justify-center font-bold" 
                  onClick={()=> scrollToTargetDiv(projectTopInner)}>
                    <div className="absolute rounded-full h-20 w-20 bg-[#f22b40]"></div>
                    <FaHandPointer className='absolute move-icon stroke-2 w-10 h-10 text-white'/> 
                </button>
                <button className="relative cursor-pointer group z-5 w-20 h-20 my-20 flex lg:hidden items-center justify-center font-bold" 
                  onClick={()=> scrollToTargetDiv(projectTopOuter)}>
                    <div className="absolute rounded-full h-20 w-20 bg-[#f22b40]"></div>
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