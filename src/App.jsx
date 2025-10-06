import { useState, useRef } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Marquee from 'react-fast-marquee';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('landing');
  const workSection = useRef(null)
  const aboutSection = useRef(null)
  const topSection = useRef(null)
  const contactSection = useRef(null)

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={topSection} className="min-h-screen" style={{ fontFamily: 'Jost, sans-serif' }}>
      
      {/* Navigation / Header */}
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} scrollToTargetDiv={scrollToTargetDiv} workSection={workSection} aboutSection={aboutSection} contactSection={contactSection} topSection={topSection} />
    
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

        {/* Hero Section */}
        <Hero />

        {/* Featured Work Section */}
        <Work workSection={workSection} />

        <Marquee speed={100} pauseOnHover={true} className="text-black tracking-wider py-2 px-4 text-2xl font-bold border-y-4 uppercase" style={{ fontFamily: 'Jost, sans-serif'}}>
          <span>
            <span className='text-[#f22b40]'>●</span> Mobile Guest Directory&nbsp;
            <span className='text-[#f22b40]'>●</span> Digital Signage&nbsp;
            <span className='text-[#f22b40]'>●</span> Interactive TV&nbsp;
            <span className='text-[#f22b40]'>●</span> Digital Menu Boards&nbsp;
            <span className='text-[#f22b40]'>●</span> Interactive Kiosk&nbsp;
            <span className='text-[#f22b40]'>●</span> Wayfinding&nbsp;
          </span>
        </Marquee>

        {/* About Section */}
        <About aboutSection={aboutSection} />

        {/* Contact Section / Footer */}
        <Contact contactSection={contactSection} />
      
      </div>

    </div>
  );
};

export default Portfolio;