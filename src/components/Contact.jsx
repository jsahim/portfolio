import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { GrLinkedinOption, GrLinkedin } from "react-icons/gr";
import { FaHandPointer } from "react-icons/fa6";


const Contact = ({contactSection, topSection, scrollToTargetDiv}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
            Let's Connect!
          </h2>
          <p className="text-xl mb-4 hidden lg:block">Send me an email or connect on LinkedIn to discuss potential opportunities.</p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <a className="mr-4 mb-4 lg:mb-0 font-lg flex px-3 w-75 py-2 h-fit rounded-sm group justify-between items-center text-xl font-semibold bg-gray-600 text-white transition-all duration-200 hover:bg-gray-500" href="https://snackshack-demo.vercel.app/" target="_blank">
              SEND ME AN EMAIL 
              <TbMailFilled className="block group-hover:hidden w-6 h-6 ml-3 transition-all duration-200" />
              <TbMailOpenedFilled className="hidden group-hover:block w-6 h-6 ml-3 transition-all duration-200" />
            </a>
            <a className="font-lg flex px-3 w-75 py-2 h-fit rounded-sm group justify-between items-center text-xl font-semibold bg-gray-600 text-white transition-all duration-200 hover:bg-gray-500" href="https://snackshack-demo.vercel.app/" target="_blank">
              CONNECT ON LINKEDIN 
              <GrLinkedinOption className="block group-hover:hidden w-6 h-6 ml-3 transition-all duration-200" />
              <GrLinkedin className="hidden group-hover:block w-6 h-6 ml-3 transition-all duration-200" />
            </a>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer z-5 w-12 h-12 group rounded-full bg-[#f22b40] transition-all duration-300 flex justify-center items-center text-white font-bold" 
            onClick={()=> scrollToTargetDiv(topSection)}>
                <FaHandPointer className='group-hover:stroke-3 group-hover:w-6 group-hover:h-6 w-8 h-8 stroke-2 transition-all duration-300'/> 
          </button>
        </div>

      </div>

    </footer>
  )
}

export default Contact;