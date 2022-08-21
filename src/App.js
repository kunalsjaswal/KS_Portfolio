import './App.css';
import Contact from './components/Contact';
import LandPage from './components/LandPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <LandPage/>
      <Skills/>
      {/* <Projects/> */}
      <Contact/>
    </div>
  );
}

export default App;
