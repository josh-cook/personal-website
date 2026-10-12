import "./App.css";
import { Content, TitleText, Links } from "./components";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Links />
      </header>

      <div className="content-area">
        <TitleText />
        <Content />
      </div>
    </div>
  );
}

export default App;