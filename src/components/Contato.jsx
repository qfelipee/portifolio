import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const contatos = [
  { nome: 'E-mail', url: 'mailto:seu-email@exemplo.com', icone: SiGmail },
  { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/seu-perfil', icone: FaLinkedin },
  { nome: 'WhatsApp', url: 'https://wa.me/5511910838632', icone: FaWhatsapp },
]

function Contato() {
  return (
    <section id="contato">
      <h2>Vamos conversar?</h2>
      <ul className="contatos">
        {contatos.map((c) => {
          const Icone = c.icone
          return (
            <li key={c.nome}>
              <a href={c.url} target="_blank" rel="noreferrer">
                <Icone /> {c.nome}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Contato