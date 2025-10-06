export default function IconRotate() {

  const text = "DESIGNER • ENGINEER • PROBLEM SOLVER •";
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-50 h-50">
        <div className="absolute inset-0 w-full h-full p-10">
          <img 
            src="/jeff-icon-r.png"
            alt="Logo"
          />
        </div>
        
        {/* Rotating Text Container */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              />
            </defs>
            <text className="text-[22px] font-bold fill-white tracking-wider" style={{ fontFamily: 'Jost, sans-serif'}}>
              <textPath href="#circlePath" startOffset="0%">
                {text}
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
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}