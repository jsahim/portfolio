import Image from "next/image"

export default function Projects() {

  return (
    <div className="w-[85%]">
      <h1 className="font-[Fugaz] text-6xl text-[#e98522] text-center m-5">Projects</h1>
      <div className="flex flex-wrap justify-center w-inherit">

        <div className="flex flex-col justify-between items-center w-[500px] m-10 bg-gray-100 p-10 border-2 rounded-3xl aspect-[3/4] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={600}  src="/images/Xpresso.png" alt="Xpresso Coffee" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5 text-center">Xpresso Coffee</h2>
          <p className="text-center p-2">Order a coffee through Xpresso and have it delivered by drone!</p>
          <div className="my-5 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
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
          <div className="w-full flex justify-around items-center *:px-3 *:py-1 text-center *:border-0 *:rounded-md">
            <a className="py-4 px-6 text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://github.com/jsahim/xpresso" target="_blank"><span className="m-4">GitHub</span></a>
            <a className="py-4 px-6 text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://xpresso-coffee.vercel.app" target="_blank"><span className="m-4">Website</span></a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-[500px] m-10 bg-gray-100 p-10 border-2 rounded-3xl aspect-[3/4] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={600} src="/images/Rancid.png" alt="Rancid Tomatillos" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5 text-center">Rancid Tomatillos</h2>
          <p className="text-center p-2">Can&apos;t decide on a movie to watch? Rancid Tomatillos has you covered.</p>
          <div className="my-5 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
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
          <div className="w-full flex justify-around items-center *:px-3 *:py-1 text-center *:border-0 *:rounded-md">
            <a className="py-4 px-6 text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://github.com/jsahim/rancid-tomatillos" target="_blank"><span className="m-4">GitHub</span></a>
            <a className="py-4 px-6 text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://rancid-tomatillos-jsahim.vercel.app" target="_blank"><span className="m-4">Website</span></a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-[500px] m-10 bg-gray-100 p-10 border-2 rounded-3xl aspect-[3/4] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={600}  src="/images/Hogwarts.png" alt="Battle of Hogwarts" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5 text-center">Battle of Hogwarts</h2>
          <p className="text-center p-2">Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
          <div className="my-5 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
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
          <div className="w-full flex justify-around items-center *:px-3 *:py-1 text-center *:border-0 *:rounded-md">
            <a className="py-4 px-6 text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://github.com/jsahim/battle-of-hogwarts" target="_blank"><span className="m-4">GitHub</span></a>
            <a className="py-4 px-6 text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://jsahim.github.io/battle-of-hogwarts" target="_blank"><span className="m-4">Website</span></a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-[500px] m-10 bg-gray-100 p-10 border-2 rounded-3xl aspect-[3/4] transition-all duration-150 ease-in" >
          <Image className="w-inherit" height={200} width={600} src="/images/Hotel.png" alt="Hotel Azuro" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5 text-center">Hotel Azuro</h2>
          <p className="text-center p-2">Book your stay at the luxourous Hotel Azuro.<br/><span className="font-semibold">USERNAME:</span> customer2 <br/><span className="font-semibold">PASSWORD:</span> overlook2021</p>
          <div className="my-5 flex flex-wrap justify-center *:px-3 *:py-1 *:m-1 *:text-[#e98522] *:text-xs *:border-2 *:border-[#e98522] *:rounded-xl *:font-medium">
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
          <div className="w-full flex justify-around items-center *:px-3 *:py-1 text-center *:border-0 *:rounded-md">
            <a className="text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://github.com/jsahim/hotel-azuro" target="_blank"><span className="m-4">GitHub</span></a>
            <a className="text-base font-regular text-center text-white bg-[#304962] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#e98522]" href="https://hotel-azuro.vercel.app" target="_blank"><span className="m-4">Website</span></a>
          </div>
        </div>

      </div>
    </div>
  )
}