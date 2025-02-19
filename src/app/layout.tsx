"use client"

import { Montserrat } from 'next/font/google'
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation'
import Navigation from "./_components/Navigation"
import "./globals.css"


const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const [siteType, setType] = useState<string>("");
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const search = searchParams.get('type')
    
    if(!search || search === "dev" ){
      setType("developer")
    }else if(search === "prod"){
      setType(search || "product")
    } else if(search === "ux") {
      setType("ux")
    }
    addChild()
  });

  
  const addChild = () => {
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        (child as React.ReactElement<any>).props.template.props.type = siteType
      }
    })
  }

  return (
    <html lang="en">
      <head>
        <title>Jeff Sahim - Developer</title>
        <link rel="icon" type="image/x-icon" href="/images/mini-logo.png"></link>
      </head>
        <body>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation type={siteType} />
          </Suspense>
          <main className='pt-28 flex flex-col items-center h-[100vh]'>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
          </main>
        </body>
      </html>
  )
}
