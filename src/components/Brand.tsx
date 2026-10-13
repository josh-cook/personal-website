import { useState, useEffect } from 'react'

const PHRASES = [
  'Just Coding',
  'Jump Cancel',
  'Jukebox Companion',
  'Joshua Cook',
]

export const Brand = () => {
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    if (index === null) return
    const timer = setTimeout(() => setIndex((index + 1) % PHRASES.length), 1500)
    return () => clearTimeout(timer)
  }, [index])

  const start = () => setIndex(0)
  const stop = () => setIndex(null)

  return (
    <a
      className="brand"
      href="#top"
      aria-label="Joshua Cook home"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <span className="brand-text" key={index ?? 'jc'} aria-hidden="true">
        {index === null ? 'JC.' : PHRASES[index]}
      </span>
    </a>
  )
}

export default Brand
