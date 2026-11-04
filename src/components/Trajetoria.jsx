import { useEffect, useState } from 'react'

import vivoLogo from '../assets/vivo.png'
import sptechLogo from '../assets/sptech.jpg'
import faculdade2Logo from '../assets/fatec.png'


/* ---------- ícone do mercado ---------- */
function IconeMercado() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6" />
    </svg>
  )
}

/* ---------- EDITE AQUI ----------
   Datas no formato AAAA-MM-DD.
   fim: null => ainda está nisso; conta até hoje automaticamente. */
const etapas = [
  {
    idade: '16 anos',
    titulo: 'Repositor de mercado',
    texto: 'Meu primeiro emprego, onde comecei a construir minha independência.',
    inicio: '2024-01-22',
    fim: '2024-07-15',
    logos: [{ nome: 'Mercado', icone: <IconeMercado /> }],
  },
  {
    idade: '17 anos',
    titulo: 'Aprovado em 2 faculdades',
    texto: 'Comecei na SPTech e também fui aprovado na Fatec.',
    inicio: '2025-01-23', // início na SPTech
    fim: null,
    sufixo: 'na SPTech',
    faculdades: [
      { nome: 'SPTech', logo: sptechLogo, escolhida: true, status: 'Cursando' },
      { nome: 'Fatec', logo: faculdade2Logo, status: 'Aprovado' },
    ],
  },
  {
    idade: '18 anos',
    titulo: 'Estágio na Vivo',
    texto: 'A porta de entrada para a tecnologia dentro de uma grande empresa.',
    inicio: '2026-03-13',
    fim: null,
    logos: [{ nome: 'Vivo', imagem: vivoLogo }],
  },
]

/* ---------- contagem de meses ---------- */
function mesesEntre(inicio, fim) {
  const a = new Date(`${inicio}T00:00:00`)
  const b = fim ? new Date(`${fim}T00:00:00`) : new Date()
  let meses = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
  if (b.getDate() < a.getDate()) meses-- // só conta mês completo
  return Math.max(0, meses)
}

function formatarDuracao(meses) {
  if (meses < 1) return 'menos de 1 mês'
  const anos = Math.floor(meses / 12)
  const resto = meses % 12
  const partes = []
  if (anos) partes.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`)
  if (resto) partes.push(`${resto} ${resto === 1 ? 'mês' : 'meses'}`)
  return partes.join(' e ')
}

/* ---------- peças ---------- */
function Logo({ nome, imagem, icone }) {
  const [falhou, setFalhou] = useState(false)
  return (
    <div className="logo-tile" title={nome}>
      {icone ? (
        icone
      ) : falhou ? (
        <span className="logo-iniciais">{nome.slice(0, 2).toUpperCase()}</span>
      ) : (
        <img src={imagem} alt={`Logo ${nome}`} onError={() => setFalhou(true)} />
      )}
    </div>
  )
}

function Duracao({ inicio, fim, sufixo }) {
  const texto = formatarDuracao(mesesEntre(inicio, fim))
  return (
    <div className="timeline-meta">
      <span className="pill">{sufixo ? `${texto} ${sufixo}` : texto}</span>
      {!fim && <span className="pill pill-ativo">Em andamento</span>}
    </div>
  )
}

/* ---------- componente ---------- */
function Trajetoria() {
  // força recálculo se a aba ficar aberta por muito tempo
  const [, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000 * 60 * 60 * 12)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="trajetoria">
      <h2>Minha trajetória</h2>
      <ol className="timeline">
        {etapas.map((e) => (
          <li key={e.idade}>
            <span className="timeline-idade">{e.idade}</span>

            <div className="timeline-linha">
              {e.logos?.map((l) => (
                <Logo key={l.nome} nome={l.nome} imagem={l.imagem} icone={l.icone} />
              ))}
              <div className="timeline-info">
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </div>
            </div>

            {e.faculdades && (
              <div className="faculdades">
                {e.faculdades.map((f) => (
                  <div key={f.nome} className={`faculdade${f.escolhida ? ' escolhida' : ''}`}>
                    <Logo nome={f.nome} imagem={f.logo} />
                    <div>
                      <strong>{f.nome}</strong>
                      <small>{f.status}</small>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Duracao inicio={e.inicio} fim={e.fim} sufixo={e.sufixo} />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Trajetoria