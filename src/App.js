import React from "react";
import "./App.css";
import JoshText from "./components/JoshText";
import Content from "./components/Content";
import Links from "./components/Links";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Links />
      </header>

      <div className="content-area">
        <JoshText />
        <Content />
      </div>
    </div>
  );
}

export default App;
