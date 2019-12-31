import React from 'react';
import './App.css';
import HomePageImage from './HomepageImage';

function App() {
  return (
    <div className="app">
        <header className="app-header">
          <HomePageImage />
          <p>
            Welcome To Josh's Website
          </p>
        </header>
    </div>
  );
}

export default App;
