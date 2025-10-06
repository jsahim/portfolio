import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { GrLinkedinOption, GrLinkedin } from "react-icons/gr";


const Contact = ({contactSection}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
          Let's Connect!
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <p className="text-xl mb-4">Let's connect to discuss potential projects or opportunities; find me on LinkedIn or send an email.</p>
          <a className="h-auto flex p-2 border-2 max-w-sm rounded-sm group justify-between items-start text-xl font-semibold text-white hover:border-[#f22b40] transition-all duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">SEND ME AN EMAIL <TbMailFilled className="block group-hover:hidden w-6 h-6 ml-3 transition-all duration-200" /><TbMailOpenedFilled className="hidden group-hover:block w-6 h-6 ml-3 transition-all duration-200" /></a>
          <a className="h-auto flex p-2 border-2 max-w-sm rounded-sm group justify-between items-start text-xl font-semibold text-white hover:border-[#f22b40] transition-all duration-200" href="https://snackshack-demo.vercel.app/" target="_blank">CONNECT ON LINKEDIN <GrLinkedinOption className="block group-hover:hidden w-6 h-6 ml-3 transition-all duration-200" /><GrLinkedin className="hidden group-hover:block w-6 h-6 ml-3 transition-all duration-200" /></a>
        </div>
            
      </div>

    </footer>
  )
}

export default Contact;