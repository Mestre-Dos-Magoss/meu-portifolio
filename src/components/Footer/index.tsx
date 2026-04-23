import LinkNetWorks from '../LinkNetWorks'
import * as S from './styles'

import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterFull>
      <S.FooterContainer>
        <div>
          <h2>
            <span>&lt;</span>Juliano Dev<span> / &gt;</span>
          </h2>
          <p>
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            excepcionais.
          </p>
        </div>
        <div>
          <h4>Links Rápidos</h4>
          <ul>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>
        </div>
        <div>
          <h4>Conecte-se</h4>
          <ul>
            <li>
              <LinkNetWorks color='secundaria'
                name="Github"
                description="Clique aqui para acessar o meu repositório no GitHub"
                image={github}
                link="#"
              />
            </li>
            <li>
              <LinkNetWorks color='secundaria'
                name="LinkedIn"
                description="Clique aqui para acessar o meu perfil no LinkedIn"
                image={linkedin}
                link="#"
              />
            </li>
            <li>
              <LinkNetWorks color='secundaria'
                name="Email"
                description="Clique aqui para me enviar uma mensagem via email"
                image={email}
                link="#"
              />
            </li>
          </ul>
        </div>
      </S.FooterContainer>
      <S.Gracias>
        <p>
          &copy; {currentYear} Juliano Dev. Feito com dedicação e muito &lt;/
          &gt; código.💻☕
        </p>
      </S.Gracias>
    </S.FooterFull>
  )
}

export default Footer
