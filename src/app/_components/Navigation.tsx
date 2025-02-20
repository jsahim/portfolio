'use client'

import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import Link from 'next/link'
import Image from 'next/image'
import useGetAllSearchParams from './GetParams'


export default function Navigation() {
  const allSearchParams = useGetAllSearchParams();
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState("")
  const [back, setBack] = useState("")


    useEffect(() => {
  
      const sType = allSearchParams.type
  
      if(sType === "ux" ){
        setKey("10J6r5-bN6I6dx-xUCvtucJTw00JlQ_Xc")
        setBack("/?type=ux")
      }else if(sType === "prod"){
        setKey("1oYg8PjnUsrlICyb9WwI2OL36TxCX-yxM")
        setBack("/?type=prod")
      } else {
        setKey("1JPlJfU8D1ZaMBcKKfk_yxdlKA4SktTuW")
        setBack("")
      }
  
    }, []);


  return (
    <header className='fixed h-20 flex md:justify-between items-center w-[100vw] bg-[#304962] border-b-2 border-[#e5e7eb]'>

      <Link className='p-2 mx-6 h-full' href={`/${back}`}>
        <Image className='min-w-[200px]' width={200} height={60} src="/images/jeff-logo.png" alt="Jeff Logo" priority />
      </Link>

      <nav className="md:flex w-full items-center justify-center lg:justify-end">

        <div className='absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)} >
          {open ? <GrClose className='h-10 w-10 text-white'/> : <FiMenu className='h-10 w-10 text-white'/>}
        </div>
        
        <ul className={`md:*:px-3 *:py-3 md:w-[50%] w-full flex md:flex-row flex-col md:items-center items-stretch justify-around md:pb-0 pb-12 absolute md:static md:z-[auto] z-[-1] left-0 md:transition-none transition-all duration-300 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
        
          {/* <li className='text-center md:bg-transparent bg-[#304962]'>
            <Link className="w-full font-medium hover:text-[#e98522] text-white" href="/about">
              <span className="w-full flex justify-center items-center">ABOUT</span>
            </Link>
          </li>
           */}
          <li className='text-center md:bg-transparent bg-[#304962]'>
            <Link className="w-full font-medium hover:text-[#e98522] text-white" href="/skills" onClick={() => setOpen(!open)}>
              <span className="w-full flex justify-center items-center tracking-wide">SKILLS</span>
            </Link>
          </li>
          
          <li className='text-center md:bg-transparent bg-[#304962]'>
            <Link className="w-full font-medium hover:text-[#e98522] text-white" href="/projects" onClick={() => setOpen(!open)}>
              <span className="w-full flex justify-center items-center tracking-wide">PROJECTS</span>
            </Link>
          </li>
          
          <li className='text-center md:bg-transparent bg-[#304962]'>
            <Link className="w-full font-medium hover:text-[#e98522] text-white" href="/contact" onClick={() => setOpen(!open)}>
              <span className="w-full flex justify-center items-center tracking-wide">CONTACT</span>
            </Link>
          </li>

          <li className='text-center md:bg-transparent bg-[#304962]'>
            <a className="w-[400px] font-medium hover:text-[#e98522] text-white" target="_blank" href={`https://drive.google.com/file/d/${key}/view?usp=sharing`} onClick={() => setOpen(!open)}>
              <span className="w-full flex justify-center items-center tracking-wide">RESUME</span>
            </a>
          </li>

          <div className='md:flex hidden text-white space-x-2 mx-6'>
            <a href="mailto:jeffreysahim@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor" d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 7.7324219 L 3 8.359375 L 4 8.9863281 L 12 14 L 20 9.0195312 L 21 8.3964844 L 22 7.7753906 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 4 6 L 20 6 L 20 6.7695312 L 12 11.748047 L 4 6.734375 L 4 6 z M 2 10.091797 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 10.130859 L 20 11.375 L 20 18 L 4 18 L 4 11.345703 L 2 10.091797 z"/>
              </svg>
              </a>
            <a href="https://www.linkedin.com/in/jeff-sahim/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
              </svg>
            </a>
          </div>

        </ul>

      </nav>
    </header>
  )
}
