import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Placeholder routes */}
            <Route path="/markets" element={<ComingSoon page="Markets" />} />
            <Route path="/compare" element={<ComingSoon page="Compare" />} />
            <Route path="/research" element={<ComingSoon page="Research" />} />
            <Route path="/methodology" element={<ComingSoon page="Methodology" />} />
            <Route path="/about" element={<ComingSoon page="About" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

// Placeholder component for unimplemented pages
function ComingSoon({ page }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{page}</h2>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}

export default App;
