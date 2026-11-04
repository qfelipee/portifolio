function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <p>© {new Date().getFullYear()} Felipe de Carvalho Ferraz. Feito com React e Vite.</p>
        <a href="#">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default Footer
