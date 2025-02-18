import Image from "next/image"

export default function Projects() {

  return (
    <div className="w-[85%]">
      <h1 className="font-[Fugaz] text-6xl text-[#e98522]">Projects</h1>
      <div className="flex flex-wrap justify-center w-inherit">

        <div className="flex flex-col justify-center items-center md:w-[40%] w-full m-10 bg-slate-100 p-8 rounded-lg">
          <Image className="w-inherit" src="images/Xpresso.png" alt="Xpresso Coffee" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5">Xpresso Coffee</h2>
          <p>Order a coffee through Xpresso and have it delivered by drone!</p>
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
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://github.com/jsahim/xpresso">GitHub</a>
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://xpresso-coffee.vercel.app">Website</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:w-[40%] w-full m-10 bg-slate-100 p-8 rounded-lg">
          <Image className="w-inherit" src="images/Rancid.png" alt="Rancid Tomatillos" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5">Rancid Tomatillos</h2>
          <p>Can't decide on a movie to watch? Rancid Tomatillos has you covered.</p>
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
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://github.com/jsahim/rancid-tomatillos">GitHub</a>
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://rancid-tomatillos-jsahim.vercel.app">Website</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  md:w-[40%] w-full m-10 bg-slate-100 p-8 rounded-lg">
          <Image className="w-inherit" src="images/Hogwarts.png" alt="Battle of Hogwarts" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5">Battle of Hogwarts</h2>
          <p>Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
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
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://github.com/jsahim/battle-of-hogwarts">GitHub</a>
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://jsahim.github.io/battle-of-hogwarts">Website</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:w-[40%] w-full m-10 bg-slate-100 p-8 rounded-lg">
          <Image className="w-inherit" src="images/Hotel.png" alt="Hotel Azuro" />
          <h2 className="text-3xl font-semibold text-[#304962] py-5">Hotel Azuro</h2>
          <p>Book your stay at the luxourous Hotel Azuro.<br/>USERNAME: customer2 PASSWORD: overlook2021</p>
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
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://github.com/jsahim/hotel-azuro">GitHub</a>
            <a className="p-5 bg-[#304962] text-2xl font-light text-white w-[40%]" href="https://hotel-azuro.vercel.app">Website</a>
          </div>
        </div>

      </div>
    </div>
  )
}