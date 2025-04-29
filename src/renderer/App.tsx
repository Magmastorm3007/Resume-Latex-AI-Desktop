import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import StartupScreen from './components/StartupScreen/StartupScreen';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartupScreen />} />
        <Route path="/editor" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

