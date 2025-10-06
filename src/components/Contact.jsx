import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { GrLinkedinOption, GrLinkedin } from "react-icons/gr";


const Contact = ({contactSection}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto text-center flex flex-col items-center w-full">

        <div className="w-1/2 text-xl text-white space-y-4 leading-relaxed text-left flex flex-col items-center justify-center">        
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
            Let's Connect!
          </h2>
          <p>
            I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
          </p>
          <div className="gap-4 flex">
            <a className="flex p-5 w-1/2 items-center text-xl font-semibold text-white hover:text-[#f22b40] transition-colors duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">SEND ME AN<br/>EMAIL <TbMailFilled className="ml-3" /></a>
            <a className="flex p-5 w-1/2 items-center text-xl font-semibold text-white hover:text-[#f22b40] transition-colors duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">CONNECT ON<br/>LINKEDIN <GrLinkedin className="ml-3" /></a>
          </div>

        </div>
            
      </div>

    </footer>
  )
}

export default Contact;