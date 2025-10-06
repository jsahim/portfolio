import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { GrLinkedinOption, GrLinkedin } from "react-icons/gr";


const Contact = ({contactSection}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto flex justify-start flex-col">

        <div className="text-xl text-white grid grid-cols-1 lg:grid-cols-3 gap-10 leading-relaxed text-left">    
          <div className="col-span-2">            
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
              Let's Connect!
            </h2>
            <p>
              I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
            </p>
          </div>    
          <div className="grid grid-cols-1">
            <a className="flex p-2 border-2 h-fit rounded-sm group justify-between items-start text-xl font-semibold text-white hover:text-[#f22b40] transition-all duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">SEND ME AN EMAIL <TbMailFilled className="block group-hover:hidden w-6 h-6 ml-3 transition-all duration-200" /><TbMailOpenedFilled className="hidden group-hover:block w-6 h-6 ml-3 transition-all duration-200" /></a>
            <a className="flex p-2 border-2 h-fit rounded-sm group justify-between items-start text-xl font-semibold text-white hover:text-[#f22b40] transition-all duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">CONNECT ON LINKEDIN <GrLinkedinOption className="block group-hover:hidden w-6 h-6 ml-3 transition-all duration-200" /><GrLinkedin className="hidden group-hover:block w-6 h-6 ml-3 transition-all duration-200" /></a>
          </div>

        </div>
            
      </div>

    </footer>
  )
}

export default Contact;