import "./App.css";
import { Content, Footer, TitleText } from "./components";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <a className="brand" href="#top" aria-label="Joshua Cook home">
          JC.
        </a>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="site-title">
          <TitleText />
          <div className="hero-bottom">
            <p>Based in Manchester</p>
            <a href="#capabilities">
              <span aria-hidden="true">↓</span> Scroll to explore
            </a>
          </div>
        </section>
        <Content />
        <Footer />
      </main>
    </div>
  );
}

export default App;