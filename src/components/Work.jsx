import Retrofresh from './WorkItems/Retrofresh';

const Work = ({workSection}) => {
  return (
    <section ref={workSection} className="py-20 px-8 sm:px-10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive' }}>
          Featured Work
        </h2>

        <p className="text-xl text-black space-y-4 leading-relaxed mb-10">
          I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
        </p>

        <div className="gap-8 flex flex-wrap">
          <Retrofresh />
        </div>
        
      </div>

    </section>
  )
}

export default Work;