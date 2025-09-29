import { GrLinkedinOption, GrMail } from "react-icons/gr";
const Contact = ({contactSection}) => {
  return (
    <footer ref={contactSection} className="bg-black text-white py-20 px-8 sm:px-10 pb-35 sm:pb-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive'}}>
          Let's Connect...
        </h2>
        <p className="text-lg text-white space-y-4 leading-relaxed mb-10 text-left" style={{ fontFamily: 'Jost, sans-serif' }}>
          I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
        </p>
        <div className="flex flex-col justify-center space-y-6">
          <a href="mailto:jeffreysahim@gmail.com" className="flex justify-between items-center p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
            SEND ME AN EMAIL <GrMail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/jeff-sahim/" className="flex justify-between items-center p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
            MESSAGE ME ON LINKEDIN <GrLinkedinOption className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Contact;