import Image from "next/image"
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


export default function Projects() {

  return (
    <div className="w-[85%] pb-16 flex flex-col justify-center items-center">
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">Projects</h1>

      <h2 className="text-3xl p-2 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[50px] bg-gray-50 mb-2 shadow-md">Software Projects</h2>
      <div className="flex flex-wrap w-[100%] h-full justify-between items-center">
        
        <div className="flex flex-col h-[600px] justify-between items-center w-96 shadow-md rounded-[50px] p-5 bg-gray-50 mb-3 rounded-t-lg">
          <div>
            <h3 className="text-xl md:text-2xl p-2 font-semibold text-center mb-3">Xpresso Coffee</h3>
            <Image height={0} width={500} src="/images/Xpresso.png" alt="Xpresso Coffee" />
          </div>
          <div className="flex flex-col w-[100%]">
            <p className="text-base text-center pb-3">Order a coffee through Xpresso and have it delivered by drone!</p>
            <div className="my-0 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React Router</span>
              <span>Cypress</span>
              <span>Git</span>
              <span>Fetch API</span>
              <span>Webpack</span>
              <span>Photoshop</span>
            </div>
            <div className="flex justify-center items-center *:px-3 mt-2">
              <a className="flex justify-center items-center hover:bg-[#e98522] hover:text-white text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://xpresso-coffee.vercel.app/"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:bg-[#e98522] hover:text-white text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://github.com/jsahim/xpresso" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-[600px] justify-between items-center w-96 shadow-md bg-gray-50 rounded-[50px] p-5 mb-3 border border-gray-200 rounded-t-lg" >
          <div>
            <h3 className="text-xl md:text-2xl p-2 font-semibold text-center mb-3">Rancid Tomatillos</h3>
            <Image height={0} width={500} src="/images/Rancid.png" alt="Rancid Tomatillos" />
          </div>
          <div className="flex flex-col w-[100%]">
            <p className="text-base text-center pb-3">Can&apos;t decide on a movie to watch? Rancid Tomatillos has you covered.</p>
            <div className="my-0 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React Router</span>
              <span>Cypress</span>
              <span>Git</span>
              <span>Fetch API</span>
              <span>Webpack</span>
              <span>Photoshop</span>
            </div>
            <div className="flex justify-center items-center *:px-3 mt-2">
              <a className="flex justify-center items-center hover:bg-[#e98522] hover:text-white text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://rancid-tomatillos-jsahim.vercel.app" target="_blank"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:bg-[#e98522] hover:text-white text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://github.com/jsahim/rancid-tomatillos" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>


        <div className="flex flex-col h-[600px] justify-between items-center w-96 shadow-md bg-gray-50 rounded-[50px] p-5 mb-3 border border-gray-200 rounded-t-lg" >
          <div> 
            <h3 className="text-xl md:text-2xl p-2 font-semibold text-center mb-3">Battle of Hogwarts</h3>
            <Image height={0} width={500} src="/images/Hogwarts.png" alt="Battle of Hogwarts" />
          </div>
          <div className="flex flex-col w-[100%]">
            <p className="text-base text-center pb-3">Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
            <div className="my-0 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React Router</span>
              <span>Cypress</span>
              <span>Git</span>
              <span>Fetch API</span>
              <span>Webpack</span>
              <span>Photoshop</span>
            </div>
            <div className="flex justify-center items-center *:px-3 mt-2">
              <a className="flex justify-center items-center hover:bg-[#e98522] hover:text-white text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://jsahim.github.io/battle-of-hogwarts" target="_blank"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:bg-[#e98522] hover:text-white text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://github.com/jsahim/battle-of-hogwarts" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}