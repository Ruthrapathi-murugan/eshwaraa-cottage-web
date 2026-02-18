
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';
import Footer from './components/Footer';
import IntroVideo from './components/IntroVideo';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('introSeen');
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introSeen', 'true');
  };

  if (showIntro) {
    return <IntroVideo onComplete={handleIntroComplete} />;
  }

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
