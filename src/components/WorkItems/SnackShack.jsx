
import { useState, useRef } from 'react';
import { ChevronsDownUp, ChevronsUpDown, ExternalLink } from 'lucide-react';


const SnackShack = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const projectTop = useRef(null)

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <div ref={projectTop} className="text-black border-4 snap-start scroll-mt-0 sm:scroll-mt-25 border-[#f22b40] bg-white rounded-lg md:p-10 p-5">
      
      <div className="flex justify-between items-center border-b-3 pb-5 border-black">
        <h3 className="font-bold text-[#f22b40] text-xl">
          THE SNACK SHACK: CONCESSION ORDERING APP
        </h3>
        <div className="flex flex-col justify-start h-[-webkit-fill-available]">
          <button className="cursor-pointer z-5 w-12 h-12 rounded-full bg-[#f22b40] border-3 border-black hover:border-gray-600 transition-all duration-300 flex justify-center items-center text-white font-bold" 
            onClick={()=> { scrollToTargetDiv(projectTop); drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)}}>{drawerOpen ? <ChevronsDownUp className='stroke-2 w-8 h-8'/> : <ChevronsUpDown className='stroke-2 w-8 h-8'/> }</button>
        </div>
      </div>

      <div className="space-y-4 grid md:grid-cols-2 gap-15 md:gap-8 mt-10">
        <div className='flex justify-center items-center'>
          <img className='w-[250px]' src="/shack-frame.png" alt="shack" />
        </div>
        <div>
          <p className='font-bold py-2'>PROJECT OVERVIEW</p>
          <p>This three-week project focused on improving the customer experience and operational efficiency of a local park's concession stand, which suffered from severe queue backups during peak hours, particularly at game halftimes and intermissions.</p>
          <p><strong>Client:</strong> Franklin Park Borough - Parks and Recreation</p>
          <p><strong>Duration:</strong> 3 weeks</p>
          <p><strong>My Role:</strong> Research, Wireframing & User Flows, Data Architecture, Software Development</p>
          <p><strong>Summary:</strong> Developed a mobile-first web application that allows patrons to browse the concession menu and place orders remotely. The application's menu data is dynamically managed by an administrator using a simple Google Sheet, which is converted into a REST API to populate the app.</p>
        </div>
      </div>


      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${drawerOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        
        <hr className='border border-gray-600 my-10'/>
        
        <div className="space-y-4 grid md:grid-cols-2 gap-15 md:gap-8">
        
          <div>
            <p className='py-2'><strong>THE CHALLENGE: <span className="text-gray-600">REDUCING WAIT TIMES AND INDICISION</span></strong></p>
            <p>The primary problem was the frequent and lengthy line backups at the concession stand during peak event times. Patron feedback and initial observations revealed that these delays were significantly compounded by patron indecision when ordering at the window, leading to long transaction times and frustration. Patrons were missing portions of the games they came to see.</p>
            <p className='py-2'><strong>Key Issues Identified</strong></p>
            <ul className='list-disc list-inside'>
              <li><strong>Peak Congestion:</strong> Halftimes and intermissions saw massive influxes of customers.</li>
              <li><strong>Menu Blindness:</strong> Patrons had no way to view the menu, prices, or options until they were physically at the window, leading to on-the-spot decision-making.</li>
              <li><strong>Lost Time:</strong> Extended wait times resulted in patrons missing game action.</li>
            </ul>
          </div>

          <div>
            <p className='py-2'><strong>THE SOLUTION: <span className="text-gray-600">A MOBILE-FIRST PRE-ORDERING APP</span></strong></p>
            <p>The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.</p>
            <p className='py-2'><strong>Strategy</strong></p>
            <ul className='list-disc list-inside'>
              <li><strong>Menu Visibility:</strong> Provide a digital, mobile-first menu accessible anywhere in the park.</li>
              <li><strong>Order Ahead:</strong>  Implement a feature for patrons to place and pay for orders directly through the app.</li>
              <li><strong>Easy Access:</strong> Utilize strategically placed QR codes around the park (near seating areas, entrances) to provide instant access to the app menu.</li>
            </ul>
          </div>

        </div>

        <hr className='border border-gray-600 my-10'/>

        <div className="space-y-4 grid md:grid-cols-2 gap-15 md:gap-8">
          
          <ol className="list-decimal list-inside">
            <p className='font-bold py-2'>PROCESS & EXECUTION</p>
            <li className='font-bold py-2'>
              Research & Analysis
            </li>
            <div className='pl-5'>
              <p><strong>User Interviews:</strong> Conducted brief interviews with park patrons to confirm the pain points. The consensus was a desire to skip the line and the need for pre-order viewing of the menu.</p>
              <p><strong>Flow Mapping:</strong> Mapped the existing inefficient patron flow <span className='font-semibold italic'>(Wait in line → View menu → Decide → Order/Pay → Wait for fulfillment)</span> and compared it to the proposed streamlined flow <span className='font-semibold italic'>(Scan QR → View/Order → Pickup at designated area)</span>.</p>
            </div>
            <li className='font-bold py-2'>
              Data Architecture & Administration
            </li>
            <div className='pl-5'>
              <p>A critical requirement was giving the non-technical concession manager full control over the menu content without needing developer intervention.</p>
              <p><strong>Admin System:</strong> A Google Sheet was chosen as the user-friendly administration tool. <br/>The manager can use it to: <span className='font-semibold italic'>add or remove items</span> and <br/><span className='font-semibold italic'>edit the Name, Description, Image URL, Price, Category, and Availability of each item.</span></p>
            </div>
            <li className='font-bold py-2'>
              Design & Development
            </li>
            <div className='pl-5'>
              <p><strong>Wireframing & User Flows</strong></p>
              <p>Created wireframes to outline the user interface and experience, focusing on simplicity and ease of use.</p>
              <ul className='list-disc list-inside'>
                <li><strong>Menu Browsing:</strong> Clear category sorting and high-quality images (Adobe Photoshop was used to prep assets).</li>
                <li><strong>Order Creation:</strong> Simple, intuitive adding/removing items from a cart.</li>
                <li><strong>Checkout/Order Placement:</strong> Minimal steps to confirm and place the order.</li>
              </ul>

              <p><strong>Tech Stack</strong></p>
              <p>Created wireframes to outline the user interface and experience, focusing on simplicity and ease of use.</p>
              <ul className='list-disc list-inside'>
                <li><strong>Front-end:</strong> React with Vite for a fast, modern build.</li>
                <li><strong>Routing:</strong> React Router for seamless navigation.</li>
                <li><strong>Data Fetching:</strong> Fetch API to consume the JSON data from the Google Sheets API.</li>
                <li><strong>Design:</strong> A mobile-first approach was mandatory, ensuring usability on all common smartphone screen sizes.</li>
              </ul>
              
            </div>
          </ol>

          <div className="flex flex-col items-center justify-evenly">
            <img src="/GoogleSheets-Items.png" alt="jeff pic" />
            <img src="/Menu-Wireframe.png" alt="jeff pic" />
          </div>

        </div>

        <hr className='border border-gray-600 my-10'/>

        <div>  
      
          <div className="grid md:grid-cols-2 gap-15 md:gap-8">
            <div>
              <p className='py-2'><strong>RESULTS & CONCLUSION</strong></p>
              <p><span className='font-semibold'>The implementation of the app immediately started to show positive effects on the concession stand operations.</span><br/>This project demonstrated that a simple, focused application can solve a complex operational problem. By leveraging common, accessible tools (Google Sheets) for the backend and pairing them with a modern, mobile-first frontend (React), we delivered an impactful UX solution that benefits both the business (faster service, higher throughput) and the user (less waiting, more game time).</p>
            </div>
            <div className='w-full flex flex-col items-center'>
              <p className='text-[#f22b40] font-bold'>Scan to Demo Application</p>
              <img className="hidden sm:flex w-50" src="/snackshack-qr.png" alt="jeff pic" />
              <a className="sm:hidden flex w-fit items-center text-xl font-semibold text-black hover:text-[#f22b40] transition-colors duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">LAUNCH DEMO <ExternalLink className="ml-3 stroke-3"/></a>
            </div>
          </div>  
          
        </div>

      </div>
    </div>
  );
}

export default SnackShack;