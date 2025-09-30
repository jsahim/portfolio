const SnackShack = () => {

  return (
    <div className="text-black border-4 border-[#f22b40] bg-white rounded-lg p-10">
      
      <h3 className="font-bold  text-[#f22b40] text-xl">
        <span className="text-gray-600 font-bold">
          CASE STUDY | 
        </span> CONCESSION ORDERING APP
      </h3><br/><br/>

      <div className="space-y-4 grid md:grid-cols-2 gap-15 md:gap-8">

        <div>
          IMAGE
        </div>
        <div>
          <p><strong>PROJECT OVERVIEW</strong><br/><br/>This three-week project focused on improving the customer experience and operational efficiency of a local park's concession stand, which suffered from severe queue backups during peak hours, particularly at game halftimes and intermissions.</p>
          <p>Client: Concession Stand Manager at a local park</p>
          <p>Duration: 3 weeks</p>
          <p>My Role: Research, Wireframing & User Flows, Data Architecture, Software Development</p>
          <p>Summary: Developed a mobile-first web application that allows patrons to browse the concession menu and place orders remotely. The application's menu data is dynamically managed by an administrator using a simple Google Sheet, which is converted into a REST API to populate the app.</p><br/><br/>
        </div>

      </div>

      <hr /><br/><br/>

        <div className="list-decimal list-inside space-y-4 grid md:grid-cols-2 gap-15 md:gap-8">
          
          <div>
            <p><strong>THE CHALLENGE: <span className="text-gray-600 font-semibold">REDUCING WAIT TIMES AND INDICISION</span></strong><br/><br/>The primary problem was the frequent and lengthy line backups at the concession stand during peak event times. Patron feedback and initial observations revealed that these delays were significantly compounded by patron indecision when ordering at the window, leading to long transaction times and frustration. Patrons were missing portions of the games they came to see.</p>
            <p>Key Issues Identified:<br/>Peak Congestion: Halftimes and intermissions saw massive influxes of customers.<br/>Menu Blindness: Patrons had no way to view the menu, prices, or options until they were physically at the window, leading to on-the-spot decision-making.<br/>Lost Time: Extended wait times resulted in patrons missing game action.</p><br/><br/>
          </div>
          <div>
            <p><strong>THE SOLUTION: <span className="text-gray-600 font-semibold">A MOBILE-FIRST PRE-ORDERING APP</span></strong><br/><br/>The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.</p>
            <p>Strategy:<br/>Menu Visibility: Provide a digital, mobile-first menu accessible anywhere in the park.<br/>Order Ahead: Implement a feature for patrons to place and pay for orders directly through the app.<br/>Easy Access: Utilize strategically placed QR codes around the park (near seating areas, entrances) to provide instant access to the app menu.</p><br/><br/>
          </div>

        </div>

      <hr /><br/><br/>

      <p><strong>PROCESS & EXECUTION</strong><br/><br/>

        <ol className="list-decimal list-inside space-y-4 grid md:grid-cols-3 gap-15 md:gap-8">
          <li>Research & Analysis<br/>
            <strong>User Interviews:</strong> Conducted brief interviews with park patrons to confirm the pain points. The consensus was a desire to skip the line and the need for pre-order viewing of the menu.<br/>
            <strong>Flow Mapping:</strong> Mapped the existing inefficient patron flow (Wait in line → View menu → Decide → Order/Pay → Wait for fulfillment) and compared it to the proposed streamlined flow (Scan QR → View/Order → Pickup at designated area).
          </li>
          <li>Data Architecture & Administration<br/>
            A critical requirement was giving the non-technical concession manager full control over the menu content without needing developer intervention.<br/>
            <strong>Admin System:</strong> A Google Sheet was chosen as the user-friendly administration tool. The manager can use it to:<br/>Add or remove items.<br/>Edit the Name, Description, Image URL, Price, Category, and Availability of each item.
          </li>
          <li>Design & Development<br/>
              <strong>Wireframing & User Flows:</strong> Created wireframes to outline the user interface and experience, focusing on simplicity and ease of use.<br/>
              <strong>Menu Browsing:</strong><br/>Clear category sorting and high-quality images (Adobe Photoshop was used to prep assets).<br/>
              <strong>Order Creation:</strong><br/>Simple, intuitive adding/removing items from a cart.<br/>
              <strong>Checkout/Order Placement:</strong><br/>Minimal steps to confirm and place the order.<br/>
              <strong>Tech Stack:</strong><br/>Front-end: React with Vite for a fast, modern build.<br/>Routing: React Router for seamless navigation.<br/>Data Fetching: Fetch API to consume the JSON data from the Google Sheets API.<br/>Design: A mobile-first approach was mandatory, ensuring usability on all common smartphone screen sizes.
          </li>
        </ol>
      </p>
      
      <hr /><br/><br/>

      <div className="list-decimal list-inside space-y-4 grid md:grid-cols-2 gap-15 md:gap-8">  
        <div>
          <p><strong>RESULTS & IMPACT</strong><br/><br/>The implementation of the app immediately started to show positive effects on the concession stand operations.</p> <br/><br/>
          <p><strong>CONCLUSION</strong><br/><br/>This project demonstrated that a simple, focused application can solve a complex operational problem. By leveraging common, accessible tools (Google Sheets) for the backend and pairing them with a modern, mobile-first frontend (React), we delivered an impactful UX solution that benefits both the business (faster service, higher throughput) and the user (less waiting, more game time).</p>
        </div>
        <div>
          IMAGE
        </div>
          
      </div>

    </div>
  )
}

export default SnackShack;