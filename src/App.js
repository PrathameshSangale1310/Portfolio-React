import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './components/About';
import Contact from './Contact';
import SkillsItem from './components/SkillsItem';
import { useState } from 'react';

function App() {
  const [isLightmode, setIsLightmode] = useState(false);

  const toggle = () => {
    setIsLightmode(!isLightmode);
  };

  

  return (
    <div style={{ backgroundColor: isLightmode ? "#dbd2d2bd" : "#0103299e" }}>
      <Navbar isLightmode={isLightmode} toggle={toggle} />
      <div className='container'>
        <section id="home" className="section-full">
          <Home isLightmode={isLightmode} />
        </section>
        <section id="about" className="section-full">
          <About isLightmode={isLightmode} />
        </section>
        <section id="skills" className="section-full skill" >
          <SkillsItem isLightmode={isLightmode} />
        </section>
        <section id="contact" className="section-full call">
          <Contact isLightmode={isLightmode}/>
        </section>
      </div>
    </div>
  );
}

export default App;
