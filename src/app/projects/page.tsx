import Image from "next/image"
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  return (
    <div className="w-[85%] pb-16 flex flex-col justify-center items-center">
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">Projects</h1>
      
      <h2 id="uxProjects" className="text-3xl p-2 py-4 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[20px] bg-gray-50 mb-2 shadow-md">Full Cycle Development</h2>
      <div className="flex flex-col w-[100%] h-full justify-center bg-gray-50 rounded-[50px] shadow-md p-5 rounded-t-lg mb-14">

          <div className="flex flex-col h-[auto] w-[100%] justify-evenly items-start p-5">
            <div className="w-[100%] flex justify-between items-center">

              <div className="w-[58%]">
                <h3 className="text-2xl font-semibold text-left mb-3">Retrofresh Concession Stand<br/>Menu & Ordering App</h3>
                <p className="text-base text-left pb-3"><strong>Client:</strong>&nbsp;&nbsp;Concession stand manager at a local park</p>
                <p className="text-base text-left pb-3"><strong>Duration:</strong>&nbsp;&nbsp;3-weeks</p>
                <p className="text-base text-left pb-3"><strong>My Role:</strong>&nbsp;&nbsp;Research, <a className="underline" href="https://drive.google.com/file/d/1GAF1Y1VrIsK2iDifTcce-CtMZo7B1Orj/view?usp=sharing" target="_blank">Wireframing & User Flows</a>, <a className="underline" href="https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiOsFeFPk8KgXY7NFeIUe9JLf_8wDuhgJj3x6dsFL_JHguzVxbyrkz-frVWOaiMQdrXCBWvZDjHEADnxsBpalQvQXiI6eBxYKKWS_8OW8vR8njp3JWHZZdSy5w6PMxg_cK9CH5aunyuCcxA90FIVqvJFcdl2m7n-2CfaJ754s_-QnoWnyvlcayogLus5ghBY2WIzlyLEkPcfAGndKxIsty0Aglqo3TgYZhN7qjeoWzCElPHFjLmwGBK7J6njkSF8ggLIAaf7Fhw385n0Qxh3_-AwGcesLW1N5473mjFGBVALyUA9_P5iUJbvkuXcCBqB2ff0q9j&lib=MJKJo2Ws2uNByezLvycTMRXLZxGTYFyTf" target="_blank">Data Architecture</a>, <a className="underline" href="https://drive.google.com/file/d/14_TznN_MDdtGOhxDwzRY-QLYfe653Jox/view?usp=sharing" target="_blank">Software Development</a></p>
                <p className="text-base text-left pb-3"><strong>Summary:</strong>&nbsp;&nbsp;Using Google Sheets, an admin can add or remove items, as well as edit each concession menu item's Name, Description, Image, Price, Category, and Availability. The sheet is then converted into a REST API, with the JSON data used to populate the app menu for patron viewing or ordering.</p>
                <p className="text-base text-left pb-3"><strong>Challenge:</strong>&nbsp;&nbsp;Line backups frequently occur at the park concession stand during game halftimes and intermissions, causing patrons to miss parts of the game. Interviews revealed that these delays are worsened by patrons being indecisive when ordering.</p>
                <p className="text-base text-left pb-3"><strong>Solution:</strong>&nbsp;&nbsp;Strategically placed QR codes around the park allow patrons to access the app menu, helping them make informed decisions before reaching the concession stand—or place orders directly through the app to skip the wait entirely.</p>
                <p className="text-base text-left pb-3"><strong>Tech:</strong>&nbsp;&nbsp;React, Vite, React Router, Fetch API, Adobe Photoshop, Excalidraw</p>
                <p className="text-base text-left pb-3"><strong>Results:</strong>&nbsp;&nbsp;The concession stand manager has confirmed that the app significantly streamlined the process of selling concession items.</p>
              </div>

              <div className="relative flex flex-col scale-75 origin-top justify-start content-center w-[370px] h-[670px]">
                <iframe className="w-[350px] h-[585px] absolute translate-x-3 translate-y-24" src="https://menu-test-ruby.vercel.app/" title="Menu App" />
                <Image className="w-[370px] h-auto absolute pointer-events-none" height={0} width={1000} src="/images/frame.png" alt="Frame" />
              </div>

            </div>
          </div> 
          
      </div>

      <h2 id="softProjects" className="text-3xl p-2 py-4 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[20px] bg-gray-50 mb-2 shadow-md">Software Projects</h2>
      <div className="flex flex-col w-[100%] h-full justify-center gap-5 bg-gray-50 rounded-[50px] shadow-md p-5 rounded-t-lg">
        
        <div className="flex md:flex-row flex-col md:h-96 h-[auto] w-[100%] justify-evenly items-center">
          <Image className="max-w-[500px] w-[100%] md:w-[50%] p-2 md:p-5" height={0} width={500} src="/images/Xpresso.png" alt="Xpresso Coffee" />
          <div className="flex flex-col w-[100%] md:w-[50%] p-3 md:p-5">
            <h3 className="text-2xl font-semibold text-left mb-3">Xpresso Coffee</h3>
            <p className="text-base text-left pb-3">Order a coffee through Xpresso and have it delivered by drone!</p>
            <div className="my-0 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>React Router</span><span>Cypress</span><span>Git</span><span>Fetch API</span><span>Webpack</span><span>Photoshop</span>
            </div>
            <div className="flex justify-end md:justify-start items-center mt-3 w-[100%] gap-5">
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in" href="https://xpresso-coffee.vercel.app/"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in" href="https://github.com/jsahim/xpresso" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col md:h-96 h-[auto] w-[100%] justify-evenly items-center" >
          <Image className="max-w-[500px] w-[100%] md:w-[50%] p-2 md:p-5" height={0} width={500} src="/images/Rancid.png" alt="Rancid Tomatillos" />
          <div className="flex flex-col w-[100%] md:w-[50%] p-3 md:p-5">
            <h3 className="text-2xl font-semibold text-left mb-3">Rancid Tomatillos</h3>
            <p className="text-base text-left pb-3">Can&apos;t decide on a movie to watch? Rancid Tomatillos has you covered.</p>
            <div className="my-0 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>React Router</span><span>Cypress</span><span>Git</span><span>Fetch API</span><span>Webpack</span><span>Photoshop</span>
            </div>
            <div className="flex justify-end md:justify-start items-center mt-3 w-[100%] gap-5">
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in" href="https://rancid-tomatillos-jsahim.vercel.app" target="_blank"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in" href="https://github.com/jsahim/rancid-tomatillos" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:h-96 h-[auto] w-[100%] justify-evenly items-center" >
          <Image className="max-w-[500px] w-[100%] md:w-[50%] p-2 md:p-5" height={0} width={500} src="/images/Hogwarts.png" alt="Battle of Hogwarts" />
          <div className="flex flex-col w-[100%] md:w-[50%] p-3 md:p-5">
            <h3 className="text-2xl font-semibold text-left mb-3">Battle of Hogwarts</h3>
            <p className="text-base text-left pb-3">Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
            <div className="my-0 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Photoshop</span>
            </div>
            <div className="flex justify-end md:justify-start items-center mt-3 w-[100%] gap-5">
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in" href="https://jsahim.github.io/battle-of-hogwarts" target="_blank"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in" href="https://github.com/jsahim/battle-of-hogwarts" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}