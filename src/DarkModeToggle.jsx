import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DARK_MODE_KEY = 'darkModeEnabled';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem(DARK_MODE_KEY);
    return saved === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem(DARK_MODE_KEY, darkMode);
  }, [darkMode]);

  return (
    <div className="toggle-container" tabIndex={0} aria-label="Toggle dark mode">
      <label className="switch" title="Toggle Dark Mode">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((prev) => !prev)}
          aria-checked={darkMode}
        />
        <span className="slider">
          {darkMode ? <span className="icon moon">🌙</span> : <span className="icon sun">☀️</span>}
        </span>
      </label>
    </div>
  );
}
