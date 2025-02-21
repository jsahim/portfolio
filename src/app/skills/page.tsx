"use client"

import { SiOpenai, SiGithubcopilot, SiClaude, SiTableau, SiSlack, SiNotion, SiGoogledocs, SiGoogleanalytics, SiConfluence, SiJira, SiSketch, SiVercel, SiLighthouse, SiEslint, SiWebpack, SiGithub, SiGit, SiTailwindcss, SiFigma, SiAdobecreativecloud, SiCypress, SiChai, SiMocha, SiCss3, SiHtml5, SiJquery, SiJavascript, SiRedux, SiNextdotjs, SiTypescript, SiVuedotjs, SiReact, SiReactrouter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbCloudCog } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { FaTrello } from "react-icons/fa";
import { CgNpm } from "react-icons/cg";
import useGetAllSearchParams from "../_components/GetParams";
import { useState, useEffect } from "react";

export default function Skills() {

  const allSearchParams = useGetAllSearchParams();
  const [currSite, setCurrSite] = useState<string>("")


    useEffect(() => {
  
      const siteType = allSearchParams.type

      if(siteType === "u"){
        setCurrSite("UX")
      } else if(siteType === "p"){
        setCurrSite("PROD")
      } else {
        setCurrSite("DEV")
      }
    
    }, []);

    const chatGPT = (<a key="chatGPT" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">ChatGPT</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#74AA9C]">
        <SiOpenai className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const githubCopilot = (<a key="githubCopilot" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">GitHub<br/>Copilot</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-black">
        <SiGithubcopilot className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const claude = (<a key="claude" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Claude</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#da7756]">
        <SiClaude className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const tableau = (<a key="tableau" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Tableau</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#1C4481]">
        <SiTableau className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const slack = (<a key="slack" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Slack</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#4A154B]">
        <SiSlack className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const notion = (<a key="notion" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Notion</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-black">
        <SiNotion className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const googleDocs = (<a key="googleDocs" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Google<br/>Docs</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#3086F6]">
        <SiGoogledocs className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const googleAnalytics = (<a key="googleAnalytics" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Google<br/>Analytics</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#ed750a]">
        <SiGoogleanalytics className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const confluence = (<a key="confluence" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Confluence</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#0053CD]">
        <SiConfluence className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const trello = (<a key="trello" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Trello</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#0053CD]">
        <FaTrello className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const jira = (<a key="jira" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">JIRA</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#0053CD]">
        <SiJira className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const sketch = (<a key="sketch" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Sketch</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#E9AC12]">
        <SiSketch className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)
    
    const vercel = (<a key="vercel" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Vercel</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-black">
        <SiVercel className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const npm = (<a key="npm" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">npm</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#cb3837]">
        <CgNpm className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const lighthouse = (<a key="lighthouse" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Lighthouse</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#EA4335]">
        <SiLighthouse className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const esLint = (<a key="esLint" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">ESLint</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#4b32c3]">
        <SiEslint className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const webPack = (<a key="webPack" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Webpack</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#8dd6f9]">
        <SiWebpack className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const agile = (<a key="agile" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Agile</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#6fd7ac]">
        <DiScrum className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const restAPI = (<a key="restAPI" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">REST API</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#01B5E6]">
        <TbCloudCog className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const microsoftTeams = (<a key="microsoftTeams" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Microsoft Teams</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#7B83EB]">
        <BsMicrosoftTeams className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const vsCode = (<a key="vsCode" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">VS Code</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#0098FF]">
        <VscVscode className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const nextJS = (<a key="nextJS" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Next.js</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-black">
        <SiNextdotjs className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)
                    
    const typeScript = (<a key="typeScript" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">TypeScript</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#3178c6]">
        <SiTypescript className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const vueJS = (<a key="vueJS" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://vuejs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Vue.js</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#41B883]">
        <SiVuedotjs className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const reactJS = (<a key="reactJS" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://react.dev/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">React</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#61DAFB]">
        <SiReact className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const reactRouter = (<a key="reactRouter" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://reactrouter.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">React<br/>Router</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#CA4245]">
        <SiReactrouter className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const redux = (<a key="redux" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://redux.js.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Redux</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#764ABC]">
        <SiRedux className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const jQuery = (<a key="jQuery" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://jquery.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">jQuery</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#1266a9]">
        <SiJquery className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const javaScript = (<a key="javaScript" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.javascript.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">JavaScript</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#F7DF1E]">
        <SiJavascript className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const html = (<a key="html" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">HTML</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#E34F26]">
        <SiHtml5 className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const css = (<a key="css" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">CSS</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#264de4]">
        <SiCss3 className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const mocha = (<a key="mocha" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://mochajs.org/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Mocha</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#8D6748]">
        <SiMocha className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)
                
    const chai = (<a key="chai" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.chaijs.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Chai</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#A30701]">
        <SiChai className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)
                    
    const cypress = (<a key="cypress" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.cypress.io/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Cypress</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#95e4c5]">
        <SiCypress className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const adobeCC = (<a key="adobeCC" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.adobe.com/creativecloud.html" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Adobe<br/>Creative<br/>Cloud</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#da1f26]">
        <SiAdobecreativecloud className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const figma = (<a key="figma" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://www.figma.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Figma</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#000000]">
        <SiFigma className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const tailwindCSS = (<a key="tailwindCSS" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Tailwind<br/>CSS</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#38bdf8]">
        <SiTailwindcss className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const git = (<a key="git" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://git-scm.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">Git</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-[#F05032]">
        <SiGit className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const gitHub = (<a key="gitHub" className="group m-10 flex flex-col justify-center items-center w-36 h-36" href="https://github.com/" target="_blank" rel="noreferrer">
      <span className="absolute z-[-1] text-center text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">GitHub</span>
      <div className="w-36 h-36 flex justify-center items-center group-hover:text-[#e98522] text-black">
        <SiGithub className="w-36 h-36 z-[-2] group-hover:w-24 transition-all duration-150 ease-in" />
      </div>
    </a>)

    const devSkills = (<div className="flex flex-col items-center">
      <h2>LANGUAGES</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[nextJS, typeScript, vueJS, reactJS, reactRouter, redux, jQuery, javaScript, html, css, tailwindCSS]}
      </div>
      <h2>VERSION CONTROL</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[git, gitHub]}
      </div>
      <h2>PROJECT MANAGEMENT</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[typeScript]}
      </div>
      <h2>QA TESTING</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[mocha, chai, cypress]}
      </div>
      <h2>DESIGN</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[adobeCC, figma, tailwindCSS]}
      </div>
      <h2>AI PRODUCTIVITY</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[typeScript]}
      </div>
    </div>)

    const uxSkills = (<div className="flex flex-col items-center">
      <h2>UX SKILLS</h2>
      <div className="flex flex-wrap justify-center w-full">
        {[nextJS, typeScript, vueJS, reactJS, reactRouter, redux, jQuery, javaScript, html, css, mocha, chai, cypress, adobeCC, figma, tailwindCSS, git, gitHub, chatGPT, githubCopilot, claude, tableau, slack, notion, googleDocs, googleAnalytics, confluence, jira, trello, sketch, vercel, npm, lighthouse, esLint, webPack, agile, restAPI, microsoftTeams, vsCode]}
      </div>
    </div>)

    const productSkills = (<div className="flex flex-col items-center">
      <h2>PRODUCT SKILLS</h2>
      <div className="flex flex-wrap justify-center w-full">
      {[nextJS, typeScript, vueJS, reactJS, reactRouter, redux, jQuery, javaScript, html, css, mocha, chai, cypress, adobeCC, figma, tailwindCSS, git, gitHub, chatGPT, githubCopilot, claude, tableau, slack, notion, googleDocs, googleAnalytics, confluence, jira, trello, sketch, vercel, npm, lighthouse, esLint, webPack, agile, restAPI, microsoftTeams, vsCode]}
      </div>
    </div>)

    let skillSet
    if(currSite === "UX" ){
      skillSet = uxSkills
    }else if(currSite === "PROD"){
      skillSet = productSkills
    } else {
      skillSet = devSkills
    }

  return (
    <div className="w-[85%]"> 
      {currSite && <><h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5">Skills</h1>{skillSet}</>}
    </div>
  )
}