function ProjetoCard({ titulo, descricao, tecnologias, imagens = [], demo, obs }) {
    return (
        <article className="projeto-card">
            {imagens.length > 0 && (
                <div className="projeto-imagens">
                    {imagens.map((src, i) => (
                        <img key={src} src={src} alt={`Tela ${i + 1} do projeto ${titulo}`} />
                    ))}
                </div>
            )}
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p className="projeto-tech">{tecnologias.join(' · ')}</p>
            {obs && <p className="projeto-obs">{obs}</p>}
            {demo && (
               <a className="btn btn-outline" href={demo} target="_blank" rel="noreferrer">
                    Ver funcionando →
                </a>
            )}
        </article>
    )
}

export default ProjetoCard