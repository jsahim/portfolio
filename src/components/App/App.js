import './App.css';
import Navigation from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function App() {
  return (
    <>
      <aside>
        <Navigation />
      </aside>
      <main>
        <h1>JEFF SAHIM</h1>
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
