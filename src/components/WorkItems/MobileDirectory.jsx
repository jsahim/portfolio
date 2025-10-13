
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
          <div className='h-[600px] col-span-2 pl-10 snap-start overflow-scroll scroll-mt-5 sm:scroll-mt-25'>

            <p className='font-bold py-2' ref={projectTop}>PRODUCT DESCRIPTION</p>
            <p className='pb-2'>The digital hotel guest directory lets guests access property communications, amenities, campaigns, and services via QR code on their personal devices. Hotel admins use a customizable editor to create branded digital experiences for guests.</p>
            <p className='pb-2'>Enterprise brands maintain control through centrally managed templates, ensuring consistent guest-facing content across properties. Brands can set viewing and editing permissions to enforce brand guidelines. Dynamic workflows automatically push template updates to all properties, eliminating manual content updates.</p>
            
            <hr className='border border-gray-300 my-10'/>
            
            <p className='font-bold py-2'>PROJECT OVERVIEW</p>
            <p><strong>CLIENT: Hyatt Hotels Corporation</strong></p>
            <p><strong>DURATION: 2 months</strong></p>
            <p className='pb-2'><strong>MY ROLE: Product Design, Software Development, Project Management</strong></p>
            <p className='pb-2'>Led the transformation of a digital hotel guest directory from a domestic-only product to a globally compliant platform serving enterprise hospitality brands across 9 languages and multiple regions.</p>
            
            <hr className='border border-gray-300 my-10'/>

            <div>
              <p className='py-2'><strong>THE CHALLENGE: <span className="text-gray-600 font-semibold">DOMESTIC LIMITATIONS</span></strong></p>
              <p>The initial product served only domestic US properties. To unlock enterprise value, the platform needed to scale globally while maintaining brand consistency and meeting complex regional compliance requirements across different markets.</p>
            </div>
          
            <hr className='border border-gray-300 my-10'/>

            <div>
              <p className='py-2'><strong>THE SOLUTION: <span className="text-gray-600 font-semibold">DYNAMIC REGIONAL ARCHITECTURE</span></strong></p>
              <p className='py-2'><strong>Technical Implementation</strong></p>
              <div>
                <p>Developed an intelligent regional adaptation system that automatically configures the directory based on a single location selection:</p>
                <p><strong className='text-gray-600'>Dynamic Asset Management:</strong> Automatically displays region-specific trademarked logos.</p>
                <p><strong className='text-gray-600'>Compliance Automation:</strong>  Implements required legal disclosures per jurisdiction.</p>
                <p><strong className='text-gray-600'>Multi-language Support:</strong> Delivers content in 9 languages based on guest preference.</p>
              </div>
              <p className='py-2'><strong>Design & Project Management</strong></p>
              <div>
                <p>Created high-fidelity prototypes leveraging brand guidelines for Hyatt corporate design approval.</p>
                <p>Partnered with Hyatt legal teams to ensure regulatory compliance across regions.</p>
                <p>Collaborated with Hyatt's localization teams to implement accurate multi-language delivery.</p>
              </div>
            </div>

            <hr className='border border-gray-300 my-10'/>

            <div>
              <p className='py-2'><strong>IMPACT</strong></p>
              <p className='py-2'><strong>From Local to Global</strong></p>
              <div>
                <p>Expanded from domestic-only to full international deployment.</p>
                <p>Enabled consistent brand experience across all Hyatt properties worldwide.</p>
              </div>
              <p className='py-2'><strong>Operational Efficiency</strong></p>
              <div>
                <p>Eliminated manual configuration for regional requirements.</p>
                <p>One-click regional adaptation replaced complex setup processes.</p>
              </div>
              <p className='py-2'><strong>Enterprise Scalability</strong></p>
              <div>
                <p>Established framework for rapid deployment in new markets.</p>
                <p>Created centralized template system with local flexibility.</p>
              </div>
            </div>

            <hr className='border border-gray-300 my-10'/>

            <div>
              <p className='py-2'><strong>KEY TAKEAWAYS</strong></p>
              <p>Successfully scaling a product globally requires equal attention to technical architecture, legal compliance, and cross-functional collaboration. Building intelligent automation into the core platform—rather than treating regional variations as exceptions—was critical to sustainable growth.</p>
            </div>
            
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