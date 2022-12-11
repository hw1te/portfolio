import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contacts" element={<Contacts />} />
        <Route path="/portfolio/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
