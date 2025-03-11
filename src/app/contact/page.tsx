"use client"

import useGetAllSearchParams from "../_components/GetParams";
import { useEffect, useState } from 'react'

export default function Contact() {
    const allSearchParams = useGetAllSearchParams();
    const [cPage, setCPage] = useState("");

    useEffect(() => {
      const cType = allSearchParams.type
      setCPage(cType)
    }, []);
  
  return (
    <div className="w-[85%]"> 
      <h1 className="font-fugaz text-6xl text-center m-5 mb-16 text-[#e98522]">Contact</h1>
      <div className="flex flex-wrap justify-center w-full shadow-md bg-gray-50 rounded-[50px] pt-10 mb-16">

        <div className="pb-8 px-4 mx-auto w-[80%]">
          <h2 className="text-3xl font-semibold text-left mb-8 text-[#304962]">Send me a message</h2>
          <form action="https://formsubmit.co/jeffreysahim@gmail.com" method="POST" className="space-y-8">
            
            <div className="md:flex w-[100%] justify-between items-center">
              <div className="w-[100%] md:w-[48%]">
                  <label htmlFor="name" className="block mb-2 font-medium">Your name</label>
                  <input type="text" name="name" className="block md:mb-0 mb-8 p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-400 shadow-sm" placeholder="Firstname Lastname" required />
              </div>
              <div className="w-[100%] md:w-[48%]">
                  <label htmlFor="email" className="block mb-2 font-medium">Your email</label>
                  <input type="email" name="email" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-400 shadow-sm" placeholder="email@example.com" required />
              </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 font-medium">Your message</label>
                <textarea name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-400" placeholder="Leave a comment..." required></textarea>
            </div>
            <input type="hidden" name="_next" value={`https://jeffsahim.vercel.app/thanks?type=${cPage}`}/>
            <input type="hidden" name="_captcha" value="false" />
            <div className="w-full flex justify-center">
              <button type="submit" className="w-[100%] py-2 px-4 font-medium text-white text-center rounded-lg bg-[#304962] hover:bg-[#e98522] transition-all duration-150 ease-in">SEND MESSAGE</button>
            </div>
          </form>
          <p className="w-[100%] mt-10 text-base text-center font-medium">
            Connect with me on <a className="font-medium underline hover:text-[#e98522] transition-all duration-150 ease-in" href="https://www.linkedin.com/in/jeff-sahim/" target="_blank" rel="noreferrer">LinkedIn</a> or email me at <a className="font-medium underline hover:text-[#e98522] transition-all duration-150 ease-in" href="mailto:jeffreysahim@gmail.com">jeffreysahim@gmail.com</a>!    
          </p>
        </div>

      </div>
    </div>
  )
}