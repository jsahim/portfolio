'use client'

import { useEffect, useState } from "react";
import useGetAllSearchParams from "./_components/GetParams";

export default function Home() {
  const allSearchParams = useGetAllSearchParams();
  const [site, setSite] = useState<string>("")
  const [introReady, setIntro] = useState<boolean>(false);
  const [nameReady, setName] = useState<boolean>(false);
  const [endReady, setEnd] = useState<boolean>(false);
  const [orangeReady, setOrange] = useState<boolean>(false);
  const [animation, setAnim] = useState<boolean>(true);

  useEffect(() => {

    const siteType = allSearchParams.type
    const origType = allSearchParams.origin

    if(siteType === "u"){
      setSite("UX")
    } else if(siteType === "p"){
      setSite("PROD")
    } else {
      setSite("DEV")
    }

    if(origType){
        setIntro(true)
        setEnd(true)
        setName(true)
        setOrange(true)
        setAnim(false)
      } else {
        setTimeout(() => {
          setIntro(true)
        }, 100);
        
        setTimeout(() => {
          setName(true)
        }, 200);
                
        setTimeout(() => {
          setOrange(true)
        }, 1500);

        setTimeout(() => {
          setEnd(true)
        }, 2500);
    }

  }, []);


  let position
  if(site === "UX" ){
    position = "UX Developer"
  }else if(site === "PROD"){
    position = "Product Developer"
  } else {
    position = "Dev ◦ UX ◦ Product"
  }

  return (
      <div className="w-[85%] h-full text-center"> 
          <h1 className="font-fugaz text-white my-3">
          { introReady ? <><span className={`relative z-[-1] md:text-[5vw] text-[8vw] ${animation && "animate-refine-slidein"}`}>Hi there, I&apos;m</span><br/></> : null }
          { nameReady ? <><span className={`relative z-[-1] leading-relaxed ${animation && "animate-refine-slidein"} ${orangeReady ? "text-[#e98522] duration-700 text-[15vw]": "text-[9vw]"}`}>Jeff Sahim</span><br/></> : null }
          { endReady && <span className={`relative z-[-1] md:text-[5vw] text-[8vw] duration-150 ${animation && "animate-fade-in"}`}>{position}</span>}
        </h1>
      </div>
  )
}
