const Retrofresh = () => {

  return (
    <div className="text-black">
      
      <p>UX Case Study: Concession Stand Streamlining App</p>
      <p>Project Overview<br/>This three-week project focused on improving the customer experience and operational efficiency of a local park's concession stand, which suffered from severe queue backups during peak hours, particularly at game halftimes and intermissions.</p>
      <p>Client: Concession Stand Manager at a local park</p>
      <p>Duration: 3 weeks</p>
      <p>My Role: Research, Wireframing & User Flows, Data Architecture, Software Development</p>
      <p>Summary: Developed a mobile-first web application that allows patrons to browse the concession menu and place orders remotely. The application’s menu data is dynamically managed by an administrator using a simple Google Sheet, which is converted into a REST API to populate the app.</p>
      <p>The Challenge: Reducing Wait Times and Indecision<br/>The primary problem was the frequent and lengthy line backups at the concession stand during peak event times. Patron feedback and initial observations revealed that these delays were significantly compounded by patron indecision when ordering at the window, leading to long transaction times and frustration. Patrons were missing portions of the games they came to see.</p>
      <p>Key Issues Identified:<br/>Peak Congestion: Halftimes and intermissions saw massive influxes of customers.<br/>Menu Blindness: Patrons had no way to view the menu, prices, or options until they were physically at the window, leading to on-the-spot decision-making.<br/>Lost Time: Extended wait times resulted in patrons missing game action.</p>
      <p>The Solution: A Mobile-First Pre-Ordering App<br/>The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.The solution was to provide patrons with easy, remote access to the full menu and the ability to place orders before they even approached the stand, addressing indecision and queue length simultaneously.</p>
      <p>Strategy:<br/>Menu Visibility: Provide a digital, mobile-first menu accessible anywhere in the park.<br/>Order Ahead: Implement a feature for patrons to place and pay for orders directly through the app.<br/>Easy Access: Utilize strategically placed QR codes around the park (near seating areas, entrances) to provide instant access to the app menu.</p>
      <p>Process and Execution
        <ol>
          <li>Research & Analysis<br/>User Interviews: Conducted brief interviews with park patrons to confirm the pain points. The consensus was a desire to skip the line and the need for pre-order viewing of the menu.<br/>Flow Mapping: Mapped the existing inefficient patron flow (Wait in line → View menu → Decide → Order/Pay → Wait for fulfillment) and compared it to the proposed streamlined flow (Scan QR → View/Order → Pickup at designated area).</li>
          <li>Data Architecture & Administration<br/>A critical requirement was giving the non-technical concession manager full control over the menu content without needing developer intervention.<br/>Admin System: A Google Sheet was chosen as the user-friendly administration tool. The manager can use it to:<br/>Add or remove items.<br/>Edit the Name, Description, Image URL, Price, Category, and Availability of each item.</li>
          <li>Design & Development</li>
        </ol>
      </p>
      <p>Menu Browsing:<br/>Clear category sorting and high-quality images (Adobe Photoshop was used to prep assets).</p>
      <p>Order Creation:<br/>Simple, intuitive adding/removing items from a cart.</p>
      <p>Checkout/Order Placement:<br/>Minimal steps to confirm and place the order.</p>
      <p>Tech Stack:<br/>Front-end: React with Vite for a fast, modern build.<br/>Routing: React Router for seamless navigation.<br/>Data Fetching: Fetch API to consume the JSON data from the Google Sheets API.<br/>Design: A mobile-first approach was mandatory, ensuring usability on all common smartphone screen sizes.</p>
      <p>Results and Impact<br/>The implementation of the app immediately started to show positive effects on the concession stand operations.</p>
      <p>Conclusion<br/>This project demonstrated that a simple, focused application can solve a complex operational problem. By leveraging common, accessible tools (Google Sheets) for the backend and pairing them with a modern, mobile-first frontend (React), we delivered an impactful UX solution that benefits both the business (faster service, higher throughput) and the user (less waiting, more game time).</p>

    </div>
  )
}

export default Retrofresh;