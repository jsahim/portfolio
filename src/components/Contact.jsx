import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import { FaHandPointer } from "react-icons/fa6";


const Contact = ({contactSection, topSection, scrollToTargetDiv}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16 min-h-[60vh]">

      <div className="max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
            Let's Connect!
          </h2>
          <div className="flex justify-start items-center">
            <p className="w-70 text-xl hidden lg:block">Send me an email or connect on LinkedIn to discuss potential opportunities.</p>
            <div className="w-[2px] h-15 bg-white mx-8"></div>
            <div className="flex flex-col justify-center w-fit items-start">
              <a className="hover:border-[#f22b40] pb-1 border-transparent border-b-2 mb-4 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-gray-300 hover:text-white transition-all duration-300" href="https://snackshack-demo.vercel.app/" target="_blank">
                <TbMailFilled className="w-6 h-6" />
                <span className="ml-2">SEND ME AN EMAIL</span> 
              </a>
              <a className="hover:border-[#f22b40] pb-1 border-transparent border-b-2 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-gray-300 hover:text-white transition-all duration-300" href="https://snackshack-demo.vercel.app/" target="_blank">
                <AiFillLinkedin className="w-6 h-6" />
                <span className="ml-2">CONNECT ON LINKEDIN</span> 
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer z-5 w-40 h-40 group rounded-full bg-[#f22b40] transition-all duration-300 flex justify-center items-center text-white font-bold" 
            onClick={()=> scrollToTargetDiv(topSection)}>
              <FaHandPointer className='move-icon stroke-2 w-20 h-20 transition-all duration-300'/> 
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