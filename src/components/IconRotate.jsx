export default function IconRotate() {
  
  return (
    <div className="absolute lg:static z-0 items-center justify-center hidden group lg:flex">
      <div className="relative w-85 h-85 lg:w-100 lg:h-100">
        <div className="absolute flex justify-center items-center w-full h-full p-10">
          <img 
            src="/jeff-icon-r.webp"
            alt="Jeff Sahim Logo"
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
            <text className="text-[12px] font-bold fill-gray-300 tracking-[1.66px]" style={{ fontFamily: 'Jost, sans-serif'}}>
              <textPath href="#circlePath" startOffset="0%">
                UX/UI DESIGN ● FRONTEND ENGINEERING ● PRODUCT MANAGEMENT ●
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}