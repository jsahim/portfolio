export default function Contact() {
  
  return (
    <div className="w-[85%] h-full"> 
    
      <h1 className="font-[Fugaz] text-6xl text-[#e98522]">Contact</h1>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</h2>
            <form action="https://formsubmit.co/jeffreysahim@gmail.com" method="POST" className="space-y-8">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="text" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Firstname Lastname" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@example.com" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                </div>
                <input type="hidden" name="_next" value="https://jeffsahim.vercel.app/thanks"/>
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black bg-green-400 rounded-lg bg-primary-700 sm:w-fit hover:bg-pink-400">Send message</button>
            </form>
        </div>
      </section>
    </div>
  )
}