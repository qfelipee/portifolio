
function BotaoCurriculo({
  className = 'btn btn-outline',
  label = 'Baixar currículo'
}) {
  return (
    
    <a
      className={className}
      href="/curriculo-felipe-ferraz.pdf"
      download="Felipe-Curriculo.pdf"
    >
      {label}
    </a>
  )
}


export default BotaoCurriculo
