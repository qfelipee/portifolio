import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa'

const prefereMenosMovimento = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- imagem ampliada (usa o <dialog> nativo: Esc e foco já funcionam) ---------- */
function Lightbox({ imagens, titulo, indice, aberto, onMudar, onFechar }) {
  const ref = useRef(null)
  const total = imagens.length

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (aberto && !d.open) d.showModal()
    if (!aberto && d.open) d.close()
  }, [aberto])

  const anterior = () => onMudar((indice - 1 + total) % total)
  const proximo = () => onMudar((indice + 1) % total)

  const aoTeclar = (e) => {
    if (e.key === 'ArrowLeft') anterior()
    if (e.key === 'ArrowRight') proximo()
  }

  // Clicar fora da imagem e dos botões fecha
  const aoClicar = (e) => {
    if (!e.target.closest('img, button')) onFechar()
  }

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={`Telas do projeto ${titulo}`}
      onClose={onFechar}
      onKeyDown={aoTeclar}
      onClick={aoClicar}
    >
      {aberto && (
        <div className="lightbox-corpo">
          <button className="lightbox-btn lightbox-fechar" onClick={onFechar} aria-label="Fechar">
            <FaTimes />
          </button>

          {total > 1 && (
            <button className="lightbox-btn lightbox-ant" onClick={anterior} aria-label="Tela anterior">
              <FaChevronLeft />
            </button>
          )}

          <img
            src={imagens[indice]}
            alt={`Tela ${indice + 1} de ${total} do projeto ${titulo}`}
          />

          {total > 1 && (
            <button className="lightbox-btn lightbox-prox" onClick={proximo} aria-label="Próxima tela">
              <FaChevronRight />
            </button>
          )}

          <p className="lightbox-legenda">
            {titulo}, tela {indice + 1} de {total}
          </p>
        </div>
      )}
    </dialog>
  )
}

/* ---------- carrossel ---------- */
function Carrossel({ imagens, titulo, ampliavel = true }) {
  const trilho = useRef(null)
  const [atual, setAtual] = useState(0)
  const [ampliado, setAmpliado] = useState(null) // índice da imagem aberta, ou null
  const total = imagens.length

  const irPara = (i) => {
    const el = trilho.current
    if (!el) return
    const alvo = Math.min(Math.max(i, 0), total - 1)
    el.scrollTo({
      left: alvo * el.clientWidth,
      behavior: prefereMenosMovimento() ? 'auto' : 'smooth',
    })
  }

  // A rolagem (dedo, mouse ou setas) é a fonte da verdade: daqui sai o ponto ativo
  const aoRolar = (e) => {
    const el = e.currentTarget
    setAtual(Math.round(el.scrollLeft / el.clientWidth))
  }

  const aoTeclar = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      irPara(atual - 1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      irPara(atual + 1)
    }
  }

  return (
    <div
      className="carrossel"
      role="group"
      aria-roledescription="carrossel"
      aria-label={`Telas do projeto ${titulo}`}
    >
      <div className="carrossel-palco">
        <div
          className="carrossel-trilho"
          ref={trilho}
          onScroll={aoRolar}
          onKeyDown={aoTeclar}
          tabIndex={0}
        >
          {imagens.map((src, i) => {
            const img = (
              <img
                src={src}
                alt={`Tela ${i + 1} do projeto ${titulo}`}
                loading="lazy"
                decoding="async"
              />
            )
            return ampliavel ? (
              <button
                type="button"
                key={src}
                className="carrossel-slide"
                onClick={() => setAmpliado(i)}
                aria-label={`Ampliar tela ${i + 1} de ${total}`}
              >
                {img}
              </button>
            ) : (
              <div key={src} className="carrossel-slide carrossel-slide--fixo">
                {img}
              </div>
            )
          })}
        </div>

        {ampliavel && (
          <span className="carrossel-zoom" aria-hidden="true">
            <FaExpand />
          </span>
        )}

        {total > 1 && (
          <>
            <button
              className="carrossel-seta carrossel-ant"
              onClick={() => irPara(atual - 1)}
              disabled={atual === 0}
              aria-label="Tela anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              className="carrossel-seta carrossel-prox"
              onClick={() => irPara(atual + 1)}
              disabled={atual === total - 1}
              aria-label="Próxima tela"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="carrossel-pontos">
          {imagens.map((src, i) => (
            <button
              type="button"
              key={src}
              className="carrossel-ponto"
              onClick={() => irPara(i)}
              aria-label={`Ir para a tela ${i + 1}`}
              aria-current={i === atual}
            />
          ))}
        </div>
      )}

      {ampliavel && (
        <Lightbox
          imagens={imagens}
          titulo={titulo}
          indice={ampliado ?? 0}
          aberto={ampliado !== null}
          onMudar={setAmpliado}
          onFechar={() => setAmpliado(null)}
        />
      )}
    </div>
  )
}

export default Carrossel
