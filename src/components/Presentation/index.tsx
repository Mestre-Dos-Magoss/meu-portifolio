import { useContext } from 'react'

import Span from '../Span'
import Button from '../Buttons'
import SectionAbout from '../SectionAbout'
import { InitialPresentation } from '../../styles/styles'

import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import LinkNetWorks from '../LinkNetWorks'
import programimg from '../../assets/programim.jpg'

import { redirectUserToPage } from '../../utils'
import { LanguageContext } from '../../contexts/LanguageContext'

const Presentation = () => {
  const { t } = useContext(LanguageContext)

  return (
    <SectionAbout color="secundario" className="container" id="home">
      <InitialPresentation>
        <Span>{t.presentation.Span}</Span>
        <h2>
          {t.presentation.title} <span>{t.presentation.titleSpan}</span>
        </h2>
        <p>{t.presentation.description}</p>
        <div>
          <Button
            color="secundario"
            padding="16px 32px"
            title={t.presentation.buttonProjectsDescription}
            type="button"
            action={() => redirectUserToPage('#projects')}
          >
            {t.presentation.buttonProjectsText}
          </Button>
          <Button
            color="principal"
            padding="16px 32px"
            title={t.presentation.buttonContactDescription}
            type="button"
            action={() => redirectUserToPage('#contact')}
          >
            {t.presentation.buttonContact}
          </Button>
        </div>
        <div>
          <LinkNetWorks
            color="principal"
            name="Github"
            description={t.LinkNetWorks.github}
            image={github}
            link="https://github.com/Mestre-Dos-Magoss"
          />
          <LinkNetWorks
            color="principal"
            name="LinkedIn"
            description={t.LinkNetWorks.linkedin}
            image={linkedin}
            link="https://linkedin.com/in/juliano-apolinário-devfullstack"
          />
        </div>
      </InitialPresentation>
      <InitialPresentation>
        <img src={programimg} alt="Juliano Dev working" />
      </InitialPresentation>
    </SectionAbout>
  )
}

export default Presentation
