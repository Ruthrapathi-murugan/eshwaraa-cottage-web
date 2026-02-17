
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
