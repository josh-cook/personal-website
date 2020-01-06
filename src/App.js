import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner';
import JoshText from './components/JoshText';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
        <header className="app-header">
          <div className="github-logo">
            <GithubCorner href="https://github.com/josh-cook" /> 
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
