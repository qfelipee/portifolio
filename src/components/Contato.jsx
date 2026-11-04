import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const contatos = [
  { nome: 'E-mail', url: 'mailto:fcferraz7@gmail.com', icone: SiGmail },
  { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-ferraz-4a7a96377/', icone: FaLinkedin },
  { nome: 'WhatsApp', url: 'https://wa.me/5511910838632', icone: FaWhatsapp },
]

function Contato() {
  return (
    <section id="contato">
      <h2>Vamos conversar?</h2>
      <p className="contato-texto">
        Tem uma ideia, uma vaga ou um projeto? Fale comigo por qualquer um destes
        canais.
      </p>
      <ul className="contatos">
        {contatos.map((c) => {
          const Icone = c.icone
          const externo = c.url.startsWith('http')
          return (
            <li key={c.nome}>
              <a
                href={c.url}
                {...(externo ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icone aria-hidden="true" /> {c.nome}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Contato
