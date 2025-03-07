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
    <div className="w-[85%] h-full"> 
    
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">Contact</h1>
          <div className="w-full flex justify-center">
            <h2 className="text-2xl font-regular white text-center">Send me a message!</h2>
          </div>
        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
          <form action="https://formsubmit.co/jeffreysahim@gmail.com" method="POST" className="space-y-8">
              <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-90">Your name</label>
                  <input type="text" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm" placeholder="Firstname Lastname" required />
              </div>
              <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Your email</label>
                  <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="email@example.com" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-900">Your message</label>
                  <textarea name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-400" placeholder="Leave a comment..." required></textarea>
              </div>
              <input type="hidden" name="_next" value={`https://jeffsahim.vercel.app/thanks?type=${cPage}`}/>
              <input type="hidden" name="_captcha" value="false" />
              <button type="submit" className="py-2 px-4 font-medium text-center text-white rounded-lg bg-[#304962] sm:w-fit hover:bg-[#e98522] transition-all duration-150 ease-in">SEND MESSAGE</button>
          </form>
          <p className="text-center pt-16">
            Connect with me on <a className="text-[#304962] font-medium underline" href="https://www.linkedin.com/in/jeff-sahim/" target="_blank" rel="noreferrer">LinkedIn</a> or email me at <a className="text-[#304962] font-medium underline" href="mailto:jeffreysahim@gmail.com">jeffreysahim@gmail.com</a>    
          </p>
        </div>


    </div>
  )
}