"use client"

import { Montserrat } from 'next/font/google'
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Navigation from "./_components/Navigation"
import "./globals.css"


const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const [siteType, setType] = useState<string>("");
  const searchParams = useSearchParams()
  const search = searchParams.get('type')

  
  useEffect(() => {
    if(!search || search === "dev" ){
      setType("developer")
    }else if(search === "prod"){
      setType(search || "product")
    } else if(search === "ux") {
      setType("ux")
    }
  }, []);

  console.log(siteType)

  const modifiedChildren = React.Children.map(children, (child) => 
    React.isValidElement(child) ? React.cloneElement(child, { siteType } as any) : child
  )

  return (
    <html lang="en">
      <head>
        <title>Jeff Sahim - Developer</title>
        <link rel="icon" type="image/x-icon" href="/images/mini-logo.png"></link>
      </head>
        <body>
          <Navigation/>
          <main className='pt-28 flex flex-col items-center h-[100vh]'>
            {modifiedChildren}
          </main>
        </body>
      </html>
  )
}
