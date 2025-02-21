'use client'

import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
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
              <IoMdMail className='text-3xl hover:text-[#e98522]'/>
            </a>
            <a href="https://www.linkedin.com/in/jeff-sahim/" target="_blank" rel="noreferrer">
              <IoLogoLinkedin className='text-3xl hover:text-[#e98522]' />
            </a>
          </div>

        </ul>

      </nav>
    </header>
  )
}
