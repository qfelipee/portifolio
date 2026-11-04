import Digitando from './Digitando'
import BotaoCurriculo from './BotaoCurriculo'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <p className="hero-tag">Olá, eu sou o Felipe</p>

      <h1>
        <Digitando texto="O sucesso é a soma de pequenos esforços repetidos dia após dia." />
      </h1>

      <p className="hero-sub">
        Estudante de Sistemas de Informação na SPTech e estagiário na Vivo. Foco
        em back-end com Java e Spring Boot, com prática em front-end com React.
      </p>

      <div className="hero-acoes">
        <a className="btn" href="#projetos">Ver projetos</a>
        <BotaoCurriculo />
      </div>
    </section>
  )
}

export default Hero
