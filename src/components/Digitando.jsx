import { useEffect, useState } from 'react'

function Digitando({ texto, velocidade = 60 }) {
  const [qtd, setQtd] = useState(0)

  useEffect(() => {
    if (qtd >= texto.length) return
    const t = setTimeout(() => setQtd(qtd + 1), velocidade)
    return () => clearTimeout(t)
  }, [qtd, texto, velocidade])

  return (
    <>
      <span>{texto.slice(0, qtd)}</span>
      <span className="cursor">|</span>
      <span className="digitando-resto">{texto.slice(qtd)}</span>
    </>
  )
}

export default Digitando