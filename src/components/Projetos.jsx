import ProjetoCard from './ProjetoCard'
import printAgape from '../assets/agape-dash.webp'
import printAgape2 from '../assets/agape-users.webp'
import printLili from '../assets/lili-home.webp'
import printLili2 from '../assets/lili-footer.webp'
import printEscola from '../assets/escolas-home.webp'
import printEscola2 from '../assets/escola-maquinas.webp'
import printVeigh from '../assets/veigh-home.webp'
import printVeigh2 from '../assets/veigh-eu.webp'
import juhome from '../assets/ju-home.webp'
import fesonho from '../assets/fe-sonho.webp'

const projetos = [
  {
    titulo: 'Agape: Gestão Financeira para Igreja',
    contexto: 'Cliente real',
    descricao:
      'Sistema full-stack de gestão financeira criado a partir de uma necessidade real: a igreja controlava entradas e saídas manualmente, o que dificultava a gestão, a visão de longo prazo e a geração de insights. Desenvolvido do zero, com gerenciamento de permissões, entradas e saídas e dashboards comparativos.',
    tecnologias: ['React', 'Java', 'Spring Boot', 'SQL', 'Railway', 'Vercel'],
    imagens: [printAgape, printAgape2],
    // Sistema interno: as telas ficam só na miniatura (sem ampliar), para não expor detalhes como URL e logotipo.
    // Para liberar a ampliação, troque por `ampliavel: true` (ou apague esta linha).
    ampliavel: false,
    obs: 'Sistema de uso interno: por questões internas, não é possível exibi-lo em funcionamento. As telas acima usam dados fictícios.',
  },
  {
    titulo: 'Lili Decorado',
    contexto: 'Cliente real',
    descricao:
      'Landing page para a microempreendedora Lili Decorado, um negócio de papelaria personalizada e lembrancinhas exclusivas. A cliente precisava apresentar seu trabalho online de forma mais profissional, gerar conexão com possíveis clientes e facilitar o pedido de orçamento direto pelo WhatsApp.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagens: [printLili, printLili2],
    demo: 'https://lili-decorado.vercel.app/',
  },
  {
    titulo: 'SafeClass',
    contexto: 'Acadêmico',
    descricao:
      'Monitora os componentes de hardware dos computadores de escolas públicas e alerta quando algo sai do esperado, para que a escola descubra a causa raiz antes de o problema parar as aulas. Inclui modelo de previsão com inteligência artificial.',
    tecnologias: ['Java', 'Python', 'Docker', 'AWS EC2', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Node.js'],
    imagens: [printEscola, printEscola2],
    obs: 'Projeto acadêmico sem uso real.',
  },
  {
    titulo: 'Project Veigh',
    contexto: 'Acadêmico',
    descricao:
      'Website interativo com formulário de cadastro e quiz temático. Desenvolvido com foco em CRUD e banco de dados, reforçando práticas de desenvolvimento web e lógica de programação.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    imagens: [printVeigh, printVeigh2],
    obs: 'Projeto acadêmico sem deploy.',
  },
  {
    titulo: '1 ano de namoro',
    contexto: 'Pessoal',
    descricao:
      'Site que celebra meu primeiro ano de namoro: uma landing page simples, feita com tecnologias simples, para misturar sentimento com aprendizado. Foi o primeiro projeto que coloquei no ar, e lidar com o deploy foi o primeiro grande desafio.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagens: [juhome, fesonho],
    demo: 'https://qfelipee.github.io/1ano-felipe-julia/',
  },
]

function Projetos() {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="projetos-lista">
        {projetos.map((p) => (
          <ProjetoCard key={p.titulo} {...p} />
        ))}
      </div>
    </section>
  )
}

export default Projetos
