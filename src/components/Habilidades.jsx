import {
  FaReact, FaJs, FaJava, FaPlug, FaCloud, FaAws, FaDocker,
  FaGitAlt, FaSyncAlt, FaToggleOn, FaCubes, FaPuzzlePiece,
  FaDatabase, FaServer, FaPython, FaNode,
} from 'react-icons/fa'
import { SiSpringboot, SiTypescript, SiPostgresql, SiMysql } from 'react-icons/si'


const grupos = [
  {
    titulo: 'Front-end',
    itens: [
      { nome: 'React', icone: FaReact },
      { nome: 'JavaScript', icone: FaJs },
      { nome: 'TypeScript', icone: SiTypescript },
    ],
  },
  {
    titulo: 'Back-end e servidores',
    itens: [
      { nome: 'Java', icone: FaJava },
      { nome: 'Spring Boot', icone: SiSpringboot },
      { nome: 'API REST', icone: FaPlug },
      { nome: 'WebLogic', icone: FaServer },
      { nome: 'Python', icone: FaPython },
      { nome: 'Node.js', icone: FaNode },
    ],
  },
  {
    titulo: 'Cloud e DevOps',
    itens: [
      { nome: 'Azure DevOps', icone: FaCloud },
      { nome: 'AWS EC2', icone: FaAws },
      { nome: 'CI/CD (pipeline)', icone: FaSyncAlt },
      { nome: 'Docker', icone: FaDocker },
      { nome: 'Feature Flag', icone: FaToggleOn },
      { nome: 'Git', icone: FaGitAlt },
    ],
  },
  {
    titulo: 'Arquitetura',
    itens: [
      { nome: 'Microsserviços', icone: FaCubes },
      { nome: 'Micro front-ends', icone: FaPuzzlePiece },
    ],
  },
  {
    titulo: 'Bancos de dados',
    itens: [
      { nome: 'SQL', icone: SiMysql },
      { nome: 'Oracle SQL', icone: FaDatabase },
      { nome: 'PostgreSQL', icone: SiPostgresql },
    ],
  },
]

function Habilidades() {
  return (
    <section id="habilidades">
      <h2>Hard Skills</h2>
      <div className="skills-grupos">
        {grupos.map((g) => (
          <div key={g.titulo}>
            <h3>{g.titulo}</h3>
            <ul className="skills">
              {g.itens.map((item) => {
                const Icone = item.icone
                return (
                  <li key={item.nome}>
                    <Icone aria-hidden="true" /> {item.nome}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Habilidades
