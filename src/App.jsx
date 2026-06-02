import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Team from './pages/Team.jsx';
import Gallery from './pages/Gallery.jsx';
import Reviews from './pages/Reviews.jsx';
import Blog from './pages/Blog.jsx';

function MobileDetector() {
  useEffect(() => {
    function checkMobile() {
      const isMobile =
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        document.body.classList.add('react-mobile');
      } else {
        document.body.classList.remove('react-mobile');
      }
    }

    checkMobile();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
      document.body.classList.remove('react-mobile');
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <MobileDetector />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/avaliacoes" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <FloatingCTA />
      <Footer />
    </>
  );
}