import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { GrLinkedinOption, GrLinkedin } from "react-icons/gr";


const Contact = ({contactSection}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">
      <div className="max-w-6xl mx-auto text-center flex flex-col md:flex-row">

        <div className="w-full sm:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
            Let's Connect...
          </h2>
          <div className="flex flex-col justify-center space-y-6 text-lg tracking-widest">
            <a href="mailto:jeffreysahim@gmail.com" className="group max-w-[350px] flex justify-between items-center font-semibold px-4 py-2 bg-gray-600 hover:bg-[#f22b40] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
              SEND ME AN EMAIL <TbMailFilled className="block group-hover:hidden w-6 h-6" /><TbMailOpenedFilled className="hidden group-hover:block w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jeff-sahim/" className="group max-w-[350px] flex justify-between items-center font-semibold px-4 py-2 bg-gray-600 hover:bg-[#f22b40] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
              ADD ME ON LINKEDIN <GrLinkedinOption className="block group-hover:hidden w-6 h-6" /><GrLinkedin className="hidden group-hover:block w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="text-xl text-white space-y-4 leading-relaxed mb-10 text-left pl-20" style={{ fontFamily: 'Jost, sans-serif' }}>        
          <p className="hidden md:block">
            I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
          </p>
        </div>
      
      </div>
    </footer>
  )
}

export default Contact;