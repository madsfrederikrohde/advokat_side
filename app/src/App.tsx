import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advokatsamfundet" element={<LegalPage variant="advokatsamfundet" />} />
          <Route path="/politikker" element={<LegalPage variant="politikker" />} />
          <Route path="/forretningsbetingelser" element={<LegalPage variant="forretningsbetingelser" />} />
          <Route path="/gdpr" element={<LegalPage variant="gdpr" />} />
          <Route path="/cookies" element={<LegalPage variant="cookies" />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
