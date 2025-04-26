import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import BlogHome from './components/AboutProjects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Resume />
          <Home />
          <Projects />
          <Contact />
        </>} />
        <Route path="/blog" element={<BlogHome />} />
      </Routes>
    </Router>
  );
}

export default App;