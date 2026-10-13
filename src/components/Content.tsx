import Capabilities from './Capabilities'

export const Content = () => {
  return (
    <>
      <section
        className="capabilities"
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="section-heading">
          <h2 id="capabilities-title">A little bit of everything.</h2>
          <span>01—03</span>
        </div>
        <div className="capability-list">
          <Capabilities />
        </div>
      </section>

      <section className="note" id="about" aria-labelledby="note-title">
        <p className="eyebrow">A note from me</p>
        <h2 id="note-title">I like figuring things out.</h2>
        <p>
          I like problem solving with all things technology, whether that's
          writing code or pulling things apart to see how they work.
        </p>
      </section>
    </>
  )
}

export default Content
