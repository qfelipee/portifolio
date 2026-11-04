import foto from '../assets/foto.jpg'

function Sobre() {
  return (
    <section id="sobre">
      <h2>Sobre mim</h2>

      <div className="sobre-grid">
        <div className="sobre-texto">
          <p>
            Sou o Felipe, estudante de Sistemas de Informação na SPTech e
            estagiário na Vivo, onde desenvolvo soluções back-end com Java e
            Spring Boot e também front-end com React e TypeScript. Gosto de
            entender o problema de verdade antes de escrever a primeira linha de
            código, e de levar a solução até o ar.
          </p>
          <p>
            Cresci na Zona Leste de São Paulo e comecei a trabalhar aos 16. Desde
            cedo aprendi que o que mais me faz evoluir é a prática: por isso
            vários dos projetos aqui nasceram de uma necessidade real, de
            clientes e de pessoas próximas, e não de um exercício.
          </p>
          <p>
            Hoje busco crescer como desenvolvedor back-end, construindo sistemas
            bem estruturados e seguros, ao lado de quem tem mais experiência.
          </p>
        </div>

        <figure className="sobre-foto">
          <img src={foto} alt="Retrato de Felipe" width="200" height="200" />
        </figure>
      </div>
    </section>
  )
}

export default Sobre
