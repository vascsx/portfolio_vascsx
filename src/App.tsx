import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
        <Navbar/>
     <Resume />
      <Home/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
