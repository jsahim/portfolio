import { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('work');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const workSection = useRef(null)
  const aboutSection = useRef(null)
  const topSection = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when at top of page
      if (currentScrollY < 10) {
        setIsNavVisible(true);
      }
      // Hide nav when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTargetDiv = (targetDivRef) => {
    targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={topSection} className="min-h-screen">
      
      {/* Navigation / Header */}
      <Navigation isNavVisible={isNavVisible} currentSection={currentSection} setCurrentSection={setCurrentSection} scrollToTargetDiv={scrollToTargetDiv} workSection={workSection} aboutSection={aboutSection} contactSection={contactSection} topSection={topSection} />
    
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

        {/* Hero Section */}
        <Hero />

        {/* Featured Work Section */}
        <Work workSection={workSection} />

        {/* About Section */}
        <About aboutSection={aboutSection} />

        {/* Contact Section / Footer */}
        <Contact contactSection={contactSection} />
      
      </div>

    </div>
  );
};

export default Portfolio;