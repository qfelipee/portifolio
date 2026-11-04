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

const ids = links.map((l) => l.href.slice(1))

function Navbar() {
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState('')
  const [rolou, setRolou] = useState(() => window.scrollY > 8)

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

  // Destaca no menu a seção que está no meio da tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtivo(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Sombra na barra depois que a página rola; limpa o destaque no topo
  useEffect(() => {
    const aoRolar = () => {
      setRolou(window.scrollY > 8)
      if (window.scrollY < 200) setAtivo('')
    }
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Esc fecha o menu no celular
  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e) => {
      if (e.key === 'Escape') setAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  return (
    <header className={`navbar${rolou ? ' rolou' : ''}`}>
      <div className="navbar-marca">
        <a className="navbar-logo" href="#">Felipe</a>
        <BotaoCurriculo className="btn btn-outline btn-sm" label="Currículo" />
      </div>

      <nav
        id="menu-principal"
        className={`navbar-nav${aberto ? ' aberto' : ''}`}
        aria-label="Principal"
      >
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={ativo === l.href.slice(1) ? 'true' : undefined}
                onClick={() => setAberto(false)}
              >
                {l.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-acoes">
        <button
          className="icone-btn"
          onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}
          aria-label={tema === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
        >
          {tema === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="icone-btn navbar-toggle"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-principal"
        >
          {aberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
