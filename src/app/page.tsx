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
          setEnd(true)
        }, 400);
      
        setTimeout(() => {
          setOrange(true)
        }, 1500);
    }

  }, []);


  let position
  if(site === "UX" ){
    position = "UX/UI Developer"
  }else if(site === "PROD"){
    position = "Product Developer"
  } else {
    position = "Frontend Developer"
  }

  return (
      <div className="w-[85%] h-full text-center"> 
        <h1 className="font-fugaz text-[#304962] my-3">
          { introReady ? <><span className={`relative z-[-1] text-[5vw] ${animation && "animate-refine-slidein"}`}>Hi there, I&apos;m</span><br/></> : null }
          { nameReady ? <><span className={`relative z-[-1] leading-relaxed ${animation && "animate-refine-slidein"} ${orangeReady ? "text-[#e98522] duration-700 text-[15vw]": "text-[9vw]"}`}>Jeff Sahim</span><br/></> : null }
          { endReady ? <span className={`relative z-[-1] text-[5vw] ${animation && "animate-refine-slidein"}`}>{position}</span> : null }
        </h1>
      </div>
  )
}
