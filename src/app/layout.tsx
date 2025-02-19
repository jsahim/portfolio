"use client"

import { Montserrat } from 'next/font/google'
import React, { useState, useEffect } from "react";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import Navigation from "./_components/Navigation"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const searchParams = useSearchParams()
  const [searchState, getState] = useState("")
  const search = searchParams.get('type') || ""
  
  
  useEffect(() => {
    getState(search || "")
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          (child as React.ReactElement<any>).props.template.props.type = search
        }
      })
    }, []);

  return (
    <html lang="en">
      <head>
        <title>Jeff Sahim - Developer</title>
        <link rel="icon" type="image/x-icon" href="/images/mini-logo.png"></link>
      </head>
        <body>
          <Navigation type={searchState}/>
          
          <main className='pt-28 flex flex-col items-center h-[100vh]'>
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </main>
        </body>
      </html>
  )
}
