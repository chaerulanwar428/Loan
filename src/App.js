import './App.css';
import '@fontsource/inter'; // Mengimpor font Inter
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Loan from './pages/Loan';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Loan" element={<Loan />} />
        {/* Redirect any unknown routes to the home page */}
      </Routes>
    </Router>
  );
}

export default App;