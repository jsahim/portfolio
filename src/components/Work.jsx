import { ExternalLink } from 'lucide-react';

const Work = ({workSection}) => {
  return (
    <section ref={workSection} className="py-20 px-8 sm:px-10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left" style={{fontFamily: 'Shrikhand, cursive' }}>
          Featured Work
        </h2>

        <p className="text-xl text-black space-y-4 leading-relaxed mb-10" style={{ fontFamily: 'Jost, sans-serif' }}>
          I have dedicated over 12 years to providing exceptional customer-centric project management in the technology and marketing fields. 
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "RETROFRESH",
              description: "Concession Ordering App",
              image: "bg-gradient-to-br from-purple-400 to-blue-500",
              tech: "React, Vite, Tailwind CSS"
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`h-64 ${project.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-6" style={{ fontFamily: 'Jost, sans-serif' }}>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="text-sm text-[#f22b40] font-medium">{project.tech}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

    </section>
  )
}

export default Work;