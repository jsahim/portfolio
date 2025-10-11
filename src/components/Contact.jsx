import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import { FaHandPointer } from "react-icons/fa6";
import {useRef, useEffect, useState} from 'react'


const Contact = ({contactSection, topSection, scrollToTargetDiv}) => {

  const [isVisible, setIsVisible] = useState(false);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);

  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">

          <div className="col-span-2">
            <h2 
              ref={h2Ref}
              className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left transition-opacity duration-1000 ease-out" 
              style={{
                fontFamily: 'Shrikhand, cursive',
                opacity: isVisible ? 1 : 0
              }}
            >
              Let's Connect!
            </h2>
            <p className="text-gray-300 pb-5 leading-relaxed text-xl">Send me and email or connect with me on LinkedIn to discuss possible opportunties.</p>
            <div className="flex items-center gap-10 tracking-wider">
              <a className="hover:border-[#f22b40] py-1 border-transparent border-y-2 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-white transition-all duration-300" href="mailto:jeffreysahim@gmail.com">
                <TbMailFilled className="w-6 h-6" />
                <span className="ml-2 font-bold">EMAIL</span> 
              </a>
              <a className="hover:border-[#f22b40] py-1 border-transparent border-y-2 font-lg flex w-fit group justify-start items-center text-xl font-semibold text-white transition-all duration-300" href="https://www.linkedin.com/in/jeff-sahim/" target="_blank">
                <AiFillLinkedin className="w-6 h-6" />
                <span className="ml-2 font-bold">LINKEDIN</span> 
              </a>   
            </div>
          </div>

          <div className="w-[inherit] flex justify-center lg:justify-end">
            <button className="relative cursor-pointer group z-5 w-25 h-25 mt-15 lg:mt-0 flex flex-col lg:flex-row justify-center items-center text-white font-bold" 
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