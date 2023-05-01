import './Skills.css'
import SVGIcons from '../../icons';

function Skills() {
  return (
    <>
      <h2>&lt; SKILLS /&gt;</h2>
      <section className='skills' id='skills'>
        <div className='skill-box'>
          {SVGIcons.react}
          <div className='skill-name'><p>React</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.javascript}
          <div className='skill-name'><p>JavaScript</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.html}
          <div className='skill-name'><p>HTML</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.css}
          <div className='skill-name'><p>CSS</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.mocha}
          <div className='skill-name'><p>Mocha</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.chai}
          <div className='skill-name'><p>Chai</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.cypress}
          <div className='skill-name'><p>Cypress</p></div>
        </div>
        <div className='skill-box'>
          {SVGIcons.photoshop}
          <div className='skill-name'><p>Photoshop</p></div>
        </div>
      </section>
    </>
    )
}

export default Skills;
