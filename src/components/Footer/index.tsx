import LinkNetWorks from '../LinkNetWorks'
import * as S from './styles'

import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterFull>
      <S.FooterContainer className="container">
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
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#specialties">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contatos</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Conecte-se</h4>
          <ul>
            <li>
              <LinkNetWorks
                color="secundaria"
                name="Github"
                description="Clique aqui para acessar o meu repositório no GitHub"
                image={github}
                link="https://github.com/Mestre-Dos-Magoss"
              />
            </li>
            <li>
              <LinkNetWorks
                color="secundaria"
                name="LinkedIn"
                description="Clique aqui para acessar o meu perfil no LinkedIn"
                image={linkedin}
                link="https://linkedin.com/in/juliano-apolinário-devfullstack"
              />
            </li>
            <li>
              <LinkNetWorks
                color="secundaria"
                name="Email"
                description="Clique aqui para me enviar uma mensagem via email"
                image={email}
                link="mailto:julianodev91@gmail.com"
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
