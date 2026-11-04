import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Trajetoria from './components/Trajetoria'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
      <a className="skip-link" href="#sobre">Pular para o conteúdo</a>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Sobre /></Reveal>
        <Reveal><Trajetoria /></Reveal>
        <Reveal><Habilidades /></Reveal>
        <Reveal><Projetos /></Reveal>
        <Reveal><Contato /></Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
