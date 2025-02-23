'use client'

import { useEffect, useState } from "react";
import useGetAllSearchParams from "./_components/GetParams";

export default function Home() {
  const allSearchParams = useGetAllSearchParams();
  const [site, setSite] = useState<string>("")
  const [origin, setOrigin] = useState<string>("")
  const [introReady, setIntro] = useState<boolean>(false);
  const [nameReady, setName] = useState<boolean>(false);
  const [endReady, setEnd] = useState<boolean>(false);
  const [orangeReady, setOrange] = useState<boolean>(false);

  useEffect(() => {

    const siteType = allSearchParams.type
    const pageOrigin = allSearchParams.origin
    
    pageOrigin ? setOrigin(pageOrigin) : null

    if(siteType === "u"){
      setSite("UX")
    } else if(siteType === "p"){
      setSite("PROD")
    } else {
      setSite("DEV")
    }

    if(origin){
      setIntro(true)
      setName(true)
      setEnd(true)
      setOrange(true)
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
    position = "Software Developer"
  }

  return (
      <div className="w-[85%] h-full text-center"> 
        <h1 className="font-fugaz text-[#304962] my-3">
          { introReady || origin ? <><span className={`relative z-[-1] ${ !origin ? "animate-refine-slidein" : ""} text-[5vw]`}>Hi there, I&apos;m</span><br/></> : null }
          { nameReady || origin ? <><span className={`relative z-[-1] ${ !origin ? "animate-refine-slidein" : ""} leading-relaxed ${orangeReady ? "text-[#e98522] duration-700 text-[15vw]": "text-[9vw]"}`}>Jeff Sahim</span><br/></> : null }
          { endReady || origin ? <span className={`relative z-[-1] ${ !origin ? "animate-refine-slidein" : ""} text-[5vw]`}>{position}</span> : null }
        </h1>
      </div>
  )
}
