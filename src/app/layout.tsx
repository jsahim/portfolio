import Navigation from "./_components/Navigation"
import { Suspense } from "react";
import "./globals.css"


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <head>
        <title>Jeff Sahim - Product Engineer</title>
        <link rel="icon" type="image/x-icon" href="/images/mini-logo.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
        <body>
          <div className="fixed -z-10 h-[100%] w-[100%] bg-[linear-gradient(_var(--tw-gradient-stops))] from-[#304962] to-[#2d649a]"></div>
          <Suspense>
            <Navigation />
          </Suspense>
          <main className='flex pt-28 flex-col items-center h-[100vh]'>
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              {children}
            </Suspense>
          </main>
        </body>
      </html>
  )
}
