import React, { useState } from 'react';
import './App.css';

function App() {
  const [showRose, setShowRose] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <h1>Happy Rose Day, My Love! 🌹</h1>
        <p>To the one who makes my life bloom...</p>
      </header>
      <main className="main-content">
        <button className="rose-button" onClick={() => setShowRose(true)}>Get Your Rose</button>
        {showRose && (
          <div className="rose-container animate">
            <div className="rose">
              <div className="petal petal1"></div>
              <div className="petal petal2"></div>
              <div className="petal petal3"></div>
              <div className="stem"></div>
              <div className="leaf leaf-left"></div>
              <div className="leaf leaf-right"></div>
            </div>
          </div>
        )}
        <p className="message">
          On this special day, I want to give you a rose as a symbol of my love and appreciation for you. You are the most beautiful flower in the garden of my life. Happy Rose Day, my love! 💖
        </p>
        <p className="signature">With all my love,<br />Your Banda</p>
      </main>
      <footer className="footer">
        <p>Made with ❤️ by AKSHUUUUU</p>
      </footer>
    </div>
  );
}

export default App;