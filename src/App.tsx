import './App.css'
import { Brand, Content, Footer, TitleText } from './components'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Brand />
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
  )
}

export default App
