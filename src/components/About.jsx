import { SiJira, SiSketch, SiLighthouse, SiSlack, SiConfluence, SiNotion, SiClaude, SiCypress, SiGithub, SiGit, SiTailwindcss, SiFigma, SiAdobecreativecloud, SiCss3, SiHtml5, SiJavascript, SiVuedotjs, SiReact } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { Code, Palette, Lightbulb, ExternalLink } from 'lucide-react';

const About = ({aboutSection}) => {
  return (
    <>
      {/* Bio Section */}
      <section ref={aboutSection} className="snap-start scroll-mt-0 sm:scroll-mt-10 pt-20 pb-16 px-8 sm:px-10">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 pb-10 md:pb-0 text-[#f22b40]" style={{ fontFamily: 'Shrikhand, cursive' }}>
            About Me
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

            <div>
              <div className="text-xl text-black space-y-4 leading-relaxed">
                <p><span className="font-semibold">Hi, I'm Jeff Sahim — Hungry Design Engineer.<br /></span>To truly blend my passion for design and technology, I attended the Turing School of Software & Design, where I completed their immersive program specializing in frontend engineering and UX principles.</p>
                <p>Shortly after graduating, I put those skills to immediate use as a Digital Product Engineer in the hospitality tech industry. Over the past two years, I've enjoyed collaborating with cross-functional teams to design, develop, and ship new product features within a fast-paced Agile environment. As I look to the future, I'm actively seeking my next opportunity to build impactful products.</p>
                <a className="w-fit flex items-center font-semibold text-black hover:text-[#f22b40] transition-colors duration-200" href="https://drive.google.com/file/d/1JPlJfU8D1ZaMBcKKfk_yxdlKA4SktTuW/view?usp=drive_link" target="_blank">VIEW MY RESUME <ExternalLink className="ml-3 stroke-3"/></a>
              </div>
            </div>

            <div className="lg:text-center">
              <div className="inline-block">
                <div className="w-80 h-80 rounded-3xl shadow-2xl transform rotate-0 hover:rotate-0 md:rotate-3 transition-transform duration-300">
                  <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                    <img className='border-8 border-neutral-100' src="/deli-jeff.png" alt="jeff pic" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      
      {/* Role Items Section */}
      <section className="py-20 px-10 sm:px-12 bg-black">

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-15 md:gap-8">
            {[
              {
                icon: <Palette className="w-18 h-18" />,
                title: "PRODUCT DESIGNER",
                description: "Designing intuitive interfaces that prioritize user experience and accessibility."
              },
              {
                icon: <Code className="w-18 h-18" />,
                title: "FRONTEND ENGINEER",
                description: "Building responsive, performant web applications with modern frameworks and best practices."
              },
              {
                icon: <Lightbulb className="w-18 h-18" />,
                title: "PROBLEM SOLVER",
                description: "Creating end-to-end digital solutions from concept to deployment and maintenance."
              }
            ].map((role, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 px-5">
                <div className="bg-[#f22b40] w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-black group-hover:shadow-2xl transition-shadow duration-300">
                  {role.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-4" style={{ fontFamily: 'Jost, sans-serif', letterSpacing: '0.15em' }}>{role.title}</h3>
                <p className="text-white leading-relaxed text-xl">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Technology Section */}
      <section className="py-20 px-10 sm:px-12 bg-gray-50">

        <div className="max-w-6xl flex flex-col lg:flex-row justify-between items-center mx-auto text-center">
          <div className="transition-all duration-300 text-2xl px-[55px] font-bold text-white bg-black rounded-full h-56 w-56 m-4 hover:m-2 hover:h-60 hover:w-60 hover:px-[63px] flex flex-col justify-center items-center">
            <span className='text-4xl tracking-widest text-center'>TECH</span>
            <span className='tracking-[5px] w-full text-sm border-y-2 border-white text-center'>AND</span>
            <span className='text-3xl tracking-widest text-center'>TOOLS</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='lg:rotate-0 rotate-90' width="50px" height="200px" viewBox="0 0 51 200.787">
            <path d="M0.0240945 91.8181l0 17.0428c4.52776,0.108425 8.23831,1.57016 11.1015,4.38319 2.83713,2.78492 4.74059,6.56173 5.70638,11.3043 0.933661,4.77874 1.44768,12.9789 1.4778,24.6045 0.0622441,11.6617 0.240945,19.2917 0.544134,23.0042 0.53811,5.91921 1.50791,10.6237 2.95559,14.1535 1.44768,3.52984 3.22866,6.34488 5.34295,8.44913 2.14039,2.14039 4.85504,3.74669 8.14394,4.85102 2.23276,0.783071 5.88709,1.17661 10.9509,1.17661l4.95343 0 0 -16.4043 -2.74677 0c-6.12602,0 -10.1699,-1.31717 -12.1918,-3.91736 -1.99181,-2.60823 -2.98772,-8.4913 -2.98772,-17.6191 0,-17.3982 -0.271063,-28.4556 -0.815197,-33.1239 -0.935669,-7.7022 -2.83311,-13.9065 -5.64012,-18.5467 -2.83913,-4.59602 -6.85087,-8.19815 -12.0392,-10.8004 6.78862,-3.81496 11.5553,-8.87882 14.3322,-15.1916 2.77689,-6.31276 4.16232,-16.9384 4.16232,-31.9131 0,-13.5833 0.12248,-21.681 0.421654,-24.3555 0.425669,-4.66831 1.57016,-7.91303 3.49972,-9.77031 1.90346,-1.81913 5.67626,-2.74677 11.2581,-2.74677l2.74677 0 0 -16.3983 -4.95343 0c-5.7626,0 -9.95504,0.534094 -12.5512,1.67457 -3.7728,1.53402 -6.87697,4.09807 -9.35067,7.7022 -2.4737,3.63827 -4.1061,8.19815 -4.82894,13.6937 -0.724843,5.52366 -1.14449,14.5491 -1.20673,27.0601 -0.0301181,12.5532 -0.544134,21.1831 -1.4778,25.9618 -0.965787,4.77874 -2.86925,8.55756 -5.70638,11.3405 -2.86323,2.7789 -6.57378,4.24063 -11.1015,4.3852z"/>
          </svg>
          <div className="flex max-w-[700px] flex-wrap justify-center md:justify-start w-full sm:w-[60vw] gap-7 md:gap-10">
            {[
              <SiReact title="React" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#61DAFB] group-hover:text-[#f22b40]" />,
              <SiVuedotjs title="Vue.js" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#4FC08D] group-hover:text-[#f22b40]" />,
              <SiJavascript title="JavaScript" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#F7DF1E] group-hover:text-[#f22b40]" />,
              <SiHtml5 title="HTML" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#E34F26] group-hover:text-[#f22b40]" />,
              <SiCss3 title="CSS" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#264de4] group-hover:text-[#f22b40]" />,
              <VscVscode title="VS Code" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#0098FF] group-hover:text-[#f22b40]" />,
              <SiNotion title="Notion" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#f22b40]" />,
              <CgFigma title="Figma" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#a259ff] group-hover:text-[#f22b40]" />,
              <SiSlack title="Slack" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#4A154B] group-hover:text-[#f22b40]" />,
              <BsMicrosoftTeams title="Microsoft Teams" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#7B83EB] group-hover:text-[#f22b40]" />,
              <SiAdobecreativecloud title="Adobe Creative Cloud" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#da1f26] group-hover:text-[#f22b40]" />,
              <SiSketch title="Sketch" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#E9AC12] group-hover:text-[#f22b40]" />,
              <SiTailwindcss title="Tailwind CSS" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#38bdf8] group-hover:text-[#f22b40]" />,
              <SiJira title="Jira" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#0053CD] group-hover:text-[#f22b40]" />,
              <SiConfluence title="Confluence" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0053CD] group-hover:text-[#f22b40]" />,
              <SiLighthouse title="Lighthouse" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#EA4335] group-hover:text-[#f22b40]" />,
              <FaSalesforce title="Salesforce" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#00A1E0] group-hover:text-[#f22b40]" />,
              <SiGit title="Git" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#F05032] group-hover:text-[#f22b40]" />,
              <SiGithub title="GitHub" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-300 text-[#000000] group-hover:text-[#f22b40]" />,
              <SiClaude title="Claude" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#da7756] group-hover:text-[#f22b40]" />,
              <SiCypress title="Cypress" className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#95e4c5] group-hover:text-[#f22b40]" />
            ].map((tech, index) => (
              <div key={index} className="group transform transition-all duration-300 hover:scale-110">
                <div className="bg-none w-16 h-16 rounded-xl flex items-center justify-center mx-auto duration-300">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  )
}

export default About;