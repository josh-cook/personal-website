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
          <h2 id="capabilities-title">Made of many things.</h2>
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
          A problem solver first, whether that's puzzles, writing code or
          pulling things apart to see how they work.
        </p>
        <p>
          Lately, that includes figuring out how to make AI useful. Exploring
          new tools, building little experiments and finding ways to use them to
          solve real problems, rather than just for the sake of it. I like
          learning by doing, trying things out and seeing what sticks. There is
          usually more than one way to solve any problem, and finding a better
          one is most of the fun.
        </p>
      </section>
    </>
  )
}

export default Content
