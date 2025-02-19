"use client"

import { Montserrat } from 'next/font/google'
import Navigation from "./_components/Navigation"
import { Suspense } from "react";
import "./globals.css"


const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <head>
        <title>Jeff Sahim - Developer</title>
        <link rel="icon" type="image/x-icon" href="/images/mini-logo.png"></link>
      </head>
        <body>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
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
