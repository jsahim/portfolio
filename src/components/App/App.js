import './App.css';
import Navigation from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

function App() {
  return (
    <>
      <aside>
        <Navigation />
      </aside>
      <main>
        <a href="#skills">
          <div className='head-container'>
            <p className='overline'>Hello there, I'm</p>
            <div className='headline'>
              <p className='hand-left'>☞</p>
              <h1 className='my-name'>JEFF SAHIM</h1>
              <p className='hand-right'>☞</p>
            </div>
            <p className='about'>Front End Software Developer</p>
          </div>
        </a>
        <div className='content'>
          <Skills />         
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
