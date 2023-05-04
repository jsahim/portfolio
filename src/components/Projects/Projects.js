import './Projects.css'

function Projects() {
  return (
    <>
      <h2 id='projects'>PROJECTS</h2>
      <p className='connect-text'>These are my new projects</p>
      <section className='projects'>
        <div className='project-box'>
          <img className='project-image' src='/Xpresso.png' alt='Xpresso' />
          <div className='project-name'>
            <p>Xpresso</p>
            <p className='project-description'>Imagine an app that allows you to order coffee and have it delivered by drone!</p>
            <div className='tech'>
              <div className='tech-item'>React</div>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>React Router</div>
              <div className='tech-item'>Cypress</div>
              <div className='tech-item'>Restful API</div>
              <div className='tech-item'>Webpack</div>
              </div>
            <a href="https://github.com/jsahim/showcase" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
            <a href="https://xpresso-coffee.vercel.app" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
          </div>
        </div>
        <div className='project-box'>
          <img className='project-image' src='/Rancid.png' alt='Rancid Tomatillos' />
          <div className='project-name'>
            <p>Rancid Tomatillos</p>
            <p className='project-description'>Imagine an app that allows you to order coffee and have it delivered by drone!</p>
            <div className='tech'>
              <div className='tech-item'>React</div>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>React Router</div>
              <div className='tech-item'>Cypress</div>
              <div className='tech-item'>Restful API</div>
              <div className='tech-item'>Webpack</div>
              </div>
            <a href="https://github.com/jsahim/rancid-tomatillos" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
            <a href="https://rancid-tomatillos-jsahim.vercel.app/" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
          </div>
        </div>
        <div className='project-box'>
          <img className='project-image' src='/Hogwarts.png' alt='Battle of Hogwarts' />
          <div className='project-name'>
            <p>Battle of Hogwarts</p>
            <p className='project-description'>Imagine an app that allows you to order coffee and have it delivered by drone!</p>
            <div className='tech'>
              <div className='tech-item'>React</div>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>React Router</div>
              <div className='tech-item'>Cypress</div>
              <div className='tech-item'>Restful API</div>
              <div className='tech-item'>Webpack</div>
              </div>
            <a href="https://github.com/jsahim/rock-paper-scissors" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
            <a href="https://jsahim.github.io/rock-paper-scissors" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
          </div>
        </div>
        <div className='project-box'>
          <img className='project-image' src='/Hotel.png' alt='Hotel Azuro' />
          <div className='project-name'>
            <p>Hotel Azuro</p>
            <p className='project-description'>Imagine an app that allows you to order coffee and have it delivered by drone!</p>
            <div className='tech'>
              <div className='tech-item'>React</div>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>React Router</div>
              <div className='tech-item'>Cypress</div>
              <div className='tech-item'>Restful API</div>
              <div className='tech-item'>Webpack</div>
              </div>
            <a href="https://github.com/jsahim/overlook-project" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
            <a href="https://overlook-project-z8ta.vercel.app" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
