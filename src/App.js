import React from 'react';
import './App.css';
import './HomepageImage';
import HomePageImage from './HomepageImage';

function App() {
  return (
    <div className="app">
      <HomePageImage />

      <div>
        <header className="app-header">
          <p>
            Welcome To Josh's Website
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
