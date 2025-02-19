"use client"

import { Montserrat } from 'next/font/google'
import React, { useState, useEffect } from "react";
import Navigation from "./_components/Navigation"
import "./globals.css"


const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const [siteType, setType] = useState<string>("");
  
  useEffect(() => {
    // if(!search || search === "dev" ){
    //   setType("developer")
    // }else if(search === "prod"){
    //   setType(search || "product")
    // } else if(search === "ux") {
    //   setType("ux")
    // }
    // addChild()
  }, []);

  
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
          <Navigation />
          <main className='pt-28 flex flex-col items-center h-[100vh]'>
            {children}
          </main>
        </body>
      </html>
  )
}
