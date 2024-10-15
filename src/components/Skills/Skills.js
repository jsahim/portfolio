import './Skills.css'
import SVGIcons from '../../icons';

function Skills() {
  return (
    <>
      <h2 id='skills'>SKILLS</h2>
      <p className='connect-text'>Some tech I've picked up...</p>
      <section className='skills'>

        <div className='skill-box'>
          {SVGIcons.next}
          <a className='skill-name' href="https://nextjs.org/" target="_blank" rel="noreferrer"><div><p>Next.js</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.typescript}
          <a className='skill-name' href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"><div><p>TypeScript</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.vue}
          <a className='skill-name' href="https://vuejs.org" target="_blank" rel="noreferrer"><div><p>Vue.js</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.react}
          <a className='skill-name' href="https://react.dev" target="_blank" rel="noreferrer"><div><p>React</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.node}
          <a className='skill-name' href="https://nodejs.org" target="_blank" rel="noreferrer"><div><p>Node.js</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.jquery}
          <a className='skill-name' href="https://jquery.com" target="_blank" rel="noreferrer"><div><p>jQuery</p></div></a>
        </div>

        <div className='skill-box'>
          {SVGIcons.javascript}
          <a className='skill-name' href="https://www.javascript.com" target="_blank" rel="noreferrer"><div><p>JavaScript</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.html}
          <a className='skill-name' href="https://html.spec.whatwg.org/multipage" target="_blank" rel="noreferrer"><div><p>HTML</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.css}
          <a className='skill-name' href="https://www.w3.org/Style/CSS" target="_blank" rel="noreferrer"><div><p>CSS</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.redux}
          <a className='skill-name' href="https://redux.js.org" target="_blank" rel="noreferrer"><div><p>Redux</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.mocha}
          <a className='skill-name' href="https://mochajs.org" target="_blank" rel="noreferrer"><div><p>Mocha</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.chai}
          <a className='skill-name' href="https://www.chaijs.com" target="_blank" rel="noreferrer"><div><p>Chai</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.cypress}
          <a className='skill-name' href="https://www.cypress.io" target="_blank" rel="noreferrer"><div><p>Cypress</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.photoshop}
          <a className='skill-name' href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer"><div><p>Photoshop</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.router}
          <a className='skill-name' href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"><div><p>React Router</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.github}
          <a className='skill-name' href="https://github.com" target="_blank" rel="noreferrer"><div><p>GitHub</p></div></a>
        </div>
        <div className='skill-box'>
          {SVGIcons.git}
          <a className='skill-name' href="https://git-scm.com" target="_blank" rel="noreferrer"><div><p>Git</p></div></a>
        </div>
      </section>
    </>
    )
}

export default Skills;
