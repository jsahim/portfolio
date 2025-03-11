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
  const [key, setKey] = useState("home")
  const [currPage, setCurrPage] = useState("home")
  const [sourcePath, setSource] = useState("")


    useEffect(() => {
  
      const sType = allSearchParams.type
  
      if(sType === "u" ){
        setKey("10J6r5-bN6I6dx-xUCvtucJTw00JlQ_Xc")
        setSource("u")
      }else if(sType === "p"){
        setKey("1oYg8PjnUsrlICyb9WwI2OL36TxCX-yxM")
        setSource("p")
      } else {
        setKey("1JPlJfU8D1ZaMBcKKfk_yxdlKA4SktTuW")
        setSource("d")
      }
  
    }, [currPage]);


  return (
    <header className='fixed z-50 bg-[#e98522] w-[100%] display flex justify-center items-center border-b border-gray-50'>

      <div className='w-[85%] h-20 flex justify-between items-center'>

        <Link 
        href={{
          pathname: '/',
          query: { type: `${sourcePath}`, origin: "main" },
        }}
        onClick={() => {
          setOpen(!open)
          setCurrPage("home")
        }}> 
          <Image className='min-w-[170px]' width={200} height={60} src="/images/jeff-logo.png" alt="Jeff Logo" priority />
        </Link>

        <nav className="md:flex">

          <div className='absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
            {open ? <GrClose className='h-10 w-10 text-white'/> : <FiMenu className='h-10 w-10 text-white'/>}
          </div>
          
          <ul className={`md:*:px-3 *:py-3 md:w-[50%] w-full flex md:flex-row flex-col md:items-center items-stretch justify-around md:pb-0 pb-12 absolute md:static md:z-[auto] z-[-1] left-0 md:transition-none transition-all duration-300 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
          
            <li className='text-center md:bg-transparent bg-[#e98522]'>
              <Link className={`w-full font-semibold hover:text-[#304962] ${currPage === "about" ? "text-[#e98522]" : "text-white" } duration-150`} 
              href={{
                pathname: '/about',
                query: { type: `${sourcePath}` }
              }}
              onClick={() => {
                setOpen(!open)
                setCurrPage("about")
              }}>
                <span className="w-full flex justify-center items-center tracking-wider text-lg">ABOUT</span>
              </Link>
            </li>
            
          
            <li className='text-center md:bg-transparent bg-[#e98522]'>
              <Link className={`w-full font-semibold hover:text-[#304962] ${currPage === "skills" ? "text-[#e98522]" : "text-white" } duration-150`} 
              href={{
                pathname: '/skills',
                query: { type: `${sourcePath}` }
              }}
              onClick={() => {
                setOpen(!open)
                setCurrPage("skills")
              }}>
                <span className="w-full flex justify-center items-center tracking-wider text-lg">SKILLS</span>
              </Link>
            </li>
            
            <li className='text-center md:bg-transparent bg-[#e98522]'>
              <Link className={`w-full font-semibold hover:text-[#304962] ${currPage === "projects" ? "text-[#e98522]" : "text-white" } duration-150`} 
              href={{
                pathname: '/projects',
                query: { type: `${sourcePath}` }
              }}
              onClick={() => {
                setOpen(!open)
                setCurrPage("projects")
              }}>
                <span className="w-full flex justify-center items-center tracking-wider text-lg">PROJECTS</span>
              </Link>
            </li>
            
            <li className='text-center md:bg-transparent bg-[#e98522]'>
              <Link className={`w-full font-semibold hover:text-[#304962] ${currPage === "contact" ? "text-[#304962]" : "text-white" } duration-150`} 
              href={{
                pathname: '/contact',
                query: { type: `${sourcePath}` }
              }}
              onClick={() => {
                setOpen(!open)
                setCurrPage("contact")
              }}>
                <span className="w-full flex justify-center items-center tracking-wider text-lg">CONTACT</span>
              </Link>
            </li>

            <li className={`text-center md:bg-transparent md:border-b-0 bg-[#e98522] ${open && "border-b border-white" }`}>
              <a className={`w-full font-semibold hover:text-[#304962] ${currPage === "resume" ? "text-[#304962]" : "text-white" } duration-150`} target="_blank" href={`https://drive.google.com/file/d/${key}/view?usp=sharing`}  onClick={() => {
                setOpen(!open)
                setCurrPage("resume")
              }}>
                <span className="w-full flex justify-center items-center tracking-wider text-lg">RESUME</span>
              </a>
            </li>

            <div className='lg:flex hidden text-white space-x-2 ml-6 w-full'>
              <a href="mailto:jeffreysahim@gmail.com">
                <IoMdMail className='text-3xl hover:text-[#304962] duration-150'/>
              </a>
              <a href="https://www.linkedin.com/in/jeff-sahim/" target="_blank" rel="noreferrer">
                <IoLogoLinkedin className='text-3xl hover:text-[#304962] duration-150' />
              </a>
            </div>

          </ul>

        </nav>

      </div>
    </header>
  )
}
