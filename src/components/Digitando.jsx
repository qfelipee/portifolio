import { useEffect, useState } from 'react'

const prefereMenosMovimento = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Digitando({ texto, velocidade = 55 }) {
  // Quem pediu menos movimento vê a frase inteira de uma vez
  const [qtd, setQtd] = useState(() => (prefereMenosMovimento() ? texto.length : 0))

  useEffect(() => {
    if (qtd >= texto.length) return
    const t = setTimeout(() => setQtd(qtd + 1), velocidade)
    return () => clearTimeout(t)
  }, [qtd, texto, velocidade])

  return (
    <>
      {/* Leitores de tela leem a frase completa, e não letra por letra */}
      <span className="sr-only">{texto}</span>
      <span aria-hidden="true">
        <span>{texto.slice(0, qtd)}</span>
        <span className="cursor">|</span>
        <span className="digitando-resto">{texto.slice(qtd)}</span>
      </span>
    </>
  )
}

export default Digitando
