import { useContext } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/intro/Intro';
import Projects from './Components/Projects/Projects';
import Toggle from './Components/Toggle/Toggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  > 
  <Intro/>
  <About/>
  <Projects/>
  <Contact/>
  <Toggle/>
</div>
  );
} 

export default App;
