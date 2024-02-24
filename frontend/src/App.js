
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Slides from './pages/Slides';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/slides" element={<Slides />} />
    </Routes>
  );
}

export default App;
