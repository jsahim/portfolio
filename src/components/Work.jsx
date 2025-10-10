import SnackShack from './WorkItems/SnackShack';
import { useEffect, useRef, useState } from 'react';

const Work = ({workSection}) => {
  const [isVisible, setIsVisible] = useState(false);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);

  return (
    <section ref={workSection} className="snap-start scroll-mt-0 sm:scroll-mt-10 py-20 px-8 sm:px-10">

      <div className="max-w-6xl mx-auto">

        <h2 
          ref={h2Ref}
          className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left transition-opacity duration-1000 ease-out" 
          style={{
            fontFamily: 'Shrikhand, cursive',
            opacity: isVisible ? 1 : 0
          }}
        >
          Featured Work
        </h2>

        <p className="text-xl text-black space-y-4 leading-relaxed mb-10">
          Explore my featured case study, showcasing the full-lifecycle process from initial ideation and UX design to clean code implementation and deployment.
        </p>

        <div className="gap-8 flex flex-wrap">
          <SnackShack/>
        </div>
        
      </div>

    </section>
  )
}

export default Work;