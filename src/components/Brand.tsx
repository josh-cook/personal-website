import { useState, useEffect } from 'react'

const PHRASES = [
  'Joshua Cook',
  'Just Coding',
  'Jump Cancel',
  'Jukebox Companion',
]

const MAIN_BRAND = 'JC.'

export const Brand = () => {
  const [index, setIndex] = useState<number | null>(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (index === null) return

    const timer = setTimeout(() => {
      setIndex((current) => {
        if (!isHovered && current === PHRASES.length - 1) return null
        return (current + 1) % PHRASES.length
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [index, isHovered])

  const start = () => {
    setIsHovered(true)
    setIndex(0)
  }

  const stop = () => {
    setIsHovered(false)
    setIndex(null)
  }

  return (
    <p
      className="brand"
      aria-label="Joshua Cook home"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      tabIndex={0}
    >
      <span className="brand-text" key={index ?? 'jc'} aria-hidden="true">
        {index === null ? MAIN_BRAND : PHRASES[index]}
      </span>
    </p>
  )
}

export default Brand
