"use client"

import { SiOpenai, SiGithubcopilot, SiClaude, SiTableau, SiSlack, SiZoom, SiNotion, SiGoogledocs, SiGoogleforms, SiGooglesheets, SiGoogleanalytics, SiConfluence, SiJira, SiSketch, SiVercel, SiLighthouse, SiEslint, SiWebpack, SiGithub, SiGit, SiTailwindcss, SiFigma, SiAdobecreativecloud, SiCypress, SiChai, SiMocha, SiCss3, SiHtml5, SiJquery, SiJavascript, SiRedux, SiNextdotjs, SiTypescript, SiVuedotjs, SiReact, SiReactrouter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbCloudCog } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { FaTrello, FaSalesforce } from "react-icons/fa";
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

    const skills = [
      { key: "chatGPT", name: "ChatGPT", link:"https://chatgpt.com/", icon: (<SiOpenai className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#74AA9C] group-hover:text-[#e98522]" />)},
      { key: "claude", name: "Claude", link:"https://claude.ai/", icon: (<SiClaude className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#da7756] group-hover:text-[#e98522]" />)},
      { key: "tableau", name: "Tableau", link:"https://www.tableau.com/", icon: (<SiTableau className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#1C4481] group-hover:text-[#e98522]" />)},
      { key: "slack", name: "Slack", link:"https://slack.com/", icon: (<SiSlack className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#4A154B] group-hover:text-[#e98522]" />)},
      { key: "zoom", name: "Zoom", link:"https://www.zoom.com/", icon: (<SiZoom className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0B5CFF] group-hover:text-[#e98522]" />)},
      { key: "notion", name: "Notion", link:"https://notion.so/", icon: (<SiNotion className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#e98522]" />)},
      { key: "googleDocs", name: "Google Docs", link:"https://docs.google.com", icon: (<SiGoogledocs className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#3086F6] group-hover:text-[#e98522]" />)},
      { key: "googleSheets", name: "Google Sheets", link:"https://docs.google.com", icon: (<SiGooglesheets className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0F9D58] group-hover:text-[#e98522]" />)},
      { key: "googleForms", name: "Google Forms", link:"https://docs.google.com", icon: (<SiGoogleforms className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#e98522] group-hover:text-[#e98522]" />)},
      { key: "googleAnalytics", name: "Google Analytics", link:"https://marketingplatform.google.com/about/analytics/", icon: (<SiGoogleanalytics className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#ed750a] group-hover:text-[#e98522]" />)},
      { key: "salesForce", name: "Salesforce", link:"https://www.salesforce.com/", icon: (<FaSalesforce className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#00A1E0] group-hover:text-[#e98522]" />)},
      { key: "jira", name: "JIRA", link:"https://www.atlassian.com/software/jira", icon: (<SiJira className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0053CD] group-hover:text-[#e98522]" />)},
      { key: "trello", name: "Trello", link:"https://www.atlassian.com/software/trello", icon: (<FaTrello className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0053CD] group-hover:text-[#e98522]" />)},
      { key: "confluence", name: "Confluence", link:"https://www.atlassian.com/software/confluence", icon: (<SiConfluence className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0053CD] group-hover:text-[#e98522]" />)},
      { key: "sketch", name: "Sketch", link:"https://www.sketch.com/", icon: (<SiSketch className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#E9AC12] group-hover:text-[#e98522]" />)},
      { key: "vercel", name: "Vercel", link:"https://vercel.com/", icon: (<SiVercel className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#e98522]" />)},
      { key: "lighthouse", name: "Lighthouse", link:"https://developer.chrome.com/docs/lighthouse/overview", icon: (<SiLighthouse className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#EA4335] group-hover:text-[#e98522]" />)},
      { key: "esLint", name: "ESLint", link:"https://eslint.org/", icon: (<SiEslint className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#4b32c3] group-hover:text-[#e98522]" />)},
      { key: "webPack", name: "Webpack", link:"https://webpack.js.org/", icon: (<SiWebpack className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#8dd6f9] group-hover:text-[#e98522]" />)},
      { key: "agile", name: "Agile Scrum", link:"https://www.agilealliance.org/agile101/", icon: (<DiScrum className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#009FE3] group-hover:text-[#e98522]" />)},
      { key: "restAPI", name: "REST API", link:"https://restfulapi.net/", icon: (<TbCloudCog className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#01B5E6] group-hover:text-[#e98522]" />)},
      { key: "npm", name: "npm", link:"https://www.npmjs.com/", icon: (<CgNpm className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#cb3837] group-hover:text-[#e98522]" />)},
      { key: "microsoftTeams", name: "Microsoft Teams", link:"https://www.microsoft.com/en-us/microsoft-teams/", icon: (<BsMicrosoftTeams className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#7B83EB] group-hover:text-[#e98522]" />)},
      { key: "vsCode", name: "VS Code", link:"https://code.visualstudio.com/", icon: (<VscVscode className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#0098FF] group-hover:text-[#e98522]" />)},
      { key: "nextJS", name: "Next.js", link:"https://nextjs.org/", icon: (<SiNextdotjs className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#e98522]" />)},
      { key: "typeScript", name: "TypeScript", link:"https://www.typescriptlang.org/", icon: (<SiTypescript className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#3178c6] group-hover:text-[#e98522]" />)},
      { key: "react", name: "React", link:"https://reactjs.org/", icon: (<SiReact className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#61DAFB] group-hover:text-[#e98522]" />)},
      { key: "reactRouter", name: "React Router", link:"https://reactrouter.com/", icon: (<SiReactrouter className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#CA4245] group-hover:text-[#e98522]" />)},
      { key: "redux", name: "Redux", link:"https://redux.js.org/", icon: (<SiRedux className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#764ABC] group-hover:text-[#e98522]" />)},
      { key: "vueJS", name: "Vue.js", link:"https://vuejs.org/", icon: (<SiVuedotjs className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#41B883] group-hover:text-[#e98522]" />)},
      { key: "javaScript", name: "JavaScript", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: (<SiJavascript className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#F7DF1E] group-hover:text-[#e98522]" />)},
      { key: "jquery", name: "jQuery", link:"https://jquery.com/", icon: (<SiJquery className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#1266a9] group-hover:text-[#e98522]" />)},
      { key: "html5", name: "HTML5", link:"https://developer.mozilla.org/en-US/docs/Web/HTML", icon: (<SiHtml5 className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#E34F26] group-hover:text-[#e98522]" />)},
      { key: "css3", name: "CSS3", link:"https://developer.mozilla.org/en-US/docs/Web/CSS", icon: (<SiCss3 className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#264de4] group-hover:text-[#e98522]" />)},
      { key: "mocha", name: "Mocha", link:"https://mochajs.org/", icon: (<SiMocha className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#8D6748] group-hover:text-[#e98522]" />)},
      { key: "chai", name: "Chai", link:"https://www.chaijs.com/", icon: (<SiChai className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#A30701] group-hover:text-[#e98522]" />)},
      { key: "cypress", name: "Cypress", link:"https://www.cypress.io/", icon: (<SiCypress className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#95e4c5] group-hover:text-[#e98522]" />)},
      { key: "adobeCC", name: "Adobe Creative Cloud", link:"https://www.adobe.com/creativecloud.html", icon: (<SiAdobecreativecloud className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#da1f26] group-hover:text-[#e98522]" />)},
      { key: "figma", name: "Figma", link:"https://www.figma.com/", icon: (<SiFigma className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#e98522]" />)},
      { key: "tailwindCSS", name: "Tailwind CSS", link:"https://tailwindcss.com/", icon: (<SiTailwindcss className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#38bdf8] group-hover:text-[#e98522]" />)},
      { key: "githubCopilot", name: "ChatGPT",link:"https://chatgpt.com/", icon: (<SiGithubcopilot className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#e98522]" />)},
      { key: "git", name: "Git", link:"https://git-scm.com/", icon: (<SiGit className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#F05032] group-hover:text-[#e98522]" />)},
      { key: "github", name: "GitHub", link:"https://github.com/", icon: (<SiGithub className="w-16 h-16 md:w-36 md:h-36 z-2 group-hover:w-24 transition-all duration-150 ease-in text-[#000000] group-hover:text-[#e98522]" />)},
    ]

    const setConfigs = {
      dev: [
        { key: "dLang", name: "Languages", skills: ["nextJS", "typeScript", "vueJS", "reactJS", "reactRouter", "redux", "jQuery", "javaScript", "html5", "css3", "tailwindCSS"] }, 
        { key: "dVers", name: "Version Control", skills: ["git", "github"] },
        { key: "dMgmt", name: "Project Management", skills: ["jira", "confluence", "trello", "agile"] },
        { key: "dTest", name: "QA Testing", skills: ["mocha", "chai", "cypress"] },
        { key: "dDesign", name: "Design", skills: ["adobeCC", "figma", "sketch"] },
        { key: "dAI", name: "AI Productivity", skills: ["chatGPT", "claude", "githubCopilot"] }
      ],
      ux: [
        { key: "uDesign", name: "Design Tools", skills: ["figma", "adobeCC", "sketch"] },
        { key: "uCollab", name: "Collaboration", skills: ["slack", "microsoftTeams", "zoom"] },
        { key: "uLang", name: "Coding Languages", skills: ["nextJS", "typeScript", "vueJS", "reactJS", "javaScript", "html5", "css3", "tailwindCSS"] },
        { key: "uVers", name: "Version Control", skills: ["git", "github"] },
        { key: "uMgmt", name: "Project Management", skills: ["jira", "confluence", "trello", "googleDocs", "googleSheets", "googleForms", "agile"] },
        { key: "uData", name: "Data Analysis", skills: ["tableau", "googleAnalytics"] },
        { key: "uTest", name: "QA Testing", skills: ["mocha", "chai", "cypress"] },
        { key: "uAI", name: "AI Productivity", skills: ["chatGPT", "claude", "githubCopilot"] }
      ],
      prod: [
        { key: "pMgmt", name: "Project Management", skills: ["agile", "jira", "confluence", "trello", "notion", "googleDocs", "salesForce"] },
        { key: "pData", name: "Data Analysis", skills: ["tableau", "googleAnalytics"] },
        { key: "pCollab", name: "Collaboration", skills: ["slack", "microsoftTeams", "zoom"] },
        { key: "pDesign", name: "Prototyping", skills: ["adobeCC", "figma", "sketch"] },
        { key: "pLang", name: "Coding Languages", skills: ["nextJS", "typeScript", "vueJS", "reactJS", "javaScript", "html5", "css3", "tailwindCSS"] },
        { key: "pTest", name: "QA Testing", skills: ["mocha", "chai", "cypress"] },
        { key: "pAI", name: "AI Productivity", skills: ["chatGPT", "claude", "githubCopilot"] }
      ]
    }
    

    let skillSet
    if(currSite === "UX" ){
      skillSet = setConfigs.ux.map(confSect => {
        return (<div key={confSect.key} className="w-[100%]">
          <h2 className="text-3xl p-2 py-4 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[20px] px-6 bg-gray-50 mb-2 shadow-md">{confSect.name}</h2>
          <div className="flex flex-wrap justify-center w-full shadow-md bg-gray-50 rounded-[50px] z-1 mb-14 rounded-t-lg">
            {confSect.skills.map(skill => {
              return skills.map(s => {
                if(s.key === skill){
                  return (<a key={s.key} className="group m-10 flex flex-col justify-center items-center w-16 h-16 md:w-36 md:h-36" href={s.link} target="_blank" rel="noreferrer">
                    <span className="absolute z-3 text-center text-2xl md:text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">{s.name}</span>
                    <div className="w-16 h-16 md:w-36 md:h-36 flex justify-center items-center">
                      {s.icon}
                    </div>
                  </a>)
                } else {
                  return null;
                }
              })
            })}
          </div>
        </div>)
      })
    }else if(currSite === "PROD"){
      skillSet = setConfigs.prod.map(confSect => {
        return (<div key={confSect.key} className="w-[100%]">
          <h2 className="text-3xl p-2 py-4 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[20px] px-6 bg-gray-50 mb-2 shadow-md">{confSect.name}</h2>
          <div className="flex flex-wrap justify-center w-full shadow-md bg-gray-50 rounded-[50px] z-1 mb-14 rounded-t-lg">
            {confSect.skills.map(skill => {
              return skills.map(s => {
                if(s.key === skill){
                  return (<a key={s.key} className="group m-10 flex flex-col justify-center items-center w-16 h-16 md:w-36 md:h-36" href={s.link} target="_blank" rel="noreferrer">
                    <span className="absolute z-3 text-center text-2xl md:text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0">{s.name}</span>
                    <div className="w-16 h-16 md:w-36 md:h-36 flex justify-center items-center">
                      {s.icon}
                    </div>
                  </a>)
                } else {
                  return null;
                }
              })
            })}
          </div>
        </div>)
      })
    } else {
      skillSet = setConfigs.dev.map(confSect => {
        return (<div key={confSect.key} className="w-[100%]">
          <h2 className="text-3xl p-2 py-4 text-center font-semibold tracking-wide w-[100%] text-[#304962] z-1 rounded-[20px] px-6 bg-gray-50 mb-2 shadow-md">{confSect.name}</h2>
          <div className="flex flex-wrap justify-center w-[full] shadow-md bg-gray-50 rounded-[50px] z-1 mb-14 rounded-t-lg">
            {confSect.skills.map(skill => {
              return skills.map(s => {
                if(s.key === skill){
                  return (<a key={s.key} className="group m-10 flex flex-col justify-center items-center w-16 h-16 md:w-36 md:h-36" href={s.link} target="_blank" rel="noreferrer">
                    <span className="absolute z-3 text-center text-2xl md:text-4xl duration-300 font-bold transition-all ease-in group-hover:opacity-100 opacity-0 max-w-[225px]">{s.name}</span>
                    <div className="w-16 h-16 md:w-36 md:h-36 flex justify-center items-center">
                      {s.icon}
                    </div>
                  </a>)
                } else {
                  return null;
                }
              })
            })}
          </div>
        </div>)
      })
    }



  return (
    <div className="w-[85%]"> 
      {currSite && <>
      <h1 className="font-fugaz text-6xl text-[#e98522] text-center m-5 mb-16">Skills</h1>
      <div className="flex flex-col items-center relative">
        {skillSet}
      </div>
      </>}
    </div>
  )
}

