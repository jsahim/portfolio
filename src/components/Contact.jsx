import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import { FaHandPointer } from "react-icons/fa6";


const Contact = ({contactSection, topSection, scrollToTargetDiv}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
            Let's Connect!
          </h2>
          <p className="text-xl mb-4 text-gray-300">Connect with me to discuss possible opportunities.</p>
          <div className="flex justify-start items-center">
            <div className="flex flex-col lg:flex-row justify-center w-fit items-start gap-2 lg:gap-10">

              <a className="hover:border-[#f22b40] pb-1 border-transparent border-b-2 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-white transition-all duration-300" href="mailto:jeffreysahim@gmail.com">
                <TbMailFilled className="w-6 h-6" />
                <span className="ml-2">SEND ME AN EMAIL</span> 
              </a>
              <a className="hover:border-[#f22b40] pb-1 border-transparent border-b-2 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-white transition-all duration-300" href="https://www.linkedin.com/in/jeff-sahim/" target="_blank">
                <AiFillLinkedin className="w-6 h-6" />
                <span className="ml-2">CONNECT ON LINKEDIN</span> 
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <button className="cursor-pointer z-5 w-20 h-20 lg:w-36 lg:h-36 mt-10 lg:mt-0 group rounded-full bg-[#f22b40] transition-all duration-300 flex justify-center items-center text-white font-bold" 
            onClick={()=> scrollToTargetDiv(topSection)}>
              <FaHandPointer className='move-icon stroke-2 w-8 h-8 lg:w-15 lg:h-15 transition-all duration-300'/> 
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