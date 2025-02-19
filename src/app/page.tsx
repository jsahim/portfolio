'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/compat/router'
import { useSearchParams } from 'next/navigation'


export default function Home()  {
  const router = useRouter() 
  const searchParams = useSearchParams()
  const [site, setSite] = useState("")
  const [introReady, setIntro] = useState<boolean>(false);
  const [nameReady, setName] = useState<boolean>(false);
  const [endReady, setEnd] = useState<boolean>(false);
  const [orangeReady, setOrange] = useState<boolean>(false);

  useEffect(() => {
    if (router && !router.isReady) {
      return
    }

    const search = searchParams.get('type') || ""
    setSite(search)

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

  }, []);


  let position
  if(site === "ux" ){
    position = "UX Developer"
  }else if(site === "prod"){
    position = "Product Developer"
  } else {
    position = "Software Developer"
  }

  return (
      <div className="w-[85%] h-full text-center"> 
        <h1 className="font-[Fugaz] text-[#304962] mt-5">
          { introReady ? <><span className="relative z-[-1] animate-refine-slidein text-[5vw]">Hi there, I&apos;m</span><br/></> : null }
          { nameReady ? <><span className={`relative z-[-1] animate-refine-slidein text-[15vw] leading-relaxed ${orangeReady ? "text-[#e98522] duration-700": ""}`}>Jeff Sahim</span><br/></> : null }
          { endReady ? <span className="relative z-[-1] animate-refine-slidein text-[5vw]">{position}</span> : null }
        </h1>
      </div>
  )
}
