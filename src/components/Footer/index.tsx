import { useContext } from 'react'

import LinkNetWorks from '../LinkNetWorks'
import * as S from './styles'

import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'

import { LanguageContext } from '../../contexts/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useContext(LanguageContext)

  return (
    <S.FooterFull>
      <S.FooterContainer className="container">
        <div>
          <h2>
            <span>&lt;</span>Juliano Dev<span> / &gt;</span>
          </h2>
          <p>{t.Footer.text}</p>
        </div>
        <div>
          <h4>{t.Footer.linksRapidos.title}</h4>
          <ul>
            <li>
              <a href="#about">{t.Footer.linksRapidos.about}</a>
            </li>
            <li>
              <a href="#specialties">{t.Footer.linksRapidos.specialties}</a>
            </li>
            <li>
              <a href="#projects">{t.Footer.linksRapidos.projects}</a>
            </li>
            <li>
              <a href="#contact">{t.Footer.linksRapidos.contact}</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>{t.Footer.conectse}</h4>
          <ul>
            <li>
              <LinkNetWorks
                color="secundaria"
                name="Github"
                description={t.LinkNetWorks.github}
                image={github}
                link="https://github.com/Mestre-Dos-Magoss"
              />
            </li>
            <li>
              <LinkNetWorks
                color="secundaria"
                name="LinkedIn"
                description={t.LinkNetWorks.linkedin}
                image={linkedin}
                link="https://linkedin.com/in/juliano-apolinário-devfullstack"
              />
            </li>
            <li>
              <LinkNetWorks
                color="secundaria"
                name="Email"
                description={t.LinkNetWorks.email}
                image={email}
                link="mailto:julianodev91@gmail.com"
              />
            </li>
          </ul>
        </div>
      </S.FooterContainer>
      <S.Gracias>
        <p>
          &copy; {currentYear} Juliano Dev. {t.Footer.text} &lt;/ &gt;{' '}
          {t.Footer.finally}.💻☕
        </p>
      </S.Gracias>
    </S.FooterFull>
  )
}

export default Footer
