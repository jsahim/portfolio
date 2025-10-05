import { TbMailFilled, TbMailOpenedFilled } from "react-icons/tb";
import { GrLinkedinOption, GrLinkedin } from "react-icons/gr";


const Contact = ({contactSection}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">

      <div className="max-w-6xl mx-auto text-center flex flex-col">
        <div className="w-full">


          <div className="w-full">

            <div className="text-xl text-white space-y-4 leading-relaxed text-left">        
              <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
                Let's Connect!
              </h2>
              <div className="w-full grid grid-cols-4">
                <div className="col-span-3 flex flex-col items-end space-y-6 text-lg tracking-widest">
                  <p>
                    I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
                  </p>
                  <div className="flex justify-start items-center w-full gap-4">
                    <a href="mailto:jeffreysahim@gmail.com" className="group w-[300px] flex justify-between items-center px-4 py-3 bg-gray-600 hover:bg-[#f22b40] transition-colors rounded-md">
                      <span className="font-medium">SEND ME AN <strong>EMAIL</strong></span><TbMailFilled className="block group-hover:hidden w-6 h-6" /><TbMailOpenedFilled className="hidden group-hover:block w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/jeff-sahim/" className="group w-[300px] flex justify-between items-center font-medium px-4 py-3 bg-gray-600 hover:bg-[#f22b40] transition-colors rounded-md">
                      <span className="font-medium">ADD ME ON <strong>LINKEDIN</strong></span><GrLinkedinOption className="block group-hover:hidden w-6 h-6" /><GrLinkedin className="hidden group-hover:block w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Contact;