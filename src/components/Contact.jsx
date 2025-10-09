import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import { FaHandPointer } from "react-icons/fa6";


const Contact = ({contactSection, topSection, scrollToTargetDiv}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto my-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
          Let's Connect!
        </h2>
        <p className="text-gray-300 pb-5 leading-relaxed text-xl">Send me and email or connect with me on LinkedIn to discuss possible opportunties</p>
        <div className="flex justify-between"> 
          <div className="flex items-center gap-10">
            <a className="hover:border-[#f22b40] pb-1 border-transparent border-b-2 font-lg flex w-fit group justify-start items-start text-xl font-semibold text-white transition-all duration-300" href="mailto:jeffreysahim@gmail.com">
              <TbMailFilled className="w-6 h-6" />
              <span className="ml-2 tracking-wider">EMAIL</span> 
            </a>
            <a className="hover:border-[#f22b40] pb-1 border-transparent border-b-2 font-lg flex w-fit group justify-start items-start text-xl font-semibold text-white transition-all duration-300" href="https://www.linkedin.com/in/jeff-sahim/" target="_blank">
              <AiFillLinkedin className="w-6 h-6" />
              <span className="ml-2 tracking-wider">LINKEDIN</span> 
            </a>   
          </div>
          <div className="flex justify-center relative">
            <button className="relative cursor-pointer group z-5 w-25 h-25 mt-15 lg:mt-0 flex justify-center items-center text-white font-bold" 
              onClick={()=> scrollToTargetDiv(topSection)}>
                <div className="absolute rounded-full h-0 w-0 group-hover:h-25 group-hover:w-25 bg-[#f22b40] transition-all duration-300"></div>
                <FaHandPointer className='absolute move-icon stroke-2 w-15 h-15 transition-all duration-300'/> 
            </button>
          </div>

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