import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
     <Navbar/>
     <Resume />
      <Home/>
      <Projects/>
      <Contact/> 
    </div>
  );
}

export default App;
