import Image from 'next/image'

export default function About() {
  

  return (
    <div className="w-[85%] pb-16"> 
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">About</h1>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
        <Image className="w-[55vw] h-[55vw] md:w-[25vw] md:h-[25vw] mb-10 mb:mr-0 mr-0 md:mr-10 rounded-full border-2 border-[#e98522] shadow-md" height={500} width={500} src="/images/headshot.png" alt="Headshot" />
        <p className="text-white text-xl">I have dedicated over <strong>12 years</strong> to providing <strong>exceptional customer-centric project management</strong> in the technology and marketing fields. I possess a strong work ethic paired with excellent analytical and organizational skills.<br/><br/> As a natural progression for my career in tech, I enrolled in the <strong>Turing School of Software & Design</strong> and completed their immersive <strong>frontend software engineering</strong> program. This engineering program specialized in <strong>UX concepts</strong> as well as coding languages such as <strong>HTML, CSS, JavaScript and React</strong> framework. <br/><br/>Shortly after receiving my Accredited Frontend Software Engineering Certificate, I accepted a position of UI/UX Developer working in the hospitality tech industry. For the past 2 years, I collaborated with <strong>cross-functional teams</strong> to design, develop and implement new product features in an <strong>Agile environment</strong>. <br/><br/>I am now seeking a new position which leverages my previous work experience, education and <strong>passion for UX development</strong> to create accessible, <strong>user-centered software</strong>.</p>
      </div>
    </div>
  )
}