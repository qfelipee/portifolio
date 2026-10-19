import ProjetoCard from './ProjetoCard'
import printAgape from '../assets/agape-dash.jpg'
import printAgape2 from '../assets/agape-users.jpg'
import printLili from '../assets/lili-home.png'
import printLili2 from '../assets/lili-footer.png'
import juhome from '../assets/ju-home.png'
import fesonho from '../assets/fe-sonho.png'
import printEscola from '../assets/escolas-home.jpg'
import printEscola2 from '../assets/escola-maquinas.jpg'
import printVeigh from '../assets/veigh-home.png'
import printVeigh2 from '../assets/veigh-eu.png'



const projetos = [
  {
    titulo: 'Lili Decorado',
    descricao: 'Desenvolvi uma landing page para a microempreendedora Lili Decorado, um negócio de papelaria personalizada e lembrancinhas exclusivas. A cliente precisava de uma forma mais profissional de apresentar seu trabalho online, gerar conexão com possíveis clientes e facilitar o processo de orçamento diretamente pelo WhatsApp.',
    tecnologias: ['HTML', 'CSS', 'Java Script'],
    imagens: [printLili, printLili2],
    demo: 'https://lili-decorado.vercel.app/',
  },
  {
    titulo: 'Agape: Gestão Financeira para Igreja',
    descricao: 'Desenvolvimento de um sistema full-stack de gestão financeira para uma igreja, criado a partir de uma necessidade real onde a igreja controla seus gastos e ganhos de forma manual, e isso atrapalhava o gerenciamento, visões a longo prazo e insights valiosos, a ideia foi o sistema de gerenciamento financeiro desenvolvido do zero, com gerenciamento de permissões, entradas e saídas, dashboards comparativas e demais funcionalidades.',
    tecnologias: ['React', 'Java', 'Spring Boot', 'SQL', 'Railway', 'Vercel'],
    imagens: [printAgape, printAgape2],
    obs: 'Sistema de uso interno: por questões internas, não é possível exibi-lo em funcionamento. As telas acima usam dados fictícios.',
  },
  {
    titulo: '1 ano de namoro',
    descricao: 'Desenvolvimento de um Site que comemora meu 1 ano de namoro ao lado da minha namorada, é uma landing page simples feita com tecnologias simples, o propósito foi misturar o sentimento e o amor junto do aprendizado e experiência lidando com diversos desafios, foi o primeiro projeto que eu botei no ar, então com certeza teve um desafio inicial lidando com deploy',
    tecnologias: ['HTML', 'CSS', 'Java Script'],
    imagens: [juhome, fesonho],
    demo: 'https://qfelipee.github.io/1ano-felipe-julia/'
  },
  {
    titulo: 'SafeClass',
    descricao: 'Projeto acadêmico: Esse projeto visa monitorar os componentes de Hardware de Pc´s escolares, visando alertar quando algo sair do esperado, assim ajudando as escolas públicas a conseguirem usar a tecnologia a favor da educação evitando que eles tenham um problema e não saibam a causa raiz, com inovação de inteligência artificial, modelo de previsão e muito mais!',
    tecnologias: ['Java', 'Python', 'Docker', 'AWS EC2', 'MySQL', 'HTML', 'CSS', 'Java Script', 'Node.js' ],
    imagens: [printEscola, printEscola2],
    obs: 'Projeto acadêmico sem uso real.'
  },
  {
    titulo: 'Project Veigh',
    descricao: 'Website interativo com formulário de cadastro e quiz temático. Desenvolvido com foco em CRUD, banco de dados e tecnologias como Node.js, HTML e CSS. O projeto reforça práticas de desenvolvimento web e lógica de programação.',
    tecnologias: ['HTML', 'CSS', 'Java Script', 'Node.js', 'MySQL'],
    imagens: [printVeigh, printVeigh2],
    obs: 'Projeto acadêmico sem deploy'
  }

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