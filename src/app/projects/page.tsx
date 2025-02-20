import Image from "next/image"
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";



export default function Projects() {

  return (
    <div className="w-[85%]">
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">Projects</h1>
      <div className="flex flex-col flex-wrap justify-center items-center w-inherit gap-3">

        <div className="flex md:flex-row flex-col justify-between items-center w-[90%] bg-gray-100 p-10 border-2 rounded-[50px] aspect-[5/2] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={500} src="/images/Xpresso.png" alt="Xpresso Coffee" />
          <div className="flex flex-col px-5 h-full justify-between md:py-10 py-2 md:pt-auto pt-5">
            <h2 className="text-3xl p-2 font-semibold text-[#304962] text-left">Xpresso Coffee</h2>
            <p className="text-left p-2">Order a coffee through Xpresso and have it delivered by drone!</p>
            <div className="my-5 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React Router</span>
              <span>Cypress</span>
              <span>Git</span>
              <span>Fetch API</span>
              <span>Webpack</span>
            </div>
            <div className="w-full flex justify-end items-center *:px-3">
              <a href="https://xpresso-coffee.vercel.app" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FiExternalLink /></span></a>
              <a href="https://github.com/jsahim/xpresso" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FaGithub /></span></a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center w-[90%] bg-gray-100 p-10 border-2 rounded-[50px] aspect-[5/2] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={500} src="/images/Rancid.png" alt="Rancid Tomatillos" />
          <div className="flex flex-col px-5 h-full justify-between md:py-10 py-2 md:pt-auto pt-5">
            <h2 className="text-3xl p-2 font-semibold text-[#304962] text-left">Rancid Tomatillos</h2>
            <p className="text-left p-2">Can&apos;t decide on a movie to watch? Rancid Tomatillos has you covered.</p>
            <div className="my-5 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React Router</span>
              <span>Cypress</span>
              <span>Git</span>
              <span>Fetch API</span>
              <span>Webpack</span>
            </div>
            <div className="w-full flex justify-end items-center *:px-3">
              <a href="https://rancid-tomatillos-jsahim.vercel.app" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FiExternalLink /></span></a>
              <a href="https://github.com/jsahim/rancid-tomatillos" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FaGithub /></span></a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center w-[90%] bg-gray-100 p-10 border-2 rounded-[50px] aspect-[5/2] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={500}  src="/images/Hogwarts.png" alt="Battle of Hogwarts" />
          <div className="flex flex-col px-5 h-full justify-between md:py-10 py-2 md:pt-auto pt-5">
            <h2 className="text-3xl p-2 font-semibold text-[#304962] text-left">Battle of Hogwarts</h2>
            <p className="text-left p-2">Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
            <div className="my-5 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="w-full flex justify-end items-center *:px-3">
              <a href="https://jsahim.github.io/battle-of-hogwarts" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FiExternalLink /></span></a>
              <a href="https://github.com/jsahim/battle-of-hogwarts" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FaGithub /></span></a>
            </div>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col justify-between items-center w-[90%] bg-gray-100 p-10 border-2 rounded-[50px] aspect-[5/2] transition-all duration-150 ease-in mb-10" >
          <Image className="w-inherit" height={200} width={500} src="/images/Hotel.png" alt="Hotel Azuro" />
          <div className="flex flex-col px-5 h-full justify-between md:py-10 py-2 md:pt-auto pt-5">            
            <h2 className="text-3xl p-2 font-semibold text-[#304962] text-left">Hotel Azuro</h2>
            <p className="text-left p-2">Book your stay at the luxourous Hotel Azuro.<br/><br/><span className="font-semibold">USERNAME:</span> customer2 <br/><span className="font-semibold">PASSWORD:</span> overlook2021</p>
            <div className="my-5 flex flex-wrap justify-start *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>LightHouse</span>
              <span>Wave Evaluation</span>
              <span>Mocha</span>
              <span>Chai</span>
              <span>Fetch API</span>
              <span>Webpack</span>
            </div>
            <div className="w-full flex justify-end items-center *:px-3">
              <a href="https://hotel-azuro.vercel.app" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FiExternalLink /></span></a>
              <a href="https://github.com/jsahim/hotel-azuro" target="_blank"><span className="text-3xl hover:text-[#e98522] text-[#304962]"><FaGithub /></span></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}