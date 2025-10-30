import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router";

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

        <h2 ref={h2Ref} className="text-4xl sm:text-5xl font-bold text-[#f22b40] mb-6 text-left transition-opacity duration-1000 ease-out" style={{ fontFamily: 'Shrikhand, cursive', opacity: isVisible ? 1 : 0 }}>
          Featured Work
        </h2>

        <p className="text-xl text-black space-y-4 leading-relaxed mb-10">
          Explore my featured case studies, showcasing the full-lifecycle process from initial ideation and UX design to clean code implementation and deployment.
        </p>

        <div className='flex sm:flex-row flex-col gap-8'>

          <Link className='pointer-events-auto w-full md:w-1/2 h-[500px] text-black rounded-sm group px-5 md:px-7 pb-7 pt-0' to='/snack-shack'>
            <h3 className="relative text-center translate-y-[16px] w-full font-bold text-xl bg-transparent px-2 text-[#f22b40]">
              <span className='bg-gray-50 px-2'>THE SNACK SHACK</span>
            </h3>
            <div className="border-4 h-full animate-on-hover rounded-2xl transition-colors duration-300">
              <p className='font-medium text-xl text-gray-700 text-center px-5 pt-5 pb-1'>CONCESSION ORDERING APP</p>
              <div className='relative h-[400px] w-full flex items-center justify-center group overflow-hidden mb-10 md:mb-0'>
                <img 
                  className='absolute w-[170px] pointer-events-none transition-all duration-500 ease-out z-10' 
                  src="/snackshack/shack-phone-1.webp" 
                  alt="Snack Shack Mobile 1" 
                />
                <img 
                  className='absolute pointer-events-none w-[150px] grayscale group-hover:grayscale-0 brightness-70 group-hover:brightness-100 transition-all duration-500 -translate-x-[70px] group-hover:-translate-x-[170px]' 
                  src="/snackshack/shack-phone-2.webp" 
                  alt="Snack Shack Mobile 2" 
                />
                <img 
                  className='absolute w-[150px] pointer-events-none grayscale group-hover:grayscale-0 brightness-70 group-hover:brightness-100 transition-all duration-500 translate-x-[70px] group-hover:translate-x-[170px]' 
                  src="/snackshack/shack-phone-3.webp" 
                  alt="Snack Shack Mobile 3" 
                />
              </div>

            </div>  
          </Link>

          <Link className='pointer-events-auto w-full md:w-1/2 h-[500px] text-black rounded-sm group px-5 md:px-7 pb-7 pt-0' to='/mobile-directory'>
            <h3 className="relative text-center translate-y-[16px] w-full font-bold text-xl bg-transparent px-2 text-[#f22b40]">
              <span className='bg-gray-50 px-2'>AZURO HOTELS</span>
            </h3>
            <div className="border-4 h-full animate-on-hover rounded-2xl transition-colors duration-300">
              <p className='font-medium text-xl text-gray-700 text-center px-5 pt-5 pb-1'>MOBILE GUEST DIRECTORY</p>
              <div className='relative h-[400px] w-full flex items-center justify-center group overflow-hidden mb-10 md:mb-0'>
                <img 
                  className='absolute w-[170px] pointer-events-none transition-all duration-500 ease-out z-10' 
                  src="/mobile_directory/azuro-home.webp" 
                  alt="Azuro Home" 
                />
                <img 
                  className='absolute pointer-events-none w-[150px] grayscale group-hover:grayscale-0 brightness-70 group-hover:brightness-100 transition-all duration-500 -translate-x-[70px] group-hover:-translate-x-[170px]' 
                  src="/mobile_directory/azuro-dining.webp" 
                  alt="Azuro Dining" 
                />
                <img 
                  className='absolute w-[150px] pointer-events-none grayscale group-hover:grayscale-0 brightness-70 group-hover:brightness-100 transition-all duration-500 translate-x-[70px] group-hover:translate-x-[170px]' 
                  src="/mobile_directory/azuro-services.webp" 
                  alt="Azuro Services" 
                />
              </div>

            </div>  
          </Link>


        </div>
        
      </div>

    </section>
  )
}

export default Work;