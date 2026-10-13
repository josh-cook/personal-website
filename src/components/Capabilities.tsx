const capabilities = [
  {
    number: '01',
    title: 'Development',
    description: 'Creative code, tools, and technology.',
    href: 'https://github.com/josh-cook',
  },
  {
    number: '02',
    title: 'Gamer',
    description: 'Challenge Generator for Binding Of Isaac',
    href: 'https://josh-cook.github.io/challenge-generator/',
  },
  {
    number: '03',
    title: 'Bass & music',
    description: 'Live sessions and sound.',
    href: 'https://soundcloud.com/user-231579091/sets/band-songs-1',
  },
]

export const Capabilities = () => (
  <>
    {capabilities.map((capability) => (
      <a className="capability" href={capability.href} key={capability.number}>
        <span className="capability-number">{capability.number}</span>
        <span className="capability-copy">
          <span className="capability-title">{capability.title}</span>
          <span className="capability-description">
            {capability.description}
          </span>
        </span>
        <span className="capability-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    ))}
  </>
)

export default Capabilities
