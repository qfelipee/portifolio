import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import BotaoCurriculo from './BotaoCurriculo'

const links = [
  { nome: 'Sobre', href: '#sobre' },
  { nome: 'Trajetória', href: '#trajetoria' },
  { nome: 'Hard Skills', href: '#habilidades' },
  { nome: 'Projetos', href: '#projetos' },
  { nome: 'Contato', href: '#contato' },
]

function Navbar() {
  const [aberto, setAberto] = useState(false)

  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema')
    if (salvo) return salvo
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    localStorage.setItem('tema', tema)
  }, [tema])

  return (
    <header className="navbar">
<div className="navbar-marca">
  <a className="navbar-logo" href="#">Felipe</a>
  <BotaoCurriculo className="btn btn-outline btn-sm" label="Currículo" />
</div>
      <nav className={`navbar-nav ${aberto ? 'aberto' : ''}`}>
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAberto(false)}>{l.nome}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-acoes">
        <button
          className="tema-toggle"
          onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}
          aria-label="Alternar tema claro ou escuro"
        >
          {tema === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="navbar-toggle"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          {aberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Navbar