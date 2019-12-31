import React from 'react';
import './App.css';
import HomePageImage from './components/HomepageImage';
import JoshText from './components/JoshText';
import Content from './components/Content';
import GithubLinkImage from './components/GithubLinkImage';


function App() {
  return (
    <div className="app">
        <header className="app-header">
          <div className="logo">
            <HomePageImage />
          </div>
          <div className="github-logo">
            <GithubLinkImage /> 
          </div>
        </header>

        <div className="content-area">
          <p>
            <JoshText />
          </p>
          <Content />
        </div>
    </div>
  );
}

export default App;
