import { useEffect, useRef, useState } from 'react'

function Reveal({ children }) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // threshold 0 + margem: dispara mesmo em seções muito altas (ex.: Projetos no celular)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${visivel ? ' reveal-visivel' : ''}`}>
      {children}
    </div>
  )
}

export default Reveal
