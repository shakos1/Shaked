import React from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function App() {
  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '60px', background: 'var(--header-bg, #fff)' }}>
      {/* User profile icon would go here */}
      <DarkModeToggle />
    </header>
  );
}
