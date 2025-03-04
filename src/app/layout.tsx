import Navigation from "./_components/Navigation"
import { Suspense } from "react";
import "./globals.css"


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <head>
        <title>Jeff Sahim - Developer & Designer</title>
        <link rel="icon" type="image/x-icon" href="/images/mini-logo.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
        <body>
          <Suspense>
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
