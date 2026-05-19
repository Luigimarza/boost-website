import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AllProjectsPage from './pages/AllProjectsPage';
import EventPage from './pages/EventPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import Footer from './components/Footer';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <main style={{ background: '#111010', overflowX: 'clip' }}>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/progetti" element={<AllProjectsPage />} />
        <Route path="/progetti/:slug" element={<ProjectPage />} />
        <Route path="/eventi/:slug" element={<EventPage />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/lavora-con-noi" element={<CareersPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </main>
  );
}
