import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './styles/Body.css';
import './styles/Blogs.css';
import './styles/Contact.css';
import './styles/Experience.css';
import './styles/Header.css';
import './styles/Gallery.css';
import './styles/Portfolio.css';
import './styles/Skills.css';
import './styles/About.css';
import './styles/Menu.css';

// Lazy load pages
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Experience = lazy(() => import('./components/pages/Experience'));
const Folder = lazy(() => import('./components/pages/Folder'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Skills = lazy(() => import('./components/pages/Skills'));
const Menu = lazy(() => import('./components/pages/Menu'));
const Gallery = lazy(() => import('./components/pages/Gallery')); 
const Version = lazy(() => import('./components/pages/Version'));
const Resume = lazy(() => import('./components/pages/Resume'));



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/folder" element={<Folder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/version" element={<Version />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
