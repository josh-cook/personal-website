import { useState, useEffect } from 'react'

const PHRASES = [
  'Just Coding',
  'Jump Cancel',
  'Jukebox Companion',
  'Joshua Cook',
]

const MAIN_BRAND = 'JC.'

const SEQUENCE = [MAIN_BRAND, ...PHRASES]

export const Brand = () => {
  const [index, setIndex] = useState<number | null>(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (index === null) return

    const timer = setTimeout(() => {
      setIndex((current) => {
        if (!isHovered && current === SEQUENCE.length - 1) return null
        return (current + 1) % SEQUENCE.length
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
        {index === null ? MAIN_BRAND : SEQUENCE[index]}
      </span>
    </p>
  )
}

export default Brand
