import Contato from "./components/Contato"
import Habilidades from "./components/Habilidades"
import Hero from "./components/Hero"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"
import './App.css'
import Navbar from "./components/Navbar"
import Reveal from "./components/Reveal"
import Trajetoria from './components/Trajetoria'


function App() {
  return (
  <>
   
<Navbar />  
<Hero />
<Reveal><Sobre /></Reveal>
<Reveal><Trajetoria /></Reveal>
<Reveal><Habilidades /></Reveal>
<Reveal><Projetos /></Reveal>
<Reveal><Contato /></Reveal>
  </>
  )
}

export default App