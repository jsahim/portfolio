
import { useState, useRef } from 'react';
import { ChevronsDownUp, ChevronsUpDown, ExternalLink } from 'lucide-react';


const SnackShack = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const projectTop = useRef(null)

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <div ref={projectTop} className={`transition-all duration-300 ${
      drawerOpen ? "outline-offset-0 border-[#f22b40] outline-0" 
      : "outline-offset-4 border-black outline-[2.5px]"}  
      text-black border-4 outline-gray-600 snap-start scroll-mt-5 md:scroll-mt-25 bg-white rounded-xl md:p-10 p-5`
      }>
      
      <div className="flex justify-between items-start md:items-center">
        <h3 className="font-bold text-black text-xl">
          THE SNACK SHACK<span className='text-gray-600 font-semibold'> | CONCESSION ORDERING APP</span>
        </h3>
        <div className="flex flex-col justify-start group">
          <button className="cursor-pointer z-5 w-12 h-12 group rounded-full bg-[#f22b40] group-hover:bg-[#db2739] transition-all duration-300 flex justify-center items-center text-white font-bold" 
            onClick={()=> { scrollToTargetDiv(projectTop); drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)}}>{drawerOpen 
              ? <ChevronsDownUp className='w-8 h-8'/> 
              : <ChevronsUpDown className='w-8 h-8'/> }
          </button>
        </div>
      </div>
      <hr className='border border-gray-600 mb-10 mt-5'/>

      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-15 mt-10">
        <div className='relative h-[250px] md:h-[400px] w-full flex items-center justify-center group overflow-hidden mb-10 md:mb-0'>
          <img 
            className='absolute w-[190px] pointer-events-none transition-all duration-500 ease-out z-10 self-start' 
            src="/snackshack/PhoneShack1.webp" 
            alt="Snack Shack Mobile 1" 
          />
          <img 
            className='absolute pointer-events-none w-[160px] hidden md:block transition-all duration-500 ease-out -translate-x-[70px] group-hover:-translate-x-[170px] blur-[0.5px] group-hover:blur-none' 
            src="/snackshack/PhoneShack2.webp" 
            alt="Snack Shack Mobile 2" 
          />
          <img 
            className='absolute w-[160px] pointer-events-none hidden md:block transition-all duration-500 ease-out translate-x-[70px] group-hover:translate-x-[170px] blur-[0.5px] group-hover:blur-none' 
            src="/snackshack/PhoneShack3.webp" 
            alt="Snack Shack Mobile 3" 
          />
        </div>
        <div>
          <p className='font-bold py-2'>PROJECT OVERVIEW</p>
          <p className='pb-2'>This three-week project focused on improving the customer experience and operational efficiency of a local park's concession stand, which suffered from severe queue backups during peak hours, particularly at game halftimes and intermissions.</p>
          <p><strong>Client:</strong> Franklin Park Borough - Recreation</p>
          <p><strong>Duration:</strong> 3 weeks</p>
          <p><strong>My Role:</strong> Research, Wireframing & User Flows, Data Architecture, Software Development</p>
          <p><strong>Summary:</strong> Developed a mobile-first web application that allows patrons to browse the concession menu and place orders remotely. The application's menu data is dynamically managed by an administrator using a simple Google Sheet, which is converted into a REST API to populate the app.</p>
        </div>
      </div>


      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${drawerOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        
        <hr className='border border-gray-300 my-10'/>
        
        <div className="space-y-4 grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-15">
        
          <div>
            <p className='py-2'><strong>THE CHALLENGE: <span className="text-gray-600">REDUCING WAIT TIMES AND INDICISION</span></strong></p>
            <p>The primary problem was the frequent and lengthy line backups at the concession stand during peak event times. Patron feedback and initial observations revealed that these delays were significantly compounded by patron indecision when ordering at the window, leading to long transaction times and frustration. Patrons were missing portions of the games they came to see.</p>
            <p className='py-2'><strong className='text-gray-600'>Key Issues Identified</strong></p>
            <div>
              <p><strong>Peak Congestion:</strong> Halftimes and intermissions saw massive influxes of customers.</p>
              <p><strong>Menu Blindness:</strong> Patrons had no way to view the menu, prices, or options until they were physically at the window, leading to on-the-spot decision-making.</p>
              <p><strong>Lost Time:</strong> Extended wait times resulted in patrons missing game action.</p>
            </div>
          </div>
          
          <hr className='border border-gray-300 my-10 block md:hidden'/>

          <div>
            <p className='py-2'><strong>THE SOLUTION: <span className="text-gray-600">A MOBILE-FIRST PRE-ORDERING APP</span></strong></p>
            <p>The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.</p>
            <p className='py-2'><strong className='text-gray-600'>Strategy</strong></p>
            <div>
              <p><strong>Menu Visibility:</strong> Provide a digital, mobile-first menu accessible anywhere in the park.</p>
              <p><strong>Order Ahead:</strong>  Implement a feature for patrons to place and pay for orders directly through the app.</p>
              <p><strong>Easy Access:</strong> Utilize strategically placed QR codes around the park (near seating areas, entrances) to provide instant access to the app menu.</p>
            </div>
          </div>

        </div>

        <hr className='border border-gray-300 my-10'/>

        <div className="space-y-4 gap-15 md:gap-8">
          
          <ol className="list-decimal list-inside ">
            <p className='font-bold py-2'>PROCESS & EXECUTION</p>

            <li className='font-bold py-2'>
              Research & Analysis
            </li>

            <div className='pl-5'>
              <p><strong>User Interviews:</strong> Conducted brief interviews with park patrons to confirm the pain points. The consensus was a desire to skip the line and the need for pre-order viewing of the menu.</p>
              <p><strong>Flow Mapping:</strong> Mapped the existing inefficient patron flow <span className='font-semibold italic'>(Wait in line → View menu → Decide → Order/Pay → Wait for fulfillment)</span> and compared it to the proposed streamlined flow <span className='font-semibold italic'>(Scan QR → View/Order → Pay/Pickup at designated area)</span>.</p>
            </div>

            
            <li className='font-bold py-2'>
              Data Architecture & Administration
            </li>
            <div className='pl-5 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 lg:gap-15'>
              <div>
                <p className='pb-2'>A critical requirement was giving the non-technical concession manager full control over the menu content without needing developer intervention.</p>
                <p><strong>Admin System:</strong> A Google Sheet was chosen as the user-friendly administration tool. The manager can use it to: <span className='font-semibold italic'>add or remove items</span> and <span className='font-semibold italic'>edit the Name, Description, Image URL, Price, Category, and Availability of each item.</span></p>
              </div>
              <img className='border border-gray-300 col-span-2 hidden md:block' src="/snackshack/GoogleSheets-Items.webp" alt="Google Sheets" />
            </div>

            <li className='font-bold py-2'>
              Frontend Implementation
            </li>
            <div className='pl-5'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-0 md:gap-8 lg:gap-15'>
                <div>
                  <p className='pb-2'><strong className='text-gray-600'>UX/UI Design</strong></p>
                  <p><strong>Menu Browsing:</strong> Clear category sorting and high-quality images (Adobe Photoshop was used to prep assets).</p>
                  <p><strong>Order Creation:</strong> Simple, intuitive adding/removing items from a cart.</p>
                  <p><strong>Checkout/Order Placement:</strong> Minimal steps to confirm and place the order.</p>
                </div>
                <div>
                  <p className='pb-2'><strong className='text-gray-600'>Development</strong></p>
                  <p><strong>Framework:</strong> React with Vite for a fast, modern build.</p>
                  <p><strong>Routing:</strong> React Router for seamless navigation.</p>
                  <p><strong>Data Fetching:</strong> Fetch API to consume the JSON data from the Google Sheets API.</p>
                  <p><strong>Design:</strong> A mobile-first approach was mandatory, ensuring usability on all common smartphone screen sizes.</p>
                </div>
              </div>

              
            </div>
          </ol>

        </div>

        <hr className='border border-gray-300 my-10'/>

        <div>  
      
          <div className="grid md:grid-cols-3 gap-15 md:gap-8">
            <div className='col-span-3 md:col-span-2'>
              <p className='py-2'><strong>RESULTS & CONCLUSION</strong></p>
              <p className='pb-2 font-semibold'>The implementation of the app immediately started to show positive effects on the concession stand operations.</p>
              <p>This project demonstrated that a simple, focused application can solve a complex operational problem. By leveraging common, accessible tools (Google Sheets) for the backend and pairing them with a modern, mobile-first frontend (React), we delivered an impactful UX solution that benefits both the business (faster service, higher throughput) and the user (less waiting, more game time).</p>
            </div>
            <div className='w-full flex flex-col items-center col-span-3 md:col-span-1'>
              <img className="hidden md:flex w-40 pt-2" src="/snackshack/snackshack-qr.webp" alt="Snack Shack QR Code" />
              <a className="md:hidden flex w-full rounded-sm bg-black py-2 px-3 justify-center items-center text-lg font-semibold text-white transition-colors duration-300 hover:bg-gray-600 tracking-wider" href="https://snackshack-demo.vercel.app/" target="_blank">LAUNCH DEMO</a>
              <p className='md:block hidden text-[#f22b40] font-semibold pt-2'>SCAN QR CODE FOR MOBILE DEMO</p>
              <a className='w-50 transition-all duration-300 hover:underline text-xs md:flex hidden flex-col items-center text-gray-600 font-bold justify-start mt-1' href="https://snackshack-demo.vercel.app/" target="_blank">
                <span className='flex items-center tracking-wider text-center text-gray-600 transition-colors duration-300 hover:text-black font-semibold'>OR LAUNCH IN BROWSER&nbsp;<ExternalLink className='w-3 h-3 stroke-3'/></span>
              </a>

            </div>
          </div>  
          
        </div>

      </div>
    </div>
  );
}

export default SnackShack;