import { FaExternalLinkAlt } from 'react-icons/fa'
import Carrossel from './Carrossel'

function ProjetoCard({ titulo, contexto, descricao, tecnologias, imagens = [], ampliavel = true, demo, obs }) {
  const temMidia = imagens.length > 0

  return (
    <article className={`projeto-card${temMidia ? '' : ' projeto-card--texto'}`}>
      {temMidia && <Carrossel imagens={imagens} titulo={titulo} ampliavel={ampliavel} />}

      <div className="projeto-info">
        <div className="projeto-cabecalho">
          <h3>{titulo}</h3>
          {contexto && <span className="pill">{contexto}</span>}
        </div>

        <p className="projeto-descricao">{descricao}</p>

        <ul className="chips" aria-label="Tecnologias usadas">
          {tecnologias.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {obs && <p className="projeto-obs">{obs}</p>}

        {demo && (
          <a className="btn btn-outline" href={demo} target="_blank" rel="noreferrer">
            Ver funcionando <FaExternalLinkAlt aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjetoCard
