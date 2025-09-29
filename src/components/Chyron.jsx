export default function Chyron() {
  const text = "Breaking News • Latest Updates • Important Information • ";
  
  return (
    <div className="w-full text-black py-3 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap decoration-1 overline" style={{ fontFamily: 'Jost, sans-serif' }}>
        <span className="text-2xl font-bold px-4">{text}</span>
        <span className="text-2xl font-bold px-4">{text}</span>
        <span className="text-2xl font-bold px-4">{text}</span>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </div>
  );
}