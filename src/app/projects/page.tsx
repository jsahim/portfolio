import Image from "next/image"
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


export default function Projects() {

  return (
    <div className="w-[85%] pb-16 flex flex-col justify-center items-center">
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">Projects</h1>

      <h2 className="text-3xl p-2 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[20px] bg-gray-50 mb-2 shadow-md">Software Projects</h2>
      <div className="flex flex-col w-[100%] h-full justify-center gap-5 bg-gray-50 rounded-[50px] shadow-md p-5 rounded-t-lg">
        
        <div className="flex md:flex-row flex-col md:h-96 h-[auto] w-[100%] justify-between items-center">
          <Image className="max-w-[500px] w-[100%] md:w-[50%]" height={0} width={500} src="/images/Xpresso.png" alt="Xpresso Coffee" />
          <div className="flex flex-col w-[100%] md:w-[50%] p-3 md:p-5">
            <h3 className="text-2xl font-semibold text-left mb-3">Xpresso Coffee</h3>
            <p className="text-base text-left pb-3">Order a coffee through Xpresso and have it delivered by drone!</p>
            <div className="my-0 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>React Router</span><span>Cypress</span><span>Git</span><span>Fetch API</span><span>Webpack</span><span>Photoshop</span>
            </div>
            <div className="flex justify-end md:justify-start items-center mt-2">
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://xpresso-coffee.vercel.app/"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://github.com/jsahim/xpresso" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col md:h-96 h-[auto] w-[100%] justify-between items-center" >
          <Image className="max-w-[500px] w-[100%] md:w-[50%]" height={0} width={500} src="/images/Rancid.png" alt="Rancid Tomatillos" />
          <div className="flex flex-col w-[100%] md:w-[50%] p-3 md:p-5">
            <h3 className="text-2xl font-semibold text-left mb-3">Rancid Tomatillos</h3>
            <p className="text-base text-left pb-3">Can&apos;t decide on a movie to watch? Rancid Tomatillos has you covered.</p>
            <div className="my-0 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>React</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>React Router</span><span>Cypress</span><span>Git</span><span>Fetch API</span><span>Webpack</span><span>Photoshop</span>
            </div>
            <div className="flex justify-end md:justify-start items-center mt-2">
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://rancid-tomatillos-jsahim.vercel.app" target="_blank"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://github.com/jsahim/rancid-tomatillos" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:h-96 h-[auto] w-[100%] justify-between items-center" >
          <Image className="max-w-[500px] w-[100%] md:w-[50%]" height={0} width={500} src="/images/Hogwarts.png" alt="Battle of Hogwarts" />
          <div className="flex flex-col w-[100%] md:w-[50%] p-3 md:p-5">
            <h3 className="text-2xl font-semibold text-left mb-3">Battle of Hogwarts</h3>
            <p className="text-base text-left pb-3">Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
            <div className="my-0 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-white *:text-[12px] *:bg-[#304962] *:rounded-lg *:font-semibold">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Photoshop</span>
            </div>
            <div className="flex justify-end md:justify-start items-center mt-2">
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://jsahim.github.io/battle-of-hogwarts" target="_blank"><FiExternalLink className="h-10 w-10"/></a>
              <a className="flex justify-center items-center hover:text-[#e98522] text-[#304962] transition-all duration-150 ease-in h-14 w-14 rounded-full" href="https://github.com/jsahim/battle-of-hogwarts" target="_blank"><FaGithub className="h-10 w-10"/></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}