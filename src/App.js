import React from 'react';
import './App.css';
import HomePageImage from './components/HomepageImage';
import Content from './components/Content';


function App() {
  return (
    <div className="app">
        <div className="logo">
          <HomePageImage />
        </div>
        
        <header className="app-header">
          <Content />
        </header>
    </div>
  );
}

export default App;
