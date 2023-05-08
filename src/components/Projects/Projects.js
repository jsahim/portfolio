import './Projects.css'

function Projects() {
  return (
    <>
      <h2 id='projects'>PROJECTS</h2>
      <p className='connect-text'>A few of my favorite works...</p>
      <section className='projects'>
        <div className='project-box'>
          <img className='project-image' src='/Xpresso.png' alt='Xpresso' />
          <div className='project-name'>
            <p className='project-title'>Xpresso</p>
            <p className='project-description'>Order a coffee through Xpresso and have it delivered by drone!</p>
            <div className='tech'>
              <div className='tech-item'>React</div>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>React Router</div>
              <div className='tech-item'>Cypress</div>
              <div className='tech-item'>Git</div>
              <div className='tech-item'>Fetch API</div>
              <div className='tech-item'>Webpack</div>
            </div>
            <div className='connect-btns'>
              <a href="https://github.com/jsahim/xpresso" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
              <a href="https://xpresso-coffee.vercel.app" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
            </div>
          </div>
        </div>
        <div className='project-box'>
          <img className='project-image' src='/Rancid.png' alt='Rancid Tomatillos' />
          <div className='project-name'>
            <p className='project-title'>Rancid Tomatillos</p>
            <p className='project-description'>Can't decide on a movie to watch? Rancid Tomatillos has you covered.</p>
            <div className='tech'>
              <div className='tech-item'>React</div>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>React Router</div>
              <div className='tech-item'>Cypress</div>
              <div className='tech-item'>Git</div>
              <div className='tech-item'>Fetch API</div>
              <div className='tech-item'>Webpack</div>
            </div>
            <div className='connect-btns'>
              <a href="https://github.com/jsahim/rancid-tomatillos" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
              <a href="https://rancid-tomatillos-jsahim.vercel.app/" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
            </div>
          </div>
        </div>
        <div className='project-box'>
          <img className='project-image' src='/Hogwarts.png' alt='Battle of Hogwarts' />
          <div className='project-name'>
            <p className='project-title'>Battle of Hogwarts</p>
            <p className='project-description'>Battle of Hogwarts is a magical take on the classic game, Rock Paper Scissors.</p>
            <div className='tech'>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
            </div>
            <div className='connect-btns'>
              <a href="https://github.com/jsahim/battle-of-hogwarts" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
              <a href="https://jsahim.github.io/battle-of-hogwarts" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
            </div>
          </div>
        </div>
        <div className='project-box'>
          <img className='project-image' src='/Hotel.png' alt='Hotel Azuro' />
          <div className='project-name'>
            <p className='project-title'>Hotel Azuro</p>
            <p className='project-description'>Book your stay at the luxourous Hotel Azuro.</p>
            <div className='tech'>
              <div className='tech-item'>JavaScript</div>
              <div className='tech-item'>HTML</div>
              <div className='tech-item'>CSS</div>
              <div className='tech-item'>Mocha</div>
              <div className='tech-item'>Chai</div>
              <div className='tech-item'>Fetch API</div>
              <div className='tech-item'>Webpack</div>
            </div>
            <div className='connect-btns'>
              <a href="https://github.com/jsahim/hotel-azuro" target="_blank" rel="noreferrer"><button className='hub-btn'>GitHub<span class="material-symbols-outlined">open_in_new</span></button></a>
              <a href="https://hotel-azuro.vercel.app" target="_blank" rel="noreferrer"><button className='site-btn'>Website<span class="material-symbols-outlined">open_in_new</span></button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
