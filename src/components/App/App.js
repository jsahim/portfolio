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
        <div className='headline'>
          <p className='hand-left'>☞</p>
          <h1>JEFF SAHIM</h1>
          <p className='hand-right'>☞</p>
        </div>
        <Skills />         
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
