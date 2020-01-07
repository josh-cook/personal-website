import React from 'react';
import './App.css';
import JoshText from './components/JoshText';
import Content from './components/Content';
import Links from './components/Links';
import BOI from './components/BindingOfIsaac';

function App() {
  return (
    <div className="app">
        <header className="app-header">
          <div className="links">
            <Links />
          </div>
        </header>

        <div className="content-area">
          <JoshText />
          <Content />
          <BOI />
        </div>
    </div>
  );
}

export default App;
