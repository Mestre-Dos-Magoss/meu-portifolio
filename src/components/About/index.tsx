import { useContext } from 'react'

import SectionAbout from '../SectionAbout'
import { InitialPresentation } from '../../styles/styles'
import Button from '../Buttons'
import Span from '../Span'

import padlock from '../../assets/cadeado.svg'
import email from '../../assets/email.svg'
import presentation from '../../assets/presentation.jpg'

import { redirectUserToPage } from '../../utils'
import { LanguageContext } from '../../contexts/LanguageContext'

const About = () => {
  const { t } = useContext(LanguageContext)
  return (
    <SectionAbout
      color="principal"
      className="paddingTopBottom container"
      id="about"
    >
      <InitialPresentation>
        <img src={presentation} alt="Juliano Dev trabalhando" />
      </InitialPresentation>
      <InitialPresentation>
        <Span>{t.about.Span}</Span>
        <h3 className="h2">Juliano Dev</h3>
        <p>{t.about.description1}</p>
        <p>{t.about.description2}</p>
        <div>
          <Button
            color="secundario"
            type="button"
            title={t.presentation.buttonContactDescription}
            action={() => redirectUserToPage('#contact')}
          >
            <img src={email} alt="Ícone de email" />
            {t.presentation.buttonContact}
          </Button>
          <Button
            color="principal"
            type="button"
            title={t.presentation.buttonProjectsDescription}
            action={() => redirectUserToPage('#projects')}
          >
            <img src={padlock} alt="" />
            {t.presentation.buttonProjectsText}
          </Button>
        </div>
      </InitialPresentation>
    </SectionAbout>
  )
}

export default About
