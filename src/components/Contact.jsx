import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import { FaHandPointer } from "react-icons/fa6";


const Contact = ({contactSection, topSection, scrollToTargetDiv}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
            Let's Connect!
          </h2>
          <p className="text-xl mb-4 hidden lg:block">Send me an email or connect on LinkedIn to discuss potential opportunities.</p>
          <div className="flex flex-col justify-center w-fit items-start">
            <a className="my-4 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-white transition-all duration-200 hover:bg-gray-500" href="https://snackshack-demo.vercel.app/" target="_blank">
              <TbMailFilled className="block group-hover:hidden w-6 h-6 transition-all duration-200" />
              <TbMailOpenedFilled className="hidden group-hover:block w-6 h-6 transition-all duration-200" />
              <span className="ml-2">SEND ME AN EMAIL</span> 
            </a>
            <a className="font-lg flex w-fit group justify-start items-center text-xl font-semibold text-white transition-all duration-200 hover:bg-gray-500" href="https://snackshack-demo.vercel.app/" target="_blank">
              <AiFillLinkedin className="block group-hover:hidden w-6 h-6 transition-all duration-200" />
              <AiOutlineLinkedin className="hidden group-hover:block w-6 h-6 transition-all duration-200" />
              <span className="ml-2">CONNECT ON LINKEDIN</span> 
            </a>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer z-5 w-50 h-50 group rounded-full bg-[#f22b40] transition-all duration-300 flex justify-center items-center text-white font-bold" 
            onClick={()=> scrollToTargetDiv(topSection)}>
              <FaHandPointer className='move-icon stroke-2 w-30 h-30 transition-all duration-300'/> 
          </button>
        </div>

      </div>
      <style jsx>{`
        @keyframes moveIcon {
          0%, 100% {
            margin-bottom: 0px
          }
          50% {
            margin-bottom: 10px;
          }
        }
        
        .move-icon {
          animation: moveIcon 1s ease-in-out infinite;
        }
      `}</style>

    </footer>
  )
}

export default Contact;