export default function IconRotate() {
  
  return (
    <div className="absolute lg:static z-0 items-center justify-center hidden lg:flex">
      <div className="relative w-85 h-85 lg:w-100 lg:h-100">
        <div className="absolute inset-0 w-full h-full p-10">
          <img 
            src="/jeff-icon-r.png"
            alt="Jeff Sahim Logo"
            className="hidden lg:block"
          />
        </div>
        
        {/* Rotating Text Container */}
        <div className="absolute inset-0 animate-spin-slow rounded-full">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              />
            </defs>
            <text className="text-[13.6px] font-bold fill-gray-300 tracking-widest" style={{ fontFamily: 'Jost, sans-serif'}}>
              <textPath href="#circlePath" startOffset="0%">
                PRODUCT DESIGNER ● FRONTEND ENGINEER ● PROBLEM SOLVER ●
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 50s linear infinite;
        }
      `}</style>
    </div>
  );
}