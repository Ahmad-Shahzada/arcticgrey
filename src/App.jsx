import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Build from './pages/Build';
import Migrate from './pages/Migrate';
import Markiting from './pages/Markiting';
import Optimize from './pages/Optimize';
import Apps from './pages/Apps';
import B2B from './pages/B2B';
import POS from './pages/Pox';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/marketing" element={<Markiting />} />
        <Route path="/migrate" element={<Migrate />} />
        <Route path="/optimize" element={<Optimize />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/pos" element={<POS />} />
      </Routes>
    </Router>
  );
}

export default App;