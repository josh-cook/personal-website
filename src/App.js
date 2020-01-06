import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner';
import JoshText from './components/JoshText';
import Content from './components/Content';
import BOI from './components/BindingOfIsaac';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
        <header className="app-header">
          <div className="menu">
            <Menu />
          </div>
          <div className="github-logo">
            <GithubCorner href="https://github.com/josh-cook" /> 
          </div>
        </header>

        <div className="content-area">
          <p>
            <JoshText />
          </p>
          <Content />
          <BOI />
        </div>
    </div>
  );
}

export default App;
