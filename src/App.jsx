import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<Navigate to="/#about" replace />} />
              <Route path="/services" element={<Navigate to="/#services" replace />} />
              <Route path="/equipe" element={<Navigate to="/#team" replace />} />
              <Route path="/avant-apres" element={<Navigate to="/#testimonials" replace />} />
              <Route path="/conseils" element={<Navigate to="/#advice" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
